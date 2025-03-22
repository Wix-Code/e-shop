import { createSlice } from "@reduxjs/toolkit";
import Api from "../libs/Api";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const user = JSON.parse(localStorage.getItem("user")) || {};
const userId = user?.others?._id;
console.log(userId, "userId")
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const exist = state.wishlist.find((item) => item._id === action.payload._id);

      if (exist) {
        alert("Item already in wishlist");
        return;
      }

      if (!userId) {
        state.wishlist.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      } else {
        (async () => {
          const item = action.payload;
          try {
            const { data } = await Api.post("/wishlist", { userId, productId: item._id,
              title: item.title,
              description: item.description,
              cat: item.cat,
              price: item.price,
              img: item.img[0] });
            console.log(data, "Wishlist item added to DB");
          } catch (error) {
            console.error("Error adding wishlist item:", error);
          }
        })();
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