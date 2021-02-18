import { FC } from "react";
import { ChoiceChips } from "../../../common/chip/choice";
import { FilterGroup } from "../types";

type Props = {
  items: FilterGroup;
  onFilterChange: (filters: string | null) => void;
};
export const Filter: FC<Props> = ({ items, onFilterChange }) => (
  <ChoiceChips scroll items={items.filters} onChangeValue={onFilterChange} />
);
