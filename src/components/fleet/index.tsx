import { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useLocalPersistence } from "../../core/persistence/fleet-state-observer";
import { FleetIdState, FleetNameState } from "../../store/organize/info";
import { useDidMount, useWillUnmount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { LowerAppBar } from "../common/lower-app-bar";
import { useInitializeCallback } from "./hooks";
import { Organize } from "./organisms/organize";

const LoadFleet: FC = () => {
  const initFleet = useInitializeCallback();

  const { fleetId } = useParams<{ fleetId: string }>();

  useDidMount(() => {
    // 編成初期化
    initFleet({ fleetId });
  });

  return null;
};

const Fleet: FC = () => {
  const { push } = useHistory();
  const { justSaveNow } = useLocalPersistence();

  const backToTopPage = () => {
    push("/");
  };

  useWillUnmount(() => {
    justSaveNow();
  });

  return (
    <>
      <div>
        <LowerAppBar onNavClick={backToTopPage} />
        <Organize />
      </div>
    </>
  );
};

export const FleetPage: FC = () => {
  const pageViewLog = usePageViewLog();
  const setPageTitle = useSetPageTitle();

  const isExistFleet = useRecoilValue(FleetIdState);
  const fleetTitle = useRecoilValue(FleetNameState);

  useDidMount(() => {
    pageViewLog("Fleet View");
  });

  useEffect(() => {
    setPageTitle(`${fleetTitle || "無題の編成"}`);

    // タイトル変更時にのみ実行
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fleetTitle]);

  return isExistFleet ? <Fleet /> : <LoadFleet />;
};

export default FleetPage;
