import { Box, Container, Typography } from "@material-ui/core";
import { FC } from "react";

export const Error: FC = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h3" p={2}>
            Oops! :(
          </Typography>

          {children}
        </Box>
      </Box>
    </Container>
  );
};

export const ErrorContent: FC = ({ children }) => {
  return (
    <Box p={2} pt={0}>
      {children}
    </Box>
  );
};

export const ErrorActions: FC = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      columnGap={1}
      rowGap={1}
      p={1}
    >
      {children}
    </Box>
  );
};
