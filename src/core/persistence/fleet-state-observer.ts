import {
  CallbackInterface,
  useRecoilCallback,
  useRecoilTransactionObserver_UNSTABLE as useRecoilTransactionObserverUNSTABLE,
} from "recoil";
import { isFleetStateModified } from "./is-fleet-state-modified";
import { saveToLocal } from "./save-to-local";

/** 編成の変更を検知し保存 */
class FleetStateObserver {
  /** 保存までのタイムアウト */
  private readonly SAVE_TIMEOUT = 4000;

  /** TimeoutId */
  private saveTimeoutId = 0;

  private saveFn: (() => void) | null = null;

  /** atom の変更を受け取り */
  public observer = ({ snapshot }: CallbackInterface) => () => {
    // 対象が更新されて無ければ return
    if (!isFleetStateModified(snapshot)) return;

    // 保存関数を更新
    this.saveFn = async () => {
      this.saveFn = null;
      await saveToLocal(snapshot);

      this.disablePreventBeforeSaveUnload();
    };

    // 保存をスケジューリング
    this.enablePreventBeforeSaveUnload();
    this.resetTimer();
  };

  /** 今すぐに保存 */
  public justSaveNow = () => {
    // タイムアウトを 0s に設定
    this.resetTimer(0);
  };

  /** 保存までのタイムアウトをリセット */
  private resetTimer = (timeout?: number) => {
    window.clearTimeout(this.saveTimeoutId);

    if (this.saveFn) {
      this.saveTimeoutId = window.setTimeout(
        this.saveFn,
        timeout ?? this.SAVE_TIMEOUT
      );
    }
  };

  /** 保存前のページ離脱を防止 */
  private preventBeforeSaveUnload = (event: BeforeUnloadEvent) => {
    // 離脱防止
    event.preventDefault();
    event.returnValue = "";

    // タイムアウトを待たずに保存
    this.justSaveNow();
  };

  private enablePreventBeforeSaveUnload = () => {
    window.addEventListener("beforeunload", this.preventBeforeSaveUnload);
  };

  private disablePreventBeforeSaveUnload = () => {
    window.removeEventListener("beforeunload", this.preventBeforeSaveUnload);
  };
}

const fleetStateObserver = new FleetStateObserver();

export const useLocalPersistence = () => {
  const observer = useRecoilCallback(fleetStateObserver.observer);

  useRecoilTransactionObserverUNSTABLE(observer);

  return {
    justSaveNow: fleetStateObserver.justSaveNow,
  };
};
