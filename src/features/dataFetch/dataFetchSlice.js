import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "dataFetch",
  initialState: {
    data: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
    },
    deleteElement: (state, action) => {
      let reducedArray = state.data.filter(
        (element) => element.title !== action.payload
      );
      state.data = reducedArray;
    },
  },
});

export const { fetchData, deleteElement } = slice.actions;
export const selectData = (state) => state.dataFetch.data;
export default slice.reducer;
