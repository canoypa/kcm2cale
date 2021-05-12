import { Chip, Grid } from "@material-ui/core";
import { FC } from "react";
import { SearchFilters } from "../types";
import { useStyles } from "./styles";

type Props = {
  items: SearchFilters;
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
      {items.map(({ label, value }) => {
        const _onFilterChange = () => onFilterChange(value.toString());
        return (
          <Grid item key={value}>
            <Chip variant="outlined" label={label} onClick={_onFilterChange} />
          </Grid>
        );
      })}
    </Grid>
  );
};
