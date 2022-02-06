import "antd/dist/antd.css";
import { PageHeader } from "antd";
import { NewsItemCard } from "./NewsItemCard";
import { NewsItem } from "./NewsItem";

export const News = ({ data }: any) => {
  interface NewsItem {
    title: string;
    author: string;
    description: string;
    url: string;
    publishedAt: string;
  }

  return (
    <div className="news">
      <PageHeader title="News feed" />
      {data.map((newsItem: NewsItem, key: string) => {
        return <NewsItemCard data={newsItem} key={key} />;
      })}
    </div>
  );
};
