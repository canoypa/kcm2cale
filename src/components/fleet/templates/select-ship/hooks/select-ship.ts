import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  EquipmentsState,
  RiggingState,
} from "../../../../../store/organize/equipments";
import { ShipId } from "../../../../../store/organize/ships";

export const useRemoveEquipments = () => {
  const setRigging = useSetRecoilState(RiggingState);
  const setEquipment = useSetRecoilState(EquipmentsState);

  const rigging = useRecoilValue(RiggingState);

  return (shipId: ShipId) => {
    setRigging((state) => state.filter((v) => v.shipId !== shipId));
    rigging.forEach(({ equipmentId }) => {
      setEquipment((state) =>
        state.filter((v) => v.equipmentId !== equipmentId)
      );
    });
  };
};
