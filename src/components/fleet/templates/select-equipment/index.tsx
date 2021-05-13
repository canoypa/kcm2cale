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
  equipmentGroupFilter,
  EquipmentGroupMap,
  EquipmentGroupValues,
} from "../../../../core/filters/equipment";
import { EquipmentSearch } from "../../../../core/search/equipment";
import { EquipmentData } from "../../../../modules/equipment/types";
import { OrganizeSelectSearchRenderer } from "../../select-fleet-item/search-renderer";
import { useSearchQuery } from "./hooks";
import { SearchEquipmentsList } from "./search-equipments-list";

/**
 * 原因不明のエラー
 * `Uncaught TypeError: Cannot read property 'getAttribute' of null`
 *
 * - keyDown で発生
 * - いずれかの要素に focus されているとエラーにならない
 */

const isEquipmentGroupValue = (n: number): n is EquipmentGroupValues =>
  n >= 0 && n <= 21;

type SelectEquipmentProps = {
  onSelect: (equipmentData: EquipmentData) => void;
  onClose: () => void;
};
const SelectEquipment: FC<SelectEquipmentProps> = ({ onSelect, onClose }) => {
  const { query: searchQuery, setQuery, setTypes } = useSearchQuery();

  const handler = {
    filterChange: useCallback(
      (filter: number | null) => {
        if (filter === null) {
          setTypes(null);
        } else {
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
  };

  const equipmentsList = EquipmentSearch.search(searchQuery);

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton edge="start" onClick={onClose} aria-label="戻る">
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
    </>
  );
};

type SelectEquipmentDialogProps = {
  open: boolean;
  onSelect: (equipmentData: EquipmentData) => void;
  onClose: () => void;
};
export const SelectEquipmentDialog: VFC<SelectEquipmentDialogProps> = ({
  open,
  onSelect,
  onClose,
}) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <SelectEquipment onSelect={onSelect} onClose={onClose} />
    </Dialog>
  );
};
