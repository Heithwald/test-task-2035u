import "antd/dist/antd.css";
import { Card, Button, Layout, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteElement } from "../features/dataFetch/dataFetchSlice";
import { titleToRoute } from "../utilities";
import { NewsItem } from "./NewsItem";

import { Route, Routes, Link } from "react-router-dom";

export const NewsItemCard = ({ data }: any) => {
  const { Meta } = Card;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteElement(data.title));
    message.success("News item was successfully removed");
  };

  const cancelDelete = () => {
    message.error("News item was not removed");
  };

  return (
    <>
      <Routes>
        <Route
          path={`/news/*title:${titleToRoute(data.title)}`}
          element={<NewsItem data={data} />}
        />
      </Routes>

      <Card
        hoverable
        style={{ width: "50%", padding: "1.5rem", margin: "1.5rem 0" }}
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
          <Popconfirm
            title="Are you sure you want to delete this card?"
            onConfirm={handleDelete}
            onCancel={cancelDelete}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <DeleteOutlined />
              Delete
            </Button>
          </Popconfirm>
          <Button>
            <Link
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              to={`/news/*title:${titleToRoute(data.title)}`}
            />
            Read more
          </Button>
        </Layout>
      </Card>
    </>
  );
};
