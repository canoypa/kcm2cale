import { useHistory } from "react-router";
import { useInitFleet } from "../../core/initialize-fleet";
import { LocalDatabase } from "../../core/persistence/local-database";
import { decodeFleetStates } from "../../core/persistence/local-fleet-data";

interface InitializeCallbackInterface {
  /** ロードする艦隊 Id */
  fleetId?: string;
}
export const useInitializeCallback = () => {
  const { replace } = useHistory();
  const initFleet = useInitFleet();

  const loadFleet = async ({ fleetId }: InitializeCallbackInterface) => {
    if (fleetId !== undefined) {
      const localFleetData = await LocalDatabase.getFleet(fleetId);

      if (localFleetData) {
        const fleetStates = decodeFleetStates(localFleetData);
        // 保存済みの編成がある場合初期化
        initFleet(fleetStates);
        return;
      }
    }

    // 編成が存在しない場合リダイレクト
    replace("/");
  };

  return loadFleet;
};
