import "antd/dist/antd.css";
import { Card, Typography } from "antd";

export const NewsItem = ({ data }: any) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: "50%", padding: "1.5rem", margin: "1.5rem 0" }}
      className="news-item-card"
    >
      <Meta title={data.title} description={data.description} />

      <Typography style={{ marginTop: "1.5rem" }}>{data.content}</Typography>
    </Card>
  );
};
