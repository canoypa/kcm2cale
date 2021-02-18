import {
  CallbackInterface,
  Snapshot,
  useRecoilCallback,
  useRecoilTransactionObserver_UNSTABLE,
} from "recoil";
import { EquipmentsState, RiggingState } from "../../store/organize/equipments";
import {
  FleetDateState,
  FleetDescriptionState,
  FleetIdState,
  FleetNameState,
  FleetTypeState,
} from "../../store/organize/info";
import { FleetState, ShipsState } from "../../store/organize/ships";
import { createLocalFleetData } from "./create-local-fleet-data";
import { LocalDatabase } from "./local-database";

/** 編成の変更を検知し保存 */
class FleetStateObserver {
  /** 保存までのタイムアウト */
  private readonly SAVE_TIMEOUT = 4000;

  /** TimeoutId */
  private saveTimeoutId: number = 0;

  /** atom の変更を受け取り */
  public observer = ({ snapshot, set }: CallbackInterface) => () => {
    // 対象が更新されて無ければ return
    if (!this.isFleetStateModified(snapshot)) return;

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

  private isFleetStateModified = (snapshot: Snapshot) => {
    // 更新検知対象 State
    const fleetStateAtoms = [
      FleetIdState.key,
      FleetNameState.key,
      FleetDescriptionState.key,
      FleetTypeState.key,
      FleetState.key,
      ShipsState.key,
      RiggingState.key,
      EquipmentsState.key,
    ];

    // 全ての更新された State
    const modifiedStates = [
      ...snapshot.getNodes_UNSTABLE({ isModified: true }),
    ];

    // 対象が更新されているか
    const isFleetStateModified = modifiedStates.some(({ key }) =>
      fleetStateAtoms.some((targetKey) => key === targetKey)
    );

    return isFleetStateModified;
  };

  /** ローカル保存 */
  private saveToLocal = async (snapshot: Snapshot) => {
    const fleetStates = await Promise.all([
      snapshot.getPromise(FleetIdState),
      snapshot.getPromise(FleetDateState),
      snapshot.getPromise(FleetNameState),
      snapshot.getPromise(FleetDescriptionState),
      snapshot.getPromise(FleetTypeState),
      snapshot.getPromise(ShipsState),
      snapshot.getPromise(EquipmentsState),
    ]);

    const [
      fleetId,
      fleetDate,
      fleetName,
      fleetDescription,
      fleetType,
      ships,
      equipments,
    ] = fleetStates;

    await LocalDatabase.setFleet(
      fleetId,
      createLocalFleetData({
        fleetId,
        fleetDate,
        fleetName,
        fleetDescription,
        fleetType,
        ships,
        equipments,
      })
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
