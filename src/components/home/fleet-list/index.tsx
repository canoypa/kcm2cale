import { Box, Container } from "@material-ui/core";
import { ChangeEventHandler, createContext, FC, useRef } from "react";
import {
  useFleetList,
  useRefreshFleetList,
  useSearchFleetQuery,
} from "../../../core/search/fleet";
import { SearchBox } from "../../common/search-box";
import { FleetCard } from "../fleet-card";
import { useStyles } from "./styles";

export const FleetListContext = createContext({ reloadFleet: () => {} });

export const FleetList: FC = () => {
  const fleetList = useFleetList();
  const reloadFleet = useRefreshFleetList();
  const [query, setQuery] = useSearchFleetQuery();

  const classes = useStyles();

  // 編成削除時のリロード用 context value
  const contextValue = useRef({ reloadFleet });

  const changeQuery: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  return (
    <FleetListContext.Provider value={contextValue.current}>
      <div className={classes.searchBoxArea}>
        <SearchBox
          fullWidth
          placeholder="編成を検索"
          value={query}
          onChange={changeQuery}
        />
      </div>

      <Container maxWidth="md">
        <Box display="grid" gridRowGap={16} paddingTop={3} paddingBottom={3}>
          {fleetList.map((v) => (
            <FleetCard key={v.id} fleetData={v} />
          ))}
        </Box>
      </Container>
    </FleetListContext.Provider>
  );
};
