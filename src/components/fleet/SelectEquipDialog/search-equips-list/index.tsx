import { Box, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import { useMeasure } from "react-use";
import { FixedSizeList } from "react-window";
import { EquipData } from "../../../../models/equip/types";

type Props = {
  equipsList: EquipData[];
  onSelect: (equipNoToSet: number) => void;
};
export const SearchEquipsList: FC<Props> = ({ equipsList, onSelect }) => {
  const [measureRef, { width, height }] = useMeasure();

  const handlerOnSelect = (equipNoToSet: number) => onSelect(equipNoToSet);

  const items = equipsList.map((equipData) => ({
    key: equipData.no,
    value: equipData.no,
    label: equipData.name,
  }));

  return (
    <Box flexGrow={1} ref={measureRef}>
      <FixedSizeList
        width={width}
        height={height}
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
              sx={style}
              onClick={_handlerOnSelect}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          );
        }}
      </FixedSizeList>
    </Box>
  );
};
