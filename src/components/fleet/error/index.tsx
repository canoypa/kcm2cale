import { Box, Divider } from "@material-ui/core";
import Head from "next/head";
import { FC } from "react";
import { APP_NAME } from "../../../core/env";
import { Actions } from "./Actions";
import { Message } from "./Message";
import { SadFace } from "./SadFace";

export const FleetError: FC = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <Box display="flex" justifyContent="center" padding={3}>
        <Box maxWidth={599}>
          <SadFace />
          <Divider />
          <Message />
          <Actions />
        </Box>
      </Box>
    </>
  );
};
