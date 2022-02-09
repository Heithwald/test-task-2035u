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
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectData, deleteElement } from "../features/newsList/newsListThunk";
import { formatDate } from "../utilities";
import { INewsItem } from "../types";

const Container = styled(Layout)`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

const NewsItemBody = styled(Card)`
  width: 55%;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const PublishedAt = styled(Typography)`
  margin-top: 0.6rem;
  font-size: 0.6rem;
  font-weight: 500;
`;

const NewsItemContent = styled(Typography)`
  margin-top: 1.5rem;
`;

const DeleteButton = styled(Button)`
  margin-top: 1.5rem;
`;

export const NewsItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const newsItem = data.find(
    (newsItem: INewsItem) => newsItem.routeTitle === params.title
  );

  const handleDelete = () => {
    dispatch(deleteElement(newsItem.title));
    navigate("/news");
    message.success("News item was successfully removed");
  };

  const cancelDelete = () => {
    message.error("News item was not removed");
  };

  const { Meta } = Card;

  // TODO: styled components для большей читаемости UI ниже

  return (
    <Container>
      <PageHeader title="News feed" />
      <NewsItemBody hoverable>
        <Meta title={newsItem.title} description={newsItem.description} />

        <PublishedAt>
          {`Published: ${formatDate(newsItem.publishedAt)}`}
        </PublishedAt>

        <NewsItemContent>{newsItem.content}</NewsItemContent>
        <Popconfirm
          title="Are you sure you want to delete this card?"
          onConfirm={handleDelete}
          onCancel={cancelDelete}
          okText="Yes"
          cancelText="No"
        >
          <DeleteButton>
            <DeleteOutlined />
            Delete
          </DeleteButton>
        </Popconfirm>
      </NewsItemBody>
    </Container>
  );
};
