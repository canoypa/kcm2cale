import {
  AppBar,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import { FC, useCallback } from "react";
import {
  equipmentGroupFilter,
  EquipmentGroupMap,
  EquipmentGroupValues,
} from "../../../../core/filters/equipment";
import { EquipmentSearch } from "../../../../core/search/equipment";
import { EquipmentData } from "../../../../modules/equipment/types";
import { OrganizeSelectSearchRenderer } from "../../select-fleet-item/search-renderer";
import { useSearchQuery } from "./hooks";
import { SearchEquipmentsList } from "./search-equipments-list";

const isEquipmentGroupValue = (n: number): n is EquipmentGroupValues =>
  n >= 0 && n <= 21;

type Props = {
  open: boolean;
  onSelect: (equipmentData: EquipmentData) => void;
  onCancel: () => void;
};
export const SelectEquipment: FC<Props> = ({ open, onSelect, onCancel }) => {
  const { query: searchQuery, setQuery, setTypes } = useSearchQuery();

  const handler = {
    filterChange: useCallback(
      (_filter: string | null) => {
        if (_filter === null) {
          setTypes(null);
        } else {
          const filter = parseInt(_filter, 10);
          if (isEquipmentGroupValue(filter)) {
            setTypes(EquipmentGroupMap[filter]);
          }
        }
      },
      [setTypes]
    ),

    onChangeQuery: useCallback((value: string) => setQuery(value), [setQuery]),

    onSelect: useCallback(
      (equipmentData: EquipmentData) => onSelect(equipmentData),
      [onSelect]
    ),

    onCancel: useCallback(() => onCancel(), [onCancel]),
  };

  const equipmentsList = EquipmentSearch.search(searchQuery);

  return (
    <Dialog fullScreen open={open}>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton edge="start" onClick={onCancel}>
            <NavigateBefore />
          </IconButton>
          <Typography variant="h6">装備を選択</Typography>
        </Toolbar>
      </AppBar>
      <SearchEquipmentsList
        equipmentsList={equipmentsList}
        onSelect={handler.onSelect}
      />
      <OrganizeSelectSearchRenderer
        filterGroup={equipmentGroupFilter}
        changeFilter={handler.filterChange}
        changeQuery={handler.onChangeQuery}
      />
    </Dialog>
  );
};
