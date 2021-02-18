import { nanoid } from "nanoid";
import { FC, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { FleetIdState } from "../../store/organize/info";

// 編成新規作成
// id を生成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useHistory();
  const [fleetId, setFleetId] = useRecoilState(FleetIdState);

  const [loadFlag, setLoadFlag] = useState(false);
  const preFleetId = useRef(fleetId);

  // Fixme: 呪われたコード
  useEffect(() => {
    // 初回レンダー時
    if (!loadFlag) {
      const geneFleetId = nanoid(16);
      setFleetId(geneFleetId);
      setLoadFlag(true);
    }

    // state 更新による再レンダー時
    if (loadFlag && fleetId !== preFleetId.current) {
      replace(`/fleet/${fleetId}`);
    }
  });

  return null;
};

export default NewFleet;
