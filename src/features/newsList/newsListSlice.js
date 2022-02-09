import { createSlice } from "@reduxjs/toolkit";
import { titleToRoute } from "../../utilities";

// TODO: createAsyncThunk || RTKQuery
export const slice = createSlice({
  name: "newsList",
  initialState: {
    data: [],
    apiCall: { status: "Pending" },
  },
  reducers: {
    fetchData: (state, action) => {
      const normalizedData = action.payload.map((item) => {
        return {
          ...item,
          routeTitle: titleToRoute(item.title), // трансформация title в более удобоваримый для передачи в параметр и для построения URL
        };
      });
      state.data = normalizedData;
    },
    setApiCallStatus: (state, action) => {
      state.apiCall.status = action.payload;
    },
    deleteElement: (state, action) => {
      let reducedArray = state.data.filter((element) => {
        return element.title !== action.payload;
      });
      state.data = reducedArray;
      console.log("reducer", reducedArray);
    },
  },
});

export const {
  fetchData,
  setApiCallStatus,
  setApiCallError,
  getNewsItem,
  deleteElement,
} = slice.actions;
export const selectData = (state) => state.newsList.data;
export const selectApiCallStatus = (state) => state.newsList.apiCall.status;
export default slice.reducer;
