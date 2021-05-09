import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import { FC } from "react";
import { ShipData } from "../../../../../modules/ship";

type Props = {
  shipsList: ShipData[];
  onSelect: (shipData: ShipData) => void;
};
export const SearchShipsList: FC<Props> = ({ shipsList, onSelect }) => {
  const handlerOnSelect = (shipData: ShipData) => onSelect(shipData);

  const items = shipsList.map((shipData) => ({
    key: shipData.no,
    value: shipData,
    label: shipData.name,
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
