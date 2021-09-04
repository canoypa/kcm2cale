import { AppBar, Box, Container } from "@material-ui/core";
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
  <AppBar position="sticky" color="transparent" sx={{ bottom: 0 }}>
    <Container maxWidth="md">
      <Box py={1}>
        <Box mb={1}>
          <Filter items={filterGroup} onFilterChange={changeFilter} />
        </Box>
        <SearchBox onSubmit={changeQuery} />
      </Box>
    </Container>
  </AppBar>
);
