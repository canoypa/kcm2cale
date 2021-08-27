import { Typography } from "@material-ui/core";
import { FC } from "react";

export const Message: FC = () => {
  return (
    <div>
      <Typography variant="body1" style={{ margin: "1rem 0" }}>
        リクエストされた編成は存在しません。
      </Typography>
    </div>
  );
};
