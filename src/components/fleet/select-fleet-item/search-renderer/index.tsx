import { AppBar, Box } from "@material-ui/core";
import { FC } from "react";
import { Filter } from "../filter";
import { SearchBox } from "./search-box";

type Props = {
  filterGroup: {
    id: string;
    title: string;
    filters: Array<{ value: number; label: string }>;
  };

  changeFilter: (value: string | null) => void;
  changeQuery: (value: string) => void;
};
export const OrganizeSelectSearchRenderer: FC<Props> = ({
  filterGroup,
  changeFilter,
  changeQuery,
}) => (
  <AppBar position="sticky" color="inherit" style={{ bottom: 0 }}>
    <Box padding={1}>
      <Box maxWidth={800}>
        <Box marginBottom={1}>
          <Filter items={filterGroup} onFilterChange={changeFilter} />
        </Box>
        {/* search box here... */}
        <SearchBox onSubmit={changeQuery} />
      </Box>
    </Box>
  </AppBar>
);
