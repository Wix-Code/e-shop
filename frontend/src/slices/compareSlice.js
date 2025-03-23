import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../libs/Api";

//API FUNCTIONS

export const addCompareApi = async(data)=>{
  try {
      const res=await Api.post("/compare",data)
      return res.data
  } catch (error) {
      throw error.response.data
  }
}

export const createWishlistItemAsync=createAsyncThunk('wishlist/createWishlistItemAsync',async(data)=>{
  const createdItem=await addCompareApi(data)
  return createdItem
})



const initialState = {
  compare: JSON.parse(localStorage.getItem("compare")) || [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addCompare: (state, action) => {
      const exist = state.compare.find((item) => item._id === action.payload._id);
      if (!exist) {
        state.compare.push(action.payload);
        localStorage.setItem("compare", JSON.stringify(state.compare));
      } else {
        alert("Item already in compare list");
      }
    },
    resetCompare: (state) => {
      state.compare = [];
      localStorage.setItem("compare", JSON.stringify([]));
    },
  },
});

export const { addCompare, resetCompare } = compareSlice.actions;
export default compareSlice.reducer;