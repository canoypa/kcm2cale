import { CircularProgress, Grid as Box } from "@material-ui/core";
import { ChangeEventHandler, createContext, FC, useRef } from "react";
import {
  useFleetList,
  useIsExistFleet,
  useRefreshFleetList,
  useSearchFleetQuery,
} from "../../../core/search/fleet";
import { SearchBox } from "../../common/search-box";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useStyles } from "./styles";

export const FleetListContext = createContext({ reloadFleet: () => {} });

export const FleetListArea: FC = () => {
  const isExistFleetList = useIsExistFleet();
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
    <div className={classes.root}>
      <div className={classes.container}>
        {fleetList ? (
          isExistFleetList ? (
            <FleetListContext.Provider value={contextValue.current}>
              <div className={classes.searchBoxArea}>
                <SearchBox
                  fullWidth
                  placeholder="編成を検索"
                  value={query}
                  onChange={changeQuery}
                />
              </div>
              <FleetList fleetList={fleetList} />
            </FleetListContext.Provider>
          ) : (
            <Box
              container
              justify="center"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <EmptyState />
            </Box>
          )
        ) : (
          <Box
            container
            justify="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <CircularProgress size={24} />
          </Box>
        )}
      </div>
    </div>
  );
};
