import { configureStore } from "@reduxjs/toolkit";
import dataFetchReducer from "../features/dataFetch/dataFetchSlice";

export const store = configureStore({
  reducer: { dataFetch: dataFetchReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
