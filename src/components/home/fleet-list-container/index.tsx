import { CircularProgress, Container, Grid as Box } from "@material-ui/core";
import { FC, useEffect } from "react";
import { firebase } from "../../../core/firebase/app";
import { FirestoreFleetConverter } from "../../../core/firestore-converter";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";
import { Fleet } from "../../../models/fleet";
import { useFirestore } from "../../../store/firebase/sdk";
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

  const firestoreLoadable = useFirestore();

  const { data: fleetList, mutate: mutateFleetList } = useFleetList();

  const classes = useStyles();

  useEffect(() => {
    let unsubscribe: firebase.Unsubscribe | undefined = undefined;

    if (firestoreLoadable.state === "hasValue") {
      const firestore = firestoreLoadable.contents;

      const fleetListRef = firestore
        .collection("fleets")
        .where("owner", "==", signInCheckResult.user?.uid)
        .withConverter(FirestoreFleetConverter);

      unsubscribe = fleetListRef.onSnapshot((snap) => {
        mutateFleetList(snap.docs.map((d) => d.data()));
      });
    }

    return () => unsubscribe?.();
  }, [firestoreLoadable, mutateFleetList, signInCheckResult.user]);

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
