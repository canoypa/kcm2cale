import {
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import Link from "next/link";
import { FC, MouseEvent, useRef, useState } from "react";
import { firebase } from "../../../core/firebase/app";
import { Fleet } from "../../../models/fleet";
import { useFirestore } from "../../../store/firebase/sdk";
import { LineClamp } from "../../common/clamp";
import { useStyles } from "./styles";
import { useDeleteFleet } from "./useDeleteFleet";

type Props = { fleetData: Fleet };
export const FleetCard: FC<Props> = ({ fleetData }) => {
  const firestoreLoadable = useFirestore();

  if (firestoreLoadable.state === "hasValue") {
    return (
      <FleetCardScreen
        firestore={firestoreLoadable.contents}
        fleetData={fleetData}
      />
    );
  }

  return null;
};

type FleetCardScreenProps = Props & {
  firestore: firebase.firestore.Firestore;
};
const FleetCardScreen: FC<FleetCardScreenProps> = ({
  firestore,
  fleetData,
}) => {
  const deleteFleet = useDeleteFleet(firestore);
  const classes = useStyles();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuAnchorEl = useRef<HTMLButtonElement>(null);

  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
    // openFleet の作動を抑制
    event.stopPropagation();
    event.preventDefault();

    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handlerDeleteFleet = () => {
    closeMenu();
    deleteFleet(fleetData.id);
  };

  return (
    <>
      <Link href={`/fleet/${fleetData.id}`}>
        <Card variant="outlined" className={classes.container}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="overline"
              color="textSecondary"
              className={classes.overline}
            >
              {fleetData.updatedAt.toLocaleDateString()}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <LineClamp count={1}>{fleetData.title || "無題の編成"}</LineClamp>
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.description}
            >
              <LineClamp count={2}>{fleetData.description}</LineClamp>
            </Typography>
            <div className={classes.menuArea}>
              <IconButton
                onClick={openMenu}
                ref={menuAnchorEl}
                aria-label="アクションメニュー"
              >
                <MoreVert />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Menu
        open={isMenuOpen}
        onClose={closeMenu}
        anchorEl={menuAnchorEl.current}
      >
        <MenuItem onClick={handlerDeleteFleet}>削除</MenuItem>
      </Menu>
    </>
  );
};
