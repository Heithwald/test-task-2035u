import "antd/dist/antd.css";
import { PageHeader } from "antd";
import { NewsItemCard } from "./NewsItemCard";
import { selectData } from "../features/dataFetch/dataFetchSlice";
import { useSelector } from "react-redux";

export const News = () => {
  interface NewsItem {
    title: string;
    id: string;
    author: string;
    description: string;
    url: string;
    publishedAt: string;
  }

  const data = useSelector(selectData);

  return (
    <div className="news">
      <PageHeader title="News feed" />
      {data.map((newsItem: NewsItem, key: string) => {
        return <NewsItemCard data={newsItem} key={key} />;
      })}
    </div>
  );
};
