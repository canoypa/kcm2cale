import {
  CallbackInterface,
  useRecoilCallback,
  useRecoilTransactionObserver_UNSTABLE,
} from "recoil";
import { isFleetStateModified } from "./is-fleet-state-modified";
import { saveToLocal } from "./save-to-local";

/** 編成の変更を検知し保存 */
class FleetStateObserver {
  /** 保存までのタイムアウト */
  private readonly SAVE_TIMEOUT = 4000;

  /** TimeoutId */
  private saveTimeoutId: number = 0;

  /** atom の変更を受け取り */
  public observer = ({ snapshot }: CallbackInterface) => () => {
    // 対象が更新されて無ければ return
    if (!isFleetStateModified(snapshot)) return;

    // 保存をスケジューリング
    const saveFn = () => saveToLocal(snapshot);
    this.resetTimer(saveFn);
  };

  /** 今すぐに保存 */
  public justSaveNow = ({ snapshot }: CallbackInterface) => () => {
    window.clearTimeout(this.saveTimeoutId);
    saveToLocal(snapshot);
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
