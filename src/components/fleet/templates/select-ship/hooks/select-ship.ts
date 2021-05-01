import { useRecoilValue, useSetRecoilState } from "recoil";
import { ShipData } from "../../../../../modules/ship";
import {
  EquipmentsState,
  RiggingState,
} from "../../../../../store/organize/equipments";
import { useRemoveShip, useSetShip } from "../../../../../store/organize/ships";

type CurrentShip = {
  fleetNo: number;
  turnNo: number;
  shipId: string | null;
};

export const useRemoveEquipments = () => {
  const setRigging = useSetRecoilState(RiggingState);
  const setEquipment = useSetRecoilState(EquipmentsState);

  const rigging = useRecoilValue(RiggingState);

  return (shipId: string) => {
    setRigging((state) => state.filter((v) => v.shipId !== shipId));
    rigging.forEach(({ equipmentId }) => {
      setEquipment((state) =>
        state.filter((v) => v.equipmentId !== equipmentId)
      );
    });
  };
};

type SelectShip = {
  onSelect: (shipData: ShipData) => void;
};
export const useSelectShip = (currentShip: CurrentShip): SelectShip => {
  const setShip = useSetShip();
  const removeShip = useRemoveShip();
  const removeShipEquipments = useRemoveEquipments();

  const onSelect = (shipData: ShipData) => {
    const { fleetNo, turnNo, shipId } = currentShip;

    setShip(fleetNo, turnNo, shipData);

    if (shipId) {
      removeShip(shipId);
      removeShipEquipments(shipId);
    }
  };

  return { onSelect };
};
