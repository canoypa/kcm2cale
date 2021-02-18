import { FC, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { LocalDatabase } from "../../../core/persistence/local-database";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import {
  Card,
  CardHeader,
  CardOverflowMenu,
  CardOverline,
  CardSubTitle,
  CardTitle,
} from "../../common/card";
import { LineClamp } from "../../common/clamp";
import { Menu } from "../../common/menu";
import * as styles from "./styles";

type Props = { fleetData: LocalFleetData_v1 };
export const FleetCard: FC<Props> = ({ fleetData }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuSelectHandler = (v: string) => {
    if (v === "delete") {
      LocalDatabase.deleteFleet(fleetData.id);
    }
  };

  return (
    <>
      <Link to={`/fleet/${fleetData.id}`} className={styles.container}>
        <Card>
          <CardHeader>
            <CardOverline label={fleetData.updatedAt.toLocaleDateString()} />
            <CardTitle>
              <LineClamp clamp={1}>{fleetData.title || "無題の編成"}</LineClamp>
            </CardTitle>
            <CardSubTitle>
              <LineClamp clamp={2}>{fleetData.description}</LineClamp>
            </CardSubTitle>
            <CardOverflowMenu onClick={openMenu} />
          </CardHeader>
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
