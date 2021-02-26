import { FC, MouseEvent, useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useInitFleet } from "../../../core/initialize-fleet";
import { LocalDatabase } from "../../../core/persistence/local-database";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import { FleetIdState } from "../../../store/organize/info";
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
import { FleetListContext } from "../fleet-list-area";
import * as styles from "./styles";

type Props = { fleetData: LocalFleetData_v1 };
export const FleetCard: FC<Props> = ({ fleetData }) => {
  const { reloadFleet } = useContext(FleetListContext);

  const { push } = useHistory();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  // Fleet state 更新確認用
  const currentFleetId = useRecoilValue(FleetIdState);
  const [isOpeningFleet, setIsOpeningFleet] = useState<boolean>(false);

  const initFleet = useInitFleet();

  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
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

  // Fixme: ctrl+ でのアクションなども抑止される
  const openFleet = (event: MouseEvent) => {
    event.preventDefault();

    // 編成初期化
    initFleet(fleetData);
    setIsOpeningFleet(true);
  };

  useEffect(() => {
    if (isOpeningFleet && currentFleetId === fleetData.id) {
      push(`/fleet/${fleetData.id}`);
    }
  }, [currentFleetId, isOpeningFleet]);

  return (
    <>
      <Link
        to={`/fleet/${fleetData.id}`}
        className={styles.container}
        onClick={openFleet}
      >
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
