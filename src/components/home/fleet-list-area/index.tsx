import { CircularProgress, Grid as Box } from "@material-ui/core";
import {
  ChangeEventHandler,
  createContext,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import { LocalDatabase } from "../../../core/persistence/local-database";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import FleetSearch from "../../../core/search/fleet";
import { SearchBox } from "../../common/search-box";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useStyles } from "./styles";

export const FleetListContext = createContext({ reloadFleet: () => {} });

export const FleetListArea: FC = () => {
  const [isExistFleetList, setIsExistFleetList] = useState<boolean>(false);
  const [fleetList, setFleetList] = useState<LocalFleetData_v1[] | null>(null);

  const [query, setQuery] = useState<string>("");

  const classes = useStyles();

  // 保存済みの編成を読み込み state に保存
  const getAllFleet = () => {
    Promise.all([
      LocalDatabase.fleetLength(),
      FleetSearch.search({ q: query }),
    ]).then(([fleetLength, allFleetList]) => {
      setIsExistFleetList(Boolean(fleetLength));
      setFleetList(allFleetList);
    });
  };

  // 編成削除時のリロード用 context value
  const contextValue = useRef({
    reloadFleet: getAllFleet,
  });

  // 初回レンダー時 / クエリ変更時編成読み込み
  useEffect(() => {
    getAllFleet();
  }, [query]);

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
