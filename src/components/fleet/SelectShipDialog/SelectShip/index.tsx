import { NavigateBefore } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useCallback } from "react";
import {
  shipGroupFilter,
  ShipSearchGroupMap,
  ShipSearchGroupValues,
} from "~/core/filters/ship";
import { ShipSearch } from "~/core/search/ship";
import { FleetShip } from "~/models/ship";
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
      (shipNoToSet: string) => {
        setShip(target, shipNoToSet);
        onClose();
      },
      [onClose, setShip, target]
    ),
  };

  const shipsList = ShipSearch.search(searchQuery);

  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={onClose}
            aria-label="戻る"
            sx={{ mr: 1 }}
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
