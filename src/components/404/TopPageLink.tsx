import { Box } from "@material-ui/core";
import { FC } from "react";
import { TextLink } from "../common/TextLink";

export const TopPageLink: FC = () => {
  return (
    <Box my={2}>
      <TextLink href="/">トップページへ</TextLink>
    </Box>
  );
};
