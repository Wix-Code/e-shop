import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const exist = state.wishlist.find((item) => item._id === action.payload.id);
      if (!exist) {
        state.wishlist.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      } else {
        alert("Item already in wishlist");
      }
    },
    deleteFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addWishlist, deleteFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;