import { FC } from "react";
import { useRecoilValue } from "recoil";
import { EquipmentsState } from "../../../../store/organize/equipments";
import { ChipSet } from "../../../common/chip";
import * as styles from "./styles";

type Props = {
  shipEquipments: Array<{
    shipId: string;
    slotNo: number;
    equipmentId: string;
  }>;
  swapEquipment: (slotNo: number, equipmentId: string) => void;
};
export const EquipmentList: FC<Props> = ({ shipEquipments, swapEquipment }) => {
  const equipments = useRecoilValue(EquipmentsState);

  const handlerEquipmentClick = (preEqId: string) => {
    const shipEquipment = shipEquipments.find((v) => v.equipmentId === preEqId);
    if (!shipEquipment) throw new Error("Error");

    const { slotNo, equipmentId: preEquipmentId } = shipEquipment;
    swapEquipment(slotNo, preEquipmentId);
  };

  const items = shipEquipments.map((riggingPlace) => {
    const equipment = equipments.get(riggingPlace);
    if (!equipment) throw new Error("Error: 装備が見つからない");

    return {
      value: riggingPlace.equipmentId,
      label: <span className={styles.chipLabel}>{equipment.name}</span>,
    };
  });

  return <ChipSet nowrap items={items} onSelect={handlerEquipmentClick} />;
};
