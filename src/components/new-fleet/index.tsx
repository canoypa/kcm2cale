import { FC, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { useInitFleet } from "../../core/initialize-fleet";
import { FleetIdState } from "../../store/organize/info";

// 編成新規作成
// id を生成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useHistory();
  const fleetId = useRecoilValue(FleetIdState);

  const initFleet = useInitFleet();

  const preFleetId = useRef(fleetId);

  useEffect(() => {
    if (fleetId === preFleetId.current) {
      // 初回レンダー時
      initFleet(null);
    } else {
      // fleetId 更新による再レンダー時
      replace(`/fleet/${fleetId}`);
    }

    // initFleet は不要
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fleetId]);

  return null;
};

export default NewFleet;
