/*import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (!exist) {
        state.cart.push({ ...action.payload, qty: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        alert("Item already in cart");
      }
    },
    incCart: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decCart: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const selectCartTotal = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

export const { addToCart, incCart, decCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;*/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../libs/Api";

const API_URL = "http://localhost:5000/api/cart"; // Change to your backend URL

// Load cart from local storage
const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("guestCart");
  return cart ? JSON.parse(cart) : [];
};

// Save cart to local storage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("guestCart", JSON.stringify(cart));
};

// Move local cart to database after user registers/logs in
export const syncCartToDB = createAsyncThunk("cart/syncToDB", async (userId, { getState }) => {
  const { cartItems } = getState().cart;
  if (cartItems.length > 0) {
    await Api.post(`/cart/sync`, { userId, cartItems });
    localStorage.removeItem("guestCart");
  }
  return cartItems;
});

// Fetch cart for authenticated users
export const fetchCartFromDB = createAsyncThunk("cart/fetch", async (userId) => {
  const { data } = await Api.get(`/cart/${userId}`);
  return data.cart;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: loadCartFromLocalStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const { userId, item } = action.payload || {};

      if (!item || !item.productId) return;

      if (userId) {
        // Authenticated User → Send API request to update DB
        Api.post(`/cart/increase`, { userId, item });
      } else {
        // Guest User → Save in localStorage
        const existingItem = state.cartItems.find((i) => i.id === item.id)
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          state.cartItems.push(item);
        }
        saveCartToLocalStorage(state.cartItems);
      }
    },
    incCart: (state, action) => {
      const { userId, productId } = action.payload;
      const item = state.cartItems.find((i) => i.productId === productId);
      
      if (item) {
        item.quantity += 1;

        if (userId) {
          Api.put(`/cart/increase/${userId}/${productId}`, { quantity: item.quantity });
        } else {
          saveCartToLocalStorage(state.cartItems);
        }
      }
    },
    decCart: (state, action) => {
      const { userId, productId } = action.payload;
      const item = state.cartItems.find((i) => i.productId === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;

        if (userId) {
          Api.put(`/cart/decrease/${userId}/${productId}`, { quantity: item.quantity });
        } else {
          saveCartToLocalStorage(state.cartItems);
        }
      }
    },
    removeFromCart: (state, action) => {
      const { userId, productId } = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.productId !== productId);

      if (userId) {
        Api.delete(`/cart/remove/${userId}/${productId}`);
      } else {
        saveCartToLocalStorage(state.cartItems);
      }
    },
    setCart: (state, action) => {
      state.cartItems = action.payload;
      saveCartToLocalStorage(state.cartItems);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(syncCartToDB.fulfilled, (state) => {
        state.cartItems = [];
      })
      .addCase(fetchCartFromDB.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      });
  },
});

export const cartTotalPrice = (cartItems = []) => {
  if (!Array.isArray(cartItems)) return 0;
  return cartItems.reduce((total, item) => total + (item.price * item.quantity || 0), 0);
};

export const { addToCart, incCart, decCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
