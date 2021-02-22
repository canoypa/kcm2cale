import { nanoid } from "nanoid";
import { FC, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { useRecoilCallback, useRecoilState } from "recoil";
import { initializeFleet } from "../../core/initialize-fleet";
import { FleetIdState } from "../../store/organize/info";

// 編成新規作成
// id を生成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useHistory();
  const [fleetId, setFleetId] = useRecoilState(FleetIdState);

  const initFleet = useRecoilCallback(initializeFleet);

  const preFleetId = useRef(fleetId);

  useEffect(() => {
    if (fleetId === preFleetId.current) {
      // 初回レンダー時
      initFleet(null);
      const geneFleetId = nanoid(16);
      setFleetId(geneFleetId);
    } else {
      // fleetId 更新による再レンダー時
      replace(`/fleet/${fleetId}`);
    }
  }, [fleetId]);

  return null;
};

export default NewFleet;
