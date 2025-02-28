import { createSlice } from "@reduxjs/toolkit";

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
export default cartSlice.reducer;
