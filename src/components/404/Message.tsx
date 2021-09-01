import { Typography } from "@material-ui/core";
import { FC } from "react";

export const Message: FC = () => {
  return (
    <div>
      <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 2 }}>
        404 Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 2 }}>
        リクエストされたページはこのサイトに存在しません
      </Typography>
    </div>
  );
};
