import "antd/dist/antd.css";
import { Card, Button, Layout, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteElement } from "../features/dataFetch/dataFetchSlice";
import { formatDate } from "../utilities";

export const NewsItemCard = ({ data }: any) => {
  const { Meta } = Card;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteElement(data.title));
    navigate("/news");
    message.success("News item was successfully removed");
  };

  return (
    <Card
      hoverable
      style={{
        display: "flex",
        width: "55%",
        padding: "1.5rem",
        margin: "1.5rem 0",
      }}
      className="news-item-card"
    >
      <Meta title={data.title} description={data.description} />
      <Typography
        style={{ marginTop: "0.5rem", fontSize: "0.6rem", fontWeight: "500" }}
      >{`Published: ${formatDate(data.publishedAt)}`}</Typography>
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
        <Button style={{ marginTop: "1.5rem" }} onClick={handleDelete}>
          Delete
        </Button>
      </Layout>
    </Card>
  );
};
