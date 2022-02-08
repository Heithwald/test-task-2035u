import "antd/dist/antd.css";
import { Card, Button, Layout } from "antd";
import { Link } from "react-router-dom";

export const NewsItemCard = ({ data }: any) => {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{
        display: "flex",
        width: "50%",
        padding: "1.5rem",
        margin: "1.5rem 0",
      }}
      className="news-item-card"
    >
      <Meta title={data.title} description={data.description} />

      <Layout
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "1.5rem",
          background: "inherit",
        }}
      >
        <Button
          style={{
            display: "flex",
          }}
        >
          <Link
            style={{
              display: "flex",
            }}
            to={`/news/${data.routeTitle}`}
          >
            Read more
          </Link>
        </Button>
      </Layout>
    </Card>
  );
};
