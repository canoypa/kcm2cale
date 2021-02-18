import { FC } from "react";
import { EquipmentData } from "../../../../../modules/equipment/types";
import { List } from "../../../../common/list";

type Props = {
  equipmentsList: EquipmentData[];
  onSelect: (equipmentData: EquipmentData) => void;
};
export const SearchEquipmentsList: FC<Props> = ({
  equipmentsList,
  onSelect,
}) => {
  const handlerOnSelect = (equipmentData: EquipmentData) =>
    onSelect(equipmentData);

  const items = equipmentsList.map((equipmentData) => ({
    key: equipmentData.no,
    value: equipmentData,
    label: equipmentData.name,
  }));

  return <List onSelect={handlerOnSelect} items={items} />;
};
