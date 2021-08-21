import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import { FC, useCallback } from "react";
import {
  equipmentGroupFilter,
  EquipmentGroupMap,
  EquipmentGroupValues,
} from "~/core/filters/equipment";
import { EquipmentSearch } from "~/core/search/equipment";
import { EquipmentData, ShipEquipment } from "~/models/equipment/types";
import { OrganizeSelectSearchRenderer } from "../../select-fleet-item/search-renderer";
import { useSearchQuery } from "../hooks/search-query";
import { useSetEquipment } from "../hooks/set-equipment";
import { SearchEquipmentsList } from "../search-equipments-list";

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
  target: ShipEquipment;
  onClose: () => void;
};
const SelectEquipment: FC<SelectEquipmentProps> = ({ target, onClose }) => {
  const { query: searchQuery, setQuery, setTypes } = useSearchQuery();

  const setEquipment = useSetEquipment();

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
      (equipmentData: EquipmentData) => {
        setEquipment(target, equipmentData);
        onClose();
      },
      [onClose, setEquipment, target]
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
export default SelectEquipment;
