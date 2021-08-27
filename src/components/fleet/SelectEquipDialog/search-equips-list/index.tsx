import { ListItem, ListItemText } from "@material-ui/core";
import { FC } from "react";
import Measure from "react-measure";
import { FixedSizeList } from "react-window";
import { EquipData } from "../../../../models/equip/types";

type Props = {
  equipsList: EquipData[];
  onSelect: (equipData: EquipData) => void;
};
export const SearchEquipsList: FC<Props> = ({ equipsList, onSelect }) => {
  const handlerOnSelect = (equipData: EquipData) => onSelect(equipData);

  const items = equipsList.map((equipData) => ({
    key: equipData.no,
    value: equipData,
    label: equipData.name,
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
