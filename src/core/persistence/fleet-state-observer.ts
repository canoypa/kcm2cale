import {
  Snapshot,
  useRecoilTransactionObserver_UNSTABLE as useRecoilTransactionObserverUNSTABLE,
} from "recoil";
import { FleetState } from "~/store/organize/info";
import { LocalDatabase } from "./local-database";
import { LocalFleetDataV1 } from "./types";

export const isFleetStateModified = (snapshot: Snapshot) => {
  // 全ての更新された State
  const modifiedStates = [...snapshot.getNodes_UNSTABLE({ isModified: true })];

  // 対象が更新されているか
  const isModified = modifiedStates.some(({ key }) => key === FleetState.key);

  return isModified;
};

/** 編成の変更を検知し保存 */
class FleetStateObserver {
  /** 保存までのタイムアウト */
  private readonly SAVE_TIMEOUT = 4000;

  /** TimeoutId */
  private saveTimeoutId = 0;

  private saveFn: (() => void) | null = null;

  private lastPromise: Promise<LocalFleetDataV1 | null> | null = null;

  /** atom の変更を受け取り */
  public observer = ({
    snapshot,
  }: {
    snapshot: Snapshot;
    previousSnapshot: Snapshot;
  }) => {
    // 対象が更新されて無ければ return
    if (!isFleetStateModified(snapshot)) return;

    this.lastPromise = snapshot.getPromise(FleetState);

    // 保存関数を更新
    this.saveFn = async () => {
      this.saveFn = null;

      const fleet = await this.lastPromise;
      if (!fleet) throw new Error("編成が存在しない");
      await LocalDatabase.setFleet(fleet.id, fleet);

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
  useRecoilTransactionObserverUNSTABLE(fleetStateObserver.observer);

  return {
    justSaveNow: fleetStateObserver.justSaveNow,
  };
};
