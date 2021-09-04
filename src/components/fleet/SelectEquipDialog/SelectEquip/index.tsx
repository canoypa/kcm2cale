import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import { FC, useCallback } from "react";
import {
  equipGroupFilter,
  EquipGroupMap,
  EquipGroupValues,
} from "~/core/filters/equip";
import { EquipSearch } from "~/core/search/equip";
import { EquipData, ShipEquip } from "~/models/equip/types";
import { OrganizeSelectSearchRenderer } from "../../select-fleet-item/search-renderer";
import { useSearchQuery } from "../hooks/search-query";
import { useSetEquip } from "../hooks/set-equip";
import { SearchEquipsList } from "../search-equips-list";

/**
 * 原因不明のエラー
 * `Uncaught TypeError: Cannot read property 'getAttribute' of null`
 *
 * - keyDown で発生
 * - いずれかの要素に focus されているとエラーにならない
 */

const isEquipGroupValue = (n: number): n is EquipGroupValues =>
  n >= 0 && n <= 21;

type SelectEquipProps = {
  target: ShipEquip;
  onClose: () => void;
};
const SelectEquip: FC<SelectEquipProps> = ({ target, onClose }) => {
  const { query: searchQuery, setQuery, setTypes } = useSearchQuery();

  const setEquip = useSetEquip();

  const handler = {
    filterChange: useCallback(
      (filter: number | null) => {
        if (filter === null) {
          setTypes(null);
        } else {
          if (isEquipGroupValue(filter)) {
            setTypes(EquipGroupMap[filter]);
          }
        }
      },
      [setTypes]
    ),

    onChangeQuery: useCallback((value: string) => setQuery(value), [setQuery]),

    onSelect: useCallback(
      (equipData: EquipData) => {
        setEquip(target, equipData);
        onClose();
      },
      [onClose, setEquip, target]
    ),
  };

  const equipsList = EquipSearch.search(searchQuery);

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
          <Typography variant="h6">装備を選択</Typography>
        </Toolbar>
      </AppBar>
      <SearchEquipsList equipsList={equipsList} onSelect={handler.onSelect} />
      <OrganizeSelectSearchRenderer
        filterGroup={equipGroupFilter}
        changeFilter={handler.filterChange}
        changeQuery={handler.onChangeQuery}
      />
    </>
  );
};
export default SelectEquip;
