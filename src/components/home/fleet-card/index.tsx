import {
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { FC, MouseEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Fleet } from "../../../models/fleet";
import { useFirestore } from "../../../store/firebase/sdk";
import { LineClamp } from "../../common/clamp";
import { useStyles } from "./styles";
import { useDeleteFleet } from "./useDeleteFleet";

type Props = { fleetData: Fleet };
export const FleetCard: FC<Props> = ({ fleetData }) => {
  const deleteFleet = useDeleteFleet();
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
      <Link to={`/fleet/${fleetData.id}`} className={classes.container}>
        <Card variant="outlined">
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
