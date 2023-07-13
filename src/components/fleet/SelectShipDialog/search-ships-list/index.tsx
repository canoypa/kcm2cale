import { Box, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import { useMeasure } from "react-use";
import { FixedSizeList } from "react-window";
import { ShipData } from "~/models/ship";

type Props = {
  shipsList: ShipData[];
  onSelect: (shipNoToSet: string) => void;
};
export const SearchShipsList: FC<Props> = ({ shipsList, onSelect }) => {
  const [measureRef, { width, height }] = useMeasure();

  const handlerOnSelect = (shipNoToSet: string) => onSelect(shipNoToSet);

  const items = shipsList.map((shipData) => ({
    key: shipData.no,
    value: shipData.no,
    label: shipData.name,
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
