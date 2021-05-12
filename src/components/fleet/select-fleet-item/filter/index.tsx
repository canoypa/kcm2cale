import { Chip, Grid } from "@material-ui/core";
import { FC, useState } from "react";
import { SearchFilters } from "../types";
import { useStyles } from "./styles";

type Props = {
  items: SearchFilters;
  onFilterChange: (filters: number | null) => void;
};
export const Filter: FC<Props> = ({ items, onFilterChange }) => {
  const [state, setState] = useState<number | null>(null);

  const classes = useStyles();

  const onChange = (value: number) => {
    const newState = value === state ? null : value;
    setState(newState);
    onFilterChange(newState);
  };

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
        const _onChange = () => onChange(value);
        return (
          <Grid item key={value}>
            <Chip variant="outlined" label={label} onClick={_onChange} />
          </Grid>
        );
      })}
    </Grid>
  );
};
