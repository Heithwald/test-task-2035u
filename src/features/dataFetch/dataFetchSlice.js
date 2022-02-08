import { createSlice } from "@reduxjs/toolkit";
import { titleToRoute } from "../../utilities";

export const slice = createSlice({
  name: "dataFetch",
  initialState: {
    data: [],
  },
  reducers: {
    fetchData: (state, action) => {
      const normalizedData = action.payload.map((item) => {
        return {
          ...item,
          routeTitle: titleToRoute(item.title), // трансформация title в более удобоваримый для передачи в параметр и для построения URL
        };
      });
      console.log("normalizedData", normalizedData);
      state.data = normalizedData;
    },
    deleteElement: (state, action) => {
      let reducedArray = state.data.filter(
        (element) => element.title !== action.payload
      );
      state.data = reducedArray;
    },
  },
});

export const { fetchData, getNewsItem, deleteElement } = slice.actions;
export const selectData = (state) => state.dataFetch.data;
export default slice.reducer;
