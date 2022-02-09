import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { titleToRoute } from "../../utilities";

const URL = `
    ${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_URL_PARAMETERS}${process.env.REACT_APP_API_KEY}`;

export const getNewsData = createAsyncThunk("newsList/getNews", async () => {
  const data = await axios
    .get(URL)
    .then((response) => response.data.articles)
    .catch((error) => JSON.stringify(error));
  return data;
});

// TODO: try RTKQuery
export const slice = createSlice({
  name: "newsList",
  initialState: {
    data: [],
    loading: false,
    error: { occured: false, data: null },
  },
  reducers: {
    deleteElement: (state, action) => {
      let reducedArray = state.data.filter((element) => {
        return element.title !== action.payload;
      });
      state.data = reducedArray;
    },
  },
  extraReducers: {
    [getNewsData.pending]: (state) => {
      state.loading = true;
    },
    [getNewsData.fulfilled]: (state, { payload }) => {
      // в стандартном случае, данные придут в виде объекта, в случае ошибки - как строка, иначе redux орёт на non-serializable value
      if (typeof payload === "string") {
        state.error.occured = true;
        state.error.data = JSON.parse(payload);
      } else {
        const normalizedData = payload.map((item) => {
          return {
            ...item,
            routeTitle: titleToRoute(item.title), // трансформация title в более удобоваримый для передачи в параметр и для построения URL
          };
        });
        state.data = normalizedData;
      }
      state.loading = false;
    },
    [getNewsData.rejected]: (state, { payload }) => {
      state.error.occured = true;
      state.error.data = payload;
      state.loading = false;
    },
  },
});

export const { deleteElement } = slice.actions;
export const selectData = (state) => state.newsList.data;
export const selectLoadingStatus = (state) => state.newsList.loading;
export const selectErrorStatus = (state) => state.newsList.error.occured;
export default slice.reducer;
