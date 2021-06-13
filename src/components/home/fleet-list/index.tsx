import { Box, CircularProgress, Grid } from "@material-ui/core";
import { ChangeEventHandler, createContext, FC, Suspense, useRef } from "react";
import { LocalFleetDataV1 } from "../../../core/persistence/types";
import { searchFleet } from "../../../core/search/fleet";
import {
  useRefreshFleetList,
  useSearchFleetQuery,
} from "../../../hooks/organize/fleet";
import { SearchBox } from "../../common/search-box";
import { FleetCard } from "../fleet-card";
import { useStyles } from "./styles";

export const FleetListContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  reloadFleet: () => {},
});

type Props = {
  fleetList: LocalFleetDataV1[];
};

const FleetListView: FC<Props> = ({ fleetList }) => {
  const reloadFleet = useRefreshFleetList();

  // 編成削除時のリロード用 context value
  const contextValue = useRef({ reloadFleet });

  return (
    <FleetListContext.Provider value={contextValue.current}>
      <Box display="grid" gridRowGap={16}>
        {fleetList.map((v) => (
          <FleetCard key={v.id} fleetData={v} />
        ))}
      </Box>
    </FleetListContext.Provider>
  );
};

export const FleetList: FC<Props> = ({ fleetList }) => {
  const [query, setQuery] = useSearchFleetQuery();

  const searchedFleetList = searchFleet(fleetList, { q: query });

  const classes = useStyles();

  const changeQuery: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div className={classes.searchBoxArea}>
        <SearchBox
          fullWidth
          placeholder="編成を検索"
          value={query}
          onChange={changeQuery}
        />
      </div>

      <Suspense
        fallback={
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <CircularProgress size={24} />
          </Grid>
        }
      >
        <FleetListView fleetList={searchedFleetList} />
      </Suspense>
    </div>
  );
};
