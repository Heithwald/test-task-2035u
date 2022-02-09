import "antd/dist/antd.css";
import { PageHeader, Layout } from "antd";
import styled from "styled-components";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorPage } from "./ErrorPage";
import { NewsItemCard } from "./NewsItemCard";
import {
  selectData,
  selectLoadingStatus,
  selectErrorStatus,
} from "../features/newsList/newsListThunk";
import { useSelector } from "react-redux";
import { INewsItem } from "../types";

const NewsList = styled(Layout)`
  align-items: center;
  min-height: 100vh;
`;

export const News = () => {
  const data = useSelector(selectData);
  const isLoading = useSelector(selectLoadingStatus);
  const isError = useSelector(selectErrorStatus);

  return (
    <NewsList>
      <PageHeader title="News feed" />
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorPage />}
      {!isError &&
        data.map((newsItem: INewsItem, key: string) => {
          return <NewsItemCard data={newsItem} key={key} />;
        })}
    </NewsList>
  );
};
