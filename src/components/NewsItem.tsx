import "antd/dist/antd.css";
import {
  Card,
  Button,
  Layout,
  Typography,
  Popconfirm,
  PageHeader,
  message,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectData,
  deleteElement,
} from "../features/dataFetch/dataFetchSlice";
import { formatDate } from "../utilities";

export const NewsItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const newsItem = data.find(
    (newsItem: NewsItem) => newsItem.routeTitle === params.title
  );

  const { Meta } = Card;

  interface NewsItem {
    title: string;
    id: string;
    routeTitle: string;
    author: string;
    description: string;
    url: string;
    publishedAt: string;
  }

  const handleDelete = () => {
    dispatch(deleteElement(data.title));
    navigate("/news");
    message.success("News item was successfully removed");
  };

  const cancelDelete = () => {
    message.error("News item was not removed");
  };

  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageHeader title="News feed" />
      <Card
        hoverable
        style={{ width: "50%", padding: "1.5rem", margin: "1.5rem 0" }}
        className="news-item-card"
      >
        <Meta title={newsItem.title} description={newsItem.description} />
        <Typography
          style={{ marginTop: "0.5rem", fontSize: "0.6rem", fontWeight: "500" }}
        >{`Published: ${formatDate(newsItem.publishedAt)}`}</Typography>
        <Typography style={{ marginTop: "1.5rem" }}>
          {newsItem.content}
        </Typography>
        <Popconfirm
          title="Are you sure you want to delete this card?"
          onConfirm={handleDelete}
          onCancel={cancelDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ marginTop: "1.5rem" }}>
            <DeleteOutlined />
            Delete
          </Button>
        </Popconfirm>
      </Card>
    </Layout>
  );
};
