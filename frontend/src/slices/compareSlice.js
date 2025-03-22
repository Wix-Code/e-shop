import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compare: JSON.parse(localStorage.getItem("compare")) || [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addCompare: (state, action) => {
      const exist = state.compare.find((item) => item._id === action.payload.id);
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