import { AppBar, Box, Grid } from "@material-ui/core";
import { FC } from "react";
import { Filter } from "../filter";
import { SearchFilters } from "../types";
import { SearchBox } from "./search-box";

type Props = {
  filterGroup: SearchFilters;

  changeFilter: (value: number | null) => void;
  changeQuery: (value: string) => void;
};
export const OrganizeSelectSearchRenderer: FC<Props> = ({
  filterGroup,
  changeFilter,
  changeQuery,
}) => (
  <AppBar position="sticky" color="inherit" sx={{ bottom: 0 }}>
    <Grid container justifyContent="center" p={1}>
      <Box maxWidth={800} width="100%" overflow="hidden">
        <Box marginBottom={1}>
          <Filter items={filterGroup} onFilterChange={changeFilter} />
        </Box>
        {/* search box here... */}
        <SearchBox onSubmit={changeQuery} />
      </Box>
    </Grid>
  </AppBar>
);
