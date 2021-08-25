import { CircularProgress, Container, Grid as Box } from "@material-ui/core";
import { QuerySnapshot, Unsubscribe } from "firebase/firestore";
import { FC, useCallback, useEffect, useRef } from "react";
import { listenUserFleetDocs } from "~/api/fleet";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";
import { Fleet } from "../../../models/fleet";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useFleetList } from "../hooks";
import { useStyles } from "./styles";

/**
 * 保存されている編成が存在するか
 */
const checkExistFleetList = (fleets: Fleet[]) => {
  return fleets.length !== 0;
};

export const FleetListContainer: FC = () => {
  const { data: signInCheckResult } = useSigninCheck();
  const { data: fleetList, mutate: mutateFleetList } = useFleetList();

  const classes = useStyles();

  // 現在のリストへの更新検知を避けた参照
  // fleetDocsChangeCallback 内で使用
  const fleetsRef = useRef<Fleet[]>(fleetList ?? []);
  useEffect(() => {
    fleetList && (fleetsRef.current = fleetList);
  }, [fleetList]);

  const fleetDocsChangeCallback = useCallback(
    (snap: QuerySnapshot<Fleet>) => {
      let result = fleetsRef.current;

      snap.docChanges().forEach((change) => {
        const data = change.doc.data();

        if (change.type === "added") result = [...result, data];

        if (change.type === "modified")
          result = result.map((v) => (v.id === data.id ? data : v));

        if (change.type === "removed")
          result = result.filter((v) => !(v.id === data.id));
      });

      mutateFleetList(result);
    },
    [mutateFleetList]
  );

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined = undefined;

    if (signInCheckResult.signedIn) {
      unsubscribe = listenUserFleetDocs(
        signInCheckResult.user,
        fleetDocsChangeCallback
      );
    }

    return () => unsubscribe?.();
  }, [
    fleetDocsChangeCallback,
    mutateFleetList,
    signInCheckResult.signedIn,
    signInCheckResult.user,
  ]);

  if (!fleetList) {
    return (
      <Box
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <CircularProgress size={24} />
      </Box>
    );
  }

  // 保存されている編成が存在するか
  const isExistFleetList = checkExistFleetList(fleetList);

  return (
    <Container maxWidth="md" className={classes.root}>
      {isExistFleetList ? (
        <FleetList fleetList={fleetList} />
      ) : (
        <Box
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <EmptyState />
        </Box>
      )}
    </Container>
  );
};
