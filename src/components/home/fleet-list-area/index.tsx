import { CircularProgress, Grid } from "@material-ui/core";
import { createContext, FC, useEffect, useRef, useState } from "react";
import { LocalDatabase } from "../../../core/persistence/local-database";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";

export const FleetListContext = createContext({ reloadFleet: () => {} });

export const FleetListArea: FC = () => {
  const [fleetList, setFleetList] = useState<LocalFleetData_v1[]>();

  // 保存済みの編成を読み込み state に保存
  const getAllFleet = async () => {
    const allFleets = await LocalDatabase.getAllFleet();
    setFleetList(allFleets);
  };

  // 編成削除時のリロード用 context value
  const contextValue = useRef({
    reloadFleet: getAllFleet,
  });

  // 初回レンダー時編成読み込み
  useEffect(() => {
    getAllFleet();
  }, []);

  return (
    <FleetListContext.Provider value={contextValue.current}>
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
