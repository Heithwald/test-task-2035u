import "./App.css";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./app/store";
import { fetchData, selectData } from "./features/dataFetch/dataFetchSlice";
import { useEffect } from "react";
import axios from "axios";
import { News } from "./components/News";
import { NewsItem } from "./components/NewsItem";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = ({ children }: any) => {
  const dispatch = useDispatch();

  const data = useSelector(selectData);

  const URL =
    "https://newsapi.org/v2/everything?q=education&apiKey=d8164f53df774c6eaf90a07f705ecc01";

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log("Response:", response.data.articles);
      dispatch(fetchData(response.data.articles));
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
