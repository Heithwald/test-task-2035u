import "antd/dist/antd.css";
import { Card, Button, Layout, Typography } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate } from "../utilities";

const NewsItemCardBody = styled(Card)`
  display: flex;
  width: 55%;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const PublishedAt = styled(Typography)`
  margin-top: 0.6rem;
  font-size: 0.6rem;
  font-weight: 500;
`;

const Container = styled(Layout)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
  background: inherit;
`;

const ReadMoreButton = styled(Button)``;

export const NewsItemCard = ({ data }: any) => {
  const { Meta } = Card;

  return (
    <NewsItemCardBody hoverable>
      <Meta title={data.title} description={data.description} />
      <PublishedAt>{`Published: ${formatDate(data.publishedAt)}`}</PublishedAt>
      <Container>
        <ReadMoreButton>
          <Link to={`/news/${data.routeTitle}`}>Read more</Link>
        </ReadMoreButton>
      </Container>
    </NewsItemCardBody>
  );
};
