import "./App.css";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./app/store";
import { fetchData, selectData } from "./features/dataFetch/dataFetchSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { News } from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ({ children }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=education&apiKey=d8164f53df774c6eaf90a07f705ecc01"
      )
      .then((response) => {
        console.log("Response:", response.data.articles);
        dispatch(fetchData(response.data.articles));
      });
  }, []);

  const data = useSelector(selectData);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/news/*" element={<News data={data} />} />
          <Route path="/news/*title:" element={<News data={data} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
