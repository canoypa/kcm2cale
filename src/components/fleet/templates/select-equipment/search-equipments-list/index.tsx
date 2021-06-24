import { ListItem, ListItemText } from "@material-ui/core";
import { FC } from "react";
import Measure from "react-measure";
import { FixedSizeList } from "react-window";
import { EquipmentData } from "../../../../../models/equipment/types";

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
    <Measure bounds>
      {({ measureRef, contentRect }) => (
        <div style={{ flexGrow: 1 }} ref={measureRef}>
          <FixedSizeList
            width={contentRect.bounds?.width || 0}
            height={contentRect.bounds?.height || 0}
            itemCount={items.length}
            itemSize={48}
          >
            {({ index, style }) => {
              const item = items[index];
              const _handlerOnSelect = () => handlerOnSelect(item.value);

              return (
                <ListItem
                  key={item.key}
                  button
                  style={style}
                  onClick={_handlerOnSelect}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              );
            }}
          </FixedSizeList>
        </div>
      )}
    </Measure>
  );
};
