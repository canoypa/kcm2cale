import { Typography } from "@material-ui/core";
import { FC } from "react";

export const Message: FC = () => {
  return (
    <div>
      <Typography variant="body1" mx="1rem">
        リクエストされた編成は存在しません。
      </Typography>
    </div>
  );
};
