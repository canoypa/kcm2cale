import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import { FC } from "react";
import { EquipmentData } from "../../../../../modules/equipment/types";

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

  return (
    <Box flexGrow={1}>
      <List>
        {items.map((v) => {
          const _handlerOnSelect = () => handlerOnSelect(v.value);

          return (
            <ListItem key={v.key} button onClick={_handlerOnSelect}>
              <ListItemText primary={v.label} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
