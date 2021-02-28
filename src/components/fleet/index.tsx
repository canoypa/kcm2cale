import { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useLocalPersistence } from "../../core/persistence/fleet-state-observer";
import { FleetIdState, FleetNameState } from "../../store/organize/info";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { LowerAppBar } from "../common/lower-app-bar";
import { useInitializeCallback } from "./hooks";
import { Organize } from "./organisms/organize";

export const Fleet: FC = () => {
  usePageViewLog("Fleet View");

  const { push } = useHistory();
  const setPageTitle = useSetPageTitle();
  const { justSaveNow } = useLocalPersistence();
  const initFleet = useInitializeCallback();

  const { fleetId } = useParams<{ fleetId: string }>();
  const fleetTitle = useRecoilValue(FleetNameState);
  const fleetIdState = useRecoilValue(FleetIdState);

  setPageTitle(`${fleetTitle || "無題の編成"}`);

  useEffect(() => {
    // 直アクセスの場合編成初期化
    if (!fleetIdState) initFleet({ fleetId });
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
