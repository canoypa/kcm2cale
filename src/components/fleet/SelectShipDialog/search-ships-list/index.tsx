import { ListItem, ListItemText } from "@material-ui/core";
import { FC } from "react";
import Measure from "react-measure";
import { FixedSizeList } from "react-window";
import { ShipData } from "~/models/ship";

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
