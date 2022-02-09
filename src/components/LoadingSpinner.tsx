import { Spin } from "antd";

export const LoadingSpinner = () => {
  return (
    <Spin
      style={{ display: "flex", alignItems: "center", minHeight: "75vh" }}
      size="large"
    />
  );
};
