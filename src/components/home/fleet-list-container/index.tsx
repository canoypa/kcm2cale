import { Container, Grid as Box } from "@material-ui/core";
import { FC } from "react";
import { useFirestoreCollectionData } from "reactfire";
import { firebase } from "../../../core/firebase/app";
import { FirestoreFleetConverter } from "../../../core/firestore-converter";
import { Fleet } from "../../../models/fleet";
import { useFirestore } from "../../../store/firebase/sdk";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useStyles } from "./styles";

/**
 * 保存されている編成が存在するか
 */
const checkExistFleetList = (fleets: Fleet[]) => {
  return fleets.length !== 0;
};

type Props = {
  user: firebase.User;
};
export const FleetListContainer: FC<Props> = ({ user }) => {
  const fleetsRef = useFirestore()
    .collection("fleets")
    .where("owner", "==", user.uid)
    .withConverter(FirestoreFleetConverter);
  const { data: fleetList } = useFirestoreCollectionData<Fleet>(fleetsRef);

  // 保存されている編成が存在するか
  const isExistFleetList = checkExistFleetList(fleetList);

  const classes = useStyles();

  if (!isExistFleetList) {
    return (
      <Container maxWidth="md" className={classes.root}>
        <Box
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <EmptyState />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <FleetList fleetList={fleetList} />
    </Container>
  );
};
