import { FC, useCallback } from "react";
import {
  equipmentGroupFilter,
  EquipmentGroupMap,
  EquipmentGroupValues,
} from "../../../../core/filters/equipment";
import { EquipmentSearch } from "../../../../core/search/equipment";
import { EquipmentData } from "../../../../modules/equipment/types";
import { classNames } from "../../../../util/class-names";
import { FloatingLayout } from "../../../common/layout/fixed-layout";
import { LowerAppBar } from "../../../common/lower-app-bar";
import { OrganizeSelectSearchRenderer } from "../../select-fleet-item/search-renderer";
import { useSearchQuery } from "./hooks";
import { SearchEquipmentsList } from "./search-equipments-list";
import * as styles from "./styles";

const isEquipmentGroupValue = (n: number): n is EquipmentGroupValues =>
  n >= 0 && n <= 21;

type Props = {
  onSelect: (equipmentData: EquipmentData) => void;
  onClose: () => void;
};
export const SelectEquipment: FC<Props> = ({ onSelect, onClose }) => {
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
  };

  const equipmentsList = EquipmentSearch.search(searchQuery);

  return (
    <FloatingLayout>
      <div className={styles.root}>
        <LowerAppBar title="装備を選択" onNavClick={onClose} />
        <div className={classNames(styles.list, styles.searchAdjust)}>
          <SearchEquipmentsList
            equipmentsList={equipmentsList}
            onSelect={handler.onSelect}
          />
        </div>
        <OrganizeSelectSearchRenderer
          filterGroup={equipmentGroupFilter}
          changeFilter={handler.filterChange}
          changeQuery={handler.onChangeQuery}
        />
      </div>
    </FloatingLayout>
  );
};
