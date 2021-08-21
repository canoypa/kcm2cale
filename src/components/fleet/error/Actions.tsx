import { Box, Button } from "@material-ui/core";
import Link from "next/link";
import { FC } from "react";

export const Actions: FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Link href="/" passHref>
        <Button variant="outlined">トップページに戻る</Button>
      </Link>
    </Box>
  );
};
