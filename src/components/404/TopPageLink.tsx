import { Typography } from "@material-ui/core";
import Link from "next/link";
import { FC } from "react";
import { useStyles } from "./TopPageLink.styles";

export const TopPageLink: FC = () => {
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      style={{ marginTop: 2, marginBottom: 2 }}
      className={classes.main}
    >
      <Link href="/">
        <a>トップページへ</a>
      </Link>
    </Typography>
  );
};
