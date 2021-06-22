import { FC, useEffect } from "react";
import { Redirect } from "react-router";
import { useHistory, useParams } from "react-router-dom";
import { usePageViewLog } from "../../core/firebase/analytics/hooks";
import { useLocalPersistence } from "../../core/persistence/fleet-state-observer";
import { useFireFleet } from "../../hooks/organize/fleet";
import { useDidMount, useWillUnmount } from "../../util/hooks/lifecycle";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { LowerAppBar } from "../common/lower-app-bar";
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

  const fleet = useFireFleet(fleetId);

  // Fixme: 簡易バリデーション
  const isExistFleet = fleet.version !== undefined;

  useDidMount(() => {
    pageViewLog("Fleet View");
  });

  useEffect(() => {
    setPageTitle(`${fleet.title || "無題の編成"}`);

    // タイトル変更時にのみ実行
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fleet.title]);

  // Todo: エラー画面を表示
  return isExistFleet ? <Fleet /> : <Redirect to="/" />;
};

export default FleetPage;
