import { FC, ReactNode, useContext } from "react";
import { useEffectOnce } from "react-use";
import { useSetRecoilState } from "recoil";
import { LocalDatabase } from "~/core/persistence/local-database";
import { FleetState } from "~/store/organize/info";
import { FleetIdContext } from "../fleetIdContext";

type Props = {
  /** 更新抑制のためメモ化されたコンポーネントであるべき */
  children: ReactNode;
};
export const FleetDataProvider: FC<Props> = ({ children }) => {
  const fleetId = useContext(FleetIdContext);

  const setFleet = useSetRecoilState(FleetState);

  useEffectOnce(() => {
    LocalDatabase.getFleet(fleetId).then((v) => {
      setFleet(v);
    });
  });

  return <>{children}</>;
};
