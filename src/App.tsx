import "./App.css";
import { useState, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import axios from "axios";

import { store } from "./app/store";
import { fetchData, setApiCallStatus } from "./features/newsList/newsListSlice";

import { News } from "./components/News";
import { NewsItem } from "./components/NewsItem";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = ({ children }: any) => {
  const dispatch = useDispatch();
  const URL = `
    ${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_URL_PARAMETERS}${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        dispatch(fetchData(response.data.articles));
        dispatch(setApiCallStatus("Success"));
      })
      .catch((error) => {
        console.log(error.toJSON());
        dispatch(setApiCallStatus("Error"));
      });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/test-task-2035u" element={<Navigate to="/news" />} />
          <Route path="/" element={<Navigate to="/news" />} />
          <Route path="/news/" element={<News />}></Route>
          <Route path="/news/:title" element={<NewsItem />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
