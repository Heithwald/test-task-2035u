import "./App.css";
import { useEffect } from "react";

import { store } from "./app/store";
import { Provider, useDispatch } from "react-redux";
import { getNewsData } from "./features/newsList/newsListThunk";

import { News } from "./components/News";
import { NewsItem } from "./components/NewsItem";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsData());
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
