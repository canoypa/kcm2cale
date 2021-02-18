import { FC } from "react";
import { useRecoilState } from "recoil";
import { ActiveFleetNoState } from "../../../../../store/organize/info";
import {
  ToggleButtonItem,
  ToggleButtons,
} from "../../../../common/toggle-buttons";

export const ToggleFleet: FC = () => {
  const [activeFleetNo, setActiveFleetNo] = useRecoilState(ActiveFleetNoState);

  const handlerOnSelect = (fleetNo: number) => setActiveFleetNo(fleetNo);

  return (
    <ToggleButtons defaultValue={activeFleetNo} onSelect={handlerOnSelect}>
      <ToggleButtonItem value={0} label="第一艦隊" />
      <ToggleButtonItem value={1} label="第二艦隊" />
    </ToggleButtons>
  );
};
