import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../libs/Api";
import { fetchWishlist } from "./wishlistSlice";

// Register User
export const registerUser = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const { data } = await Api.post(`/auth/register`, userData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Login User
export const loginUser = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
  try {
    const { data } = await Api.post(`/auth/login`, userData);
    localStorage.setItem("user", JSON.stringify(data));
    if (data?.user) {
      const userId = data.user._id;

      // ✅ Transfer local wishlist to DB
      const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if (localWishlist.length > 0) {
        await Api.post("/wishlist/push", { userId, wishlistItems: localWishlist });
        localStorage.removeItem("wishlist"); // ✅ Clear local wishlist
      }

      dispatch(fetchWishlist(userId)); // ✅ Fetch updated wishlist from DB
    }
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Logout User
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: JSON.parse(localStorage.getItem("user")) || null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload.message;
      });
  },
});

export default authSlice.reducer;