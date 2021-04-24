import { FC, useCallback } from "react";
import {
  shipGroupFilter,
  ShipSearchGroupMap,
  ShipSearchGroupValues,
} from "../../../../core/filters/ship";
import { ShipSearch } from "../../../../core/search/ship";
import { ShipData } from "../../../../modules/ship";
import { classNames } from "../../../../util/class-names";
import { FloatingLayout } from "../../../common/layout/fixed-layout";
import { LowerAppBar } from "../../../common/lower-app-bar";
import { OrganizeSelectSearchRenderer } from "../../select-fleet-item/search-renderer";
import { useSearchQuery } from "./hooks";
import { SearchShipsList } from "./search-ships-list";
import * as styles from "./styles";

const isShipGroupValue = (n: number): n is ShipSearchGroupValues =>
  n >= 0 && n <= 8;

type Props = {
  open: boolean;
  onSelect: (shipData: ShipData) => void;
  onEnd: () => void;
};
export const SelectShip: FC<Props> = ({ open, onSelect, onEnd }) => {
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
        onEnd();
      },
      [onEnd, onSelect]
    ),

    onCancel: useCallback(() => onEnd(), [onEnd]),
  };

  const shipsList = ShipSearch.search(searchQuery);

  if (!open) {
    return null;
  }

  return (
    <FloatingLayout>
      <div className={styles.root}>
        <LowerAppBar title="艦娘を選択" onNavClick={handler.onCancel} />
        <div className={classNames(styles.list, styles.searchAdjust)}>
          <SearchShipsList shipsList={shipsList} onSelect={handler.onSelect} />
        </div>
        <OrganizeSelectSearchRenderer
          filterGroup={shipGroupFilter}
          changeFilter={handler.filterChange}
          changeQuery={handler.onChangeQuery}
        />
      </div>
    </FloatingLayout>
  );
};
