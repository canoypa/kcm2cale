import { FC } from "react";
import { ShipData } from "../../../../../modules/ship";
import { List } from "../../../../common/list";

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

  return <List onSelect={handlerOnSelect} items={items} />;
};
