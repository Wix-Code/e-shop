import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../libs/Api";
import { toast } from 'react-toastify'

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const user = JSON.parse(localStorage.getItem("user")) || {};
const userId = user?.others?._id;
console.log(userId, "userId")

export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async (_, { rejectWithValue }) => {
  try {
    if (userId) {
      // ✅ Fetch from API for logged-in users
      const { data } = await Api.get("/wishlist",{userId});
      return data.wishlist || [];
    } else {
      // ✅ Fetch from localStorage for unauthenticated users
      const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      return localWishlist;
    }
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return rejectWithValue(error.response?.data || "Failed to fetch wishlist");
  }
});


const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const exist = state.wishlist.find((item) => item._id === action.payload._id);

      /*if (exist) {
        alert("Item already in wishlist");
        return;
      }*/

      if (!userId) {
        if (exist) {
          toast.warn("Item already in wishlist");
          return;
        } else {
          state.wishlist.push(action.payload);
          localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
          toast.success("Item added to wishlist");
        };
      } else {
        (async () => {
          const item = action.payload;
          try {
            const { data } = await Api.post("/wishlist", { userId, productId: item._id,
              title: item.title,
              description: item.description,
              cat: item.cat,
              price: item.price,
              img: item.img[0]
            });
            toast.success(data?.message)
            console.log(data, "Wishlist item added to DB");
          } catch (error) {
            console.error("Error adding wishlist item:", error);
            alert("Item already in wishlist");
          }
        })();
      }
    },
    deleteFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      toast.success("Item removed from wishlist");
    },
  },
});

export const { addWishlist, deleteFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;