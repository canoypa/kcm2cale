import { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { initializeFleet } from "../../core/initialize-fleet";
import { useLocalPersistence } from "../../core/persistence/fleet-state-observer";
import { LocalDatabase } from "../../core/persistence/local-database";
import { LocalFleetData_v1 } from "../../core/persistence/types";
import { FleetIdState } from "../../store/organize/info";
import { useSetPageTitle } from "../../util/hooks/set-page-title";
import { LowerAppBar } from "../common/lower-app-bar";
import { Organize } from "./organisms/organize";

export const Fleet: FC = () => {
  const { justSaveNow } = useLocalPersistence();

  /* 艦隊 Id を取得 */
  const { fleetId } = useParams<{ fleetId: string }>();

  const setPageTitle = useSetPageTitle();
  const { replace, push } = useHistory();
  const fleetIdState = useRecoilValue(FleetIdState);
  const initFleet = useRecoilCallback(initializeFleet);

  useEffect(() => {
    const loadFleet = async () => {
      const localFleetData = (await LocalDatabase.getFleet(
        fleetId
      )) as LocalFleetData_v1;

      localFleetData || fleetIdState;

      // ローカルにある / 新規作成の場合初期化
      if (localFleetData || fleetIdState) {
        setPageTitle(`${localFleetData?.title || "無題の編成"} - Kcm2Cale β`);
        return void initFleet(localFleetData ?? null);
      }

      // ローカルデータ, FleetIdState 共に無ければ存在しない編成
      return void replace("/");
    };
    loadFleet();
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
