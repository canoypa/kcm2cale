import { Chip, Grid } from "@material-ui/core";
import { FC } from "react";
import { FilterGroup } from "../types";
import { useStyles } from "./styles";

type Props = {
  items: FilterGroup;
  onFilterChange: (filters: string | null) => void;
};
export const Filter: FC<Props> = ({ items, onFilterChange }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      wrap="nowrap"
      className={classes.root}
      style={{
        overflow: "auto",
      }}
    >
      {items.filters.map((v) => {
        const _onFilterChange = () => onFilterChange(v.value.toString());
        return (
          <Grid item key={v.value}>
            <Chip
              key={v.value}
              variant="outlined"
              label={v.label}
              onClick={_onFilterChange}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
