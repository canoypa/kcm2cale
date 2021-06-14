import { useRecoilTransactionObserver_UNSTABLE as useRecoilTransactionObserverUNSTABLE } from "recoil";
import { isFleetStateModified } from "./is-fleet-state-modified";
import { saveToLocal } from "./save-to-local";

/** 編成の変更を検知し保存 */
class FleetStateObserver {
  /** 保存までのタイムアウト */
  private readonly SAVE_TIMEOUT = 4000;

  /** TimeoutId */
  private saveTimeoutId = 0;

  saveFn: (() => void) | null = null;

  /** 今すぐに保存 */
  justSaveNow = () => {
    // タイムアウトを 0s に設定
    this.resetTimer(0);
  };

  /** 保存までのタイムアウトをリセット */
  resetTimer = (timeout?: number) => {
    window.clearTimeout(this.saveTimeoutId);

    if (this.saveFn) {
      this.saveTimeoutId = window.setTimeout(
        this.saveFn,
        timeout ?? this.SAVE_TIMEOUT
      );
    }
  };

  /** 保存前のページ離脱を防止 */
  preventBeforeSaveUnload = (event: BeforeUnloadEvent) => {
    // 離脱防止
    event.preventDefault();
    event.returnValue = "";

    // タイムアウトを待たずに保存
    this.justSaveNow();
  };

  enablePreventBeforeSaveUnload = () => {
    window.addEventListener("beforeunload", this.preventBeforeSaveUnload);
  };

  disablePreventBeforeSaveUnload = () => {
    window.removeEventListener("beforeunload", this.preventBeforeSaveUnload);
  };
}

const fleetStateObserver = new FleetStateObserver();

export const useLocalPersistence = () => {
  useRecoilTransactionObserverUNSTABLE(({ snapshot }) => {
    // 対象が更新されて無ければ return
    if (!isFleetStateModified(snapshot)) return;

    // 保存関数を更新
    fleetStateObserver.saveFn = async () => {
      fleetStateObserver.saveFn = null;
      await saveToLocal(snapshot);

      fleetStateObserver.disablePreventBeforeSaveUnload();
    };

    // 保存をスケジューリング
    fleetStateObserver.enablePreventBeforeSaveUnload();
    fleetStateObserver.resetTimer();
  });

  return {
    justSaveNow: fleetStateObserver.justSaveNow,
  };
};
