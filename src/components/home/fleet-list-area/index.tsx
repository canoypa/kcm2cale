import { CircularProgress, Grid } from "@material-ui/core";
import {
  ChangeEventHandler,
  createContext,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import FleetSearch from "../../../core/search/fleet";
import { SearchBox } from "../../common/search-box";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";

export const FleetListContext = createContext({ reloadFleet: () => {} });

export const FleetListArea: FC = () => {
  const [fleetList, setFleetList] = useState<LocalFleetData_v1[]>();

  const [query, setQuery] = useState<string>("");

  // 保存済みの編成を読み込み state に保存
  const getAllFleet = async () => {
    const allFleets = await FleetSearch.search({ q: query });
    setFleetList(allFleets);
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
    <FleetListContext.Provider value={contextValue.current}>
      <SearchBox
        fullWidth
        placeholder="編成を検索"
        value={query}
        onChange={changeQuery}
      />
      {fleetList?.length ? (
        <FleetList fleetList={fleetList} />
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          {fleetList ? <EmptyState /> : <CircularProgress size={24} />}
        </Grid>
      )}
    </FleetListContext.Provider>
  );
};
