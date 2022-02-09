import "antd/dist/antd.css";
import { PageHeader } from "antd";
import { LoadingSpinner } from "./LoadingSpinner";
import { LoadingError } from "./LoadingError";
import { NewsItemCard } from "./NewsItemCard";
import {
  selectData,
  selectLoadingStatus,
  selectErrorStatus,
} from "../features/newsList/newsListThunk";
import { useSelector } from "react-redux";
import { INewsItem } from "../types";

export const News = () => {
  const data = useSelector(selectData);
  const isLoading = useSelector(selectLoadingStatus);
  const isError = useSelector(selectErrorStatus);

  return (
    <div className="news">
      <PageHeader title="News feed" />
      {isLoading && <LoadingSpinner />}
      {isError && <LoadingError />}
      {!isError &&
        data.map((newsItem: INewsItem, key: string) => {
          return <NewsItemCard data={newsItem} key={key} />;
        })}
    </div>
  );
};
