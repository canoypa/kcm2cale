import {
  CallbackInterface,
  Snapshot,
  useRecoilCallback,
  useRecoilTransactionObserver_UNSTABLE,
} from "recoil";
import { FleetDateState } from "../../store/organize/info";
import { createFleetStates } from "./create-fleet-states";
import { createLocalFleetData } from "./create-local-fleet-data";
import { isFleetStateModified } from "./is-fleet-state-modified";
import { LocalDatabase } from "./local-database";

/** 編成の変更を検知し保存 */
class FleetStateObserver {
  /** 保存までのタイムアウト */
  private readonly SAVE_TIMEOUT = 4000;

  /** TimeoutId */
  private saveTimeoutId: number = 0;

  /** atom の変更を受け取り */
  public observer = ({ snapshot, set }: CallbackInterface) => () => {
    createFleetStates(snapshot);

    // 対象が更新されて無ければ return
    if (!isFleetStateModified(snapshot)) return;

    // Update updatedAt
    const updatedAt = new Date();
    set(FleetDateState, ({ createdAt }) => ({ createdAt, updatedAt }));

    // 保存をスケジューリング
    const saveToLocal = () => this.saveToLocal(snapshot);
    this.resetTimer(saveToLocal);
  };

  /** 今すぐに保存 */
  public justSaveNow = ({ snapshot }: CallbackInterface) => () => {
    window.clearTimeout(this.saveTimeoutId);
    this.saveToLocal(snapshot);
  };

  /** ローカル保存 */
  private saveToLocal = async (snapshot: Snapshot) => {
    const fleetStates = await createFleetStates(snapshot);

    await LocalDatabase.setFleet(
      fleetStates.fleetId,
      createLocalFleetData(fleetStates)
    );
  };

  /** 保存までのタイムアウトをリセット */
  private resetTimer = (fn: () => void) => {
    window.clearTimeout(this.saveTimeoutId);
    this.saveTimeoutId = window.setTimeout(fn, this.SAVE_TIMEOUT);
  };
}

const fleetStateObserver = new FleetStateObserver();

export const useLocalPersistence = () => {
  const observer = useRecoilCallback(fleetStateObserver.observer);
  const justSaveNow = useRecoilCallback(fleetStateObserver.justSaveNow);

  useRecoilTransactionObserver_UNSTABLE(observer);

  return { justSaveNow };
};
