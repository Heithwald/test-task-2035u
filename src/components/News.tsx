import "antd/dist/antd.css";
import { PageHeader } from "antd";
import { LoadingSpinner } from "./LoadingSpinner";
import { LoadingError } from "./LoadingError";
import { NewsItemCard } from "./NewsItemCard";
import {
  selectData,
  selectApiCallStatus,
} from "../features/newsList/newsListSlice";
import { useSelector } from "react-redux";
import { INewsItem } from "../types";

export const News = () => {
  const data = useSelector(selectData);
  const apiCallStatus = useSelector(selectApiCallStatus);

  return (
    <div className="news">
      <PageHeader title="News feed" />
      {apiCallStatus === "Pending" && <LoadingSpinner />}
      {apiCallStatus === "Success" &&
        data.map((newsItem: INewsItem, key: string) => {
          return <NewsItemCard data={newsItem} key={key} />;
        })}
      {apiCallStatus === "Error" && <LoadingError />}
    </div>
  );
};
