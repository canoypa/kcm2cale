import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import { FC, useCallback } from "react";
import {
  shipGroupFilter,
  ShipSearchGroupMap,
  ShipSearchGroupValues,
} from "~/core/filters/ship";
import { ShipSearch } from "~/core/search/ship";
import { FleetShip, ShipData } from "~/models/ship";
import { OrganizeSelectSearchRenderer } from "../../select-fleet-item/search-renderer";
import { useSearchQuery } from "../hooks/search-query";
import { useSetShip } from "../hooks/set-ship";
import { SearchShipsList } from "../search-ships-list";

const isShipGroupValue = (n: number): n is ShipSearchGroupValues =>
  n >= 0 && n <= 8;

type SelectShipProps = {
  target: FleetShip;
  onClose: () => void;
};
const SelectShip: FC<SelectShipProps> = ({ target, onClose }) => {
  const { query: searchQuery, setQuery, setTypes } = useSearchQuery();
  const setShip = useSetShip();

  const handler = {
    filterChange: useCallback(
      (filter: number | null) => {
        if (filter === null) {
          setTypes(null);
        } else {
          if (isShipGroupValue(filter)) {
            setTypes(ShipSearchGroupMap[filter]);
          }
        }
      },
      [setTypes]
    ),

    onChangeQuery: useCallback((value: string) => setQuery(value), [setQuery]),

    onSelect: useCallback(
      (shipData: ShipData) => {
        setShip(target, shipData);
        onClose();
      },
      [onClose, setShip, target]
    ),
  };

  const shipsList = ShipSearch.search(searchQuery);

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={onClose}
            aria-label="戻る"
            size="large"
          >
            <NavigateBefore />
          </IconButton>
          <Typography variant="h6">{"艦娘を選択"}</Typography>
        </Toolbar>
      </AppBar>
      <SearchShipsList shipsList={shipsList} onSelect={handler.onSelect} />
      <OrganizeSelectSearchRenderer
        filterGroup={shipGroupFilter}
        changeFilter={handler.filterChange}
        changeQuery={handler.onChangeQuery}
      />
    </>
  );
};
export default SelectShip;
