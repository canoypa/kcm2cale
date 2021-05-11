import {
  AppBar,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import { FC, useCallback, VFC } from "react";
import {
  shipGroupFilter,
  ShipSearchGroupMap,
  ShipSearchGroupValues,
} from "../../../../core/filters/ship";
import { ShipSearch } from "../../../../core/search/ship";
import { ShipData } from "../../../../modules/ship";
import { OrganizeSelectSearchRenderer } from "../../select-fleet-item/search-renderer";
import { useSearchQuery } from "./hooks";
import { SearchShipsList } from "./search-ships-list";

const isShipGroupValue = (n: number): n is ShipSearchGroupValues =>
  n >= 0 && n <= 8;

type SelectShipProps = {
  onSelect: (shipData: ShipData) => void;
  onClose: () => void;
};
const SelectShip: FC<SelectShipProps> = ({ onSelect, onClose }) => {
  const { query: searchQuery, setQuery, setTypes } = useSearchQuery();

  const handler = {
    filterChange: useCallback(
      (_filter: string | null) => {
        if (_filter === null) {
          setTypes(null);
        } else {
          const filter = parseInt(_filter, 10);
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
        onSelect(shipData);
      },
      [onSelect]
    ),
  };

  const shipsList = ShipSearch.search(searchQuery);

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton edge="start" onClick={onClose}>
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

type SelectShipDialogProps = {
  open: boolean;
  onSelect: (shipData: ShipData) => void;
  onClose: () => void;
};
export const SelectShipDialog: VFC<SelectShipDialogProps> = ({
  open,
  onSelect,
  onClose,
}) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <SelectShip onSelect={onSelect} onClose={onClose} />
    </Dialog>
  );
};
