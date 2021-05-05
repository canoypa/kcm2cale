import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { FC, MouseEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useInitFleet } from "../../../core/initialize-fleet";
import { LocalDatabase } from "../../../core/persistence/local-database";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import { LineClamp } from "../../common/clamp";
import { Menu } from "../../common/menu";
import { FleetListContext } from "../fleet-list-area";
import * as styles from "./styles";

type Props = { fleetData: LocalFleetData_v1 };
export const FleetCard: FC<Props> = ({ fleetData }) => {
  const { reloadFleet } = useContext(FleetListContext);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const initFleet = useInitFleet();

  const classes = styles.useStyles();

  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
    // openFleet の作動を抑制
    event.stopPropagation();
    event.preventDefault();

    const target = event.target as HTMLButtonElement;
    const targetRect = target.getBoundingClientRect();

    setCoordinates({
      x: targetRect.left,
      y: targetRect.top + 48,
    });
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuSelectHandler = async (v: string) => {
    if (v === "delete") {
      await LocalDatabase.deleteFleet(fleetData.id);
      reloadFleet();
    }
  };

  const openFleet = () => {
    // 編成初期化
    initFleet(fleetData);
  };

  return (
    <>
      <Link
        to={`/fleet/${fleetData.id}`}
        className={styles.container}
        onClick={openFleet}
      >
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
              <LineClamp clamp={1}>{fleetData.title || "無題の編成"}</LineClamp>
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.description}
            >
              <LineClamp clamp={2}>{fleetData.description}</LineClamp>
            </Typography>
            <div className={classes.menuArea}>
              <IconButton onClick={openMenu}>
                <MoreVert />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Menu
        open={isMenuOpen}
        coordinates={coordinates}
        items={[{ label: "削除", value: "delete" }]}
        onSelect={menuSelectHandler}
        onClose={closeMenu}
      />
    </>
  );
};
