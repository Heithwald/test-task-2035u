import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

export const LoadingError = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news");
  };

  return (
    <Result
      status="500" // ради картинки
      title="Sorry, something went wrong"
      subTitle="Some sort of error has occurred"
      extra={
        <Button type="primary" onClick={handleClick}>
          Back to News
        </Button>
      }
    />
  );
};
