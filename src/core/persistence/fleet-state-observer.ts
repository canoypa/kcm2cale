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

  private saveFn: (() => void) | null = null;

  /** atom の変更を受け取り */
  public observer = ({ snapshot }: CallbackInterface) => () => {
    // 対象が更新されて無ければ return
    if (!isFleetStateModified(snapshot)) return;

    // 保存関数を更新
    this.saveFn = () => {
      this.saveFn = null;
      saveToLocal(snapshot);
    };

    // 保存をスケジューリング
    this.resetTimer();
  };

  /** 今すぐに保存 */
  public justSaveNow = () => () => {
    window.clearTimeout(this.saveTimeoutId);
    this.saveFn?.();
  };

  /** 保存までのタイムアウトをリセット */
  private resetTimer = () => {
    window.clearTimeout(this.saveTimeoutId);

    if (this.saveFn) {
      this.saveTimeoutId = window.setTimeout(this.saveFn, this.SAVE_TIMEOUT);
    }
  };
}

const fleetStateObserver = new FleetStateObserver();

export const useLocalPersistence = () => {
  const observer = useRecoilCallback(fleetStateObserver.observer);
  const justSaveNow = useRecoilCallback(fleetStateObserver.justSaveNow);

  useRecoilTransactionObserver_UNSTABLE(observer);

  return { justSaveNow };
};
