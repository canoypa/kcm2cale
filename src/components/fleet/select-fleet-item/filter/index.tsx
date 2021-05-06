import { Chip } from "@material-ui/core";
import { FC } from "react";
import { FilterGroup } from "../types";

type Props = {
  items: FilterGroup;
  onFilterChange: (filters: string | null) => void;
};
export const Filter: FC<Props> = ({ items, onFilterChange }) => (
  <div>
    {items.filters.map((v) => {
      const _onFilterChange = () => onFilterChange(v.value.toString());
      return (
        <Chip
          key={v.value}
          variant="outlined"
          label={v.label}
          onClick={_onFilterChange}
        />
      );
    })}
  </div>
);
