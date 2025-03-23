import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../libs/Api";
import { toast } from 'react-toastify'

const initialState = {
  wishlist: [],
  loading: false,
  error: null, //JSON.parse(localStorage.getItem("wishlist")) || [],
};

const user = JSON.parse(localStorage.getItem("user")) || {};
const userId = user?.others?._id;
console.log(userId, "userId")

export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async (_, { rejectWithValue }) => {
  try {
    if (userId) {
      // ✅ Fetch from API for logged-in users
      const { data } = await Api.get("/wishlist");
      console.log(data, "res")
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

export const deleteFromWishlist = createAsyncThunk(
  "wishlist/deleteFromWishlist",
  async ({ userId, productId }, { rejectWithValue }) => {
    //const item = action.payload;
    try {
      if (userId) {
        // ✅ API call for logged-in users
        const { data } = await Api.post("/wishlist/delete", {userId, productId });
        toast.success(data?.message);
        return productId; // ✅ Return productId to remove from Redux state
      } else {
        // ✅ Remove from localStorage for unauthenticated users
        let localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        localWishlist = localWishlist.filter((item) => item._id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(localWishlist));
        toast.success("Item removed from wishlist");
        return productId;
      }
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
      return rejectWithValue(error.response?.data || "Failed to delete item");
    }
  }
);


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
            //state.wishlist.push(item); 
            toast.success(data?.message)
            return item;
            console.log(data, "Wishlist item added to DB");
          } catch (error) {
            console.error("Error adding wishlist item:", error);
            //alert("Item already in wishlist");
          }
        })();
      }
    },
    /*deleteFromWishlist: (state, action) => {
      if (!userId) {
        state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        toast.success("Item removed from wishlist");
      }else{
        (async () => {
          const item = action.payload;
          try {
            const { data } = await Api.post("/wishlist/delete", {
              productId: item._id
            });
            console.log(data, "res")
            toast.success(data.message)
            return data;
          } catch (error) {
            console.error("Error deleting wishlist item:", error);
            //alert("Item not found in wishlist");
          }
        })();
      }
    }*/
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload; // ✅ Update Redux state
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteFromWishlist.fulfilled, (state, action) => {
        state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);
      });
  },
});

export const { addWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;