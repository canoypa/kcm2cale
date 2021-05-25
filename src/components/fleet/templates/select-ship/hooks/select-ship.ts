import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  EquipmentsState,
  RiggingState,
} from "../../../../../store/organize/equipments";

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
