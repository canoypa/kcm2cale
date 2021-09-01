import { Box, Collapse, LinearProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { useEffectOnce } from "react-use";

export const PageLoadProgress: FC = () => {
  const { events } = useRouter();

  const [show, setShow] = useState(false);

  const onRouteChangeStart = useCallback(() => {
    setShow(true);
  }, []);

  const onRouteChangeEnd = useCallback(() => {
    setShow(false);
  }, []);

  useEffectOnce(() => {
    events.on("routeChangeStart", onRouteChangeStart);
    events.on("routeChangeComplete", onRouteChangeEnd);
    events.on("routeChangeError", onRouteChangeEnd);

    return () => {
      events.off("routeChangeStart", onRouteChangeStart);
      events.off("routeChangeComplete", onRouteChangeEnd);
      events.off("routeChangeError", onRouteChangeEnd);
    };
  });

  return (
    <Box position="fixed" top={0} left={0} zIndex={99999} width="100%">
      <Collapse in={show}>
        <LinearProgress />
      </Collapse>
    </Box>
  );
};
