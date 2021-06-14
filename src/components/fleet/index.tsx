import { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthCheck } from "reactfire";
import { useRecoilValue } from "recoil";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useLocalPersistence } from "../../core/persistence/fleet-state-observer";
import { FleetIdState, FleetNameState } from "../../store/organize/info";
import { useDidMount, useWillUnmount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { LowerAppBar } from "../common/lower-app-bar";
import { InitFireFleet, InitLocalFleet } from "./load-fleet";
import { Organize } from "./organisms/organize";

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

  const { fleetId } = useParams<{ fleetId: string }>();
  const isExistFleet = useRecoilValue(FleetIdState) === fleetId;
  const fleetTitle = useRecoilValue(FleetNameState);

  useDidMount(() => {
    pageViewLog("Fleet View");
  });

  useEffect(() => {
    setPageTitle(`${fleetTitle || "無題の編成"}`);

    // タイトル変更時にのみ実行
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fleetTitle]);

  return isExistFleet ? (
    <Fleet />
  ) : (
    <AuthCheck fallback={<InitLocalFleet />}>
      <InitFireFleet />
    </AuthCheck>
  );
};

export default FleetPage;
