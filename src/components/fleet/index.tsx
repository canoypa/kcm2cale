import { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useInitFleet } from "../../core/initialize-fleet";
import { useLocalPersistence } from "../../core/persistence/fleet-state-observer";
import { LocalDatabase } from "../../core/persistence/local-database";
import { FleetIdState, FleetNameState } from "../../store/organize/info";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { LowerAppBar } from "../common/lower-app-bar";
import { Organize } from "./organisms/organize";

export const Fleet: FC = () => {
  usePageViewLog("Fleet View");

  const { replace, push } = useHistory();
  const setPageTitle = useSetPageTitle();
  const { justSaveNow } = useLocalPersistence();
  const initFleet = useInitFleet();

  const { fleetId } = useParams<{ fleetId: string }>();
  const fleetTitle = useRecoilValue(FleetNameState);
  const fleetIdState = useRecoilValue(FleetIdState);

  setPageTitle(`${fleetTitle || "無題の編成"}`);

  useEffect(() => {
    const loadFleet = async () => {
      const localFleetData = await LocalDatabase.getFleet(fleetId);

      if (localFleetData) {
        // 保存済みの編成がある場合初期化
        initFleet(localFleetData);
      } else {
        // 編成が存在しない場合リダイレクト
        replace("/");
      }
    };

    // 直アクセスの場合編成初期化
    if (!fleetIdState) {
      loadFleet();
    }
  }, []);

  const backToTopPage = () => {
    justSaveNow();
    push("/");
  };

  return (
    <>
      <div>
        <LowerAppBar onNavClick={backToTopPage} />
        <Organize />
      </div>
    </>
  );
};

export default Fleet;
