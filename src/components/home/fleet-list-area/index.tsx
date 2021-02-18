import { FC, useEffect, useState } from "react";
import { LocalDatabase } from "../../../core/persistence/local-database";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";

export const FleetListArea: FC = () => {
  const [fleetList, setFleetList] = useState<LocalFleetData_v1[]>();

  useEffect(() => {
    const getAllFleet = async () => {
      const allFleets = await LocalDatabase.getAllFleet();
      setFleetList(allFleets);
    };
    getAllFleet();
  }, []);

  return (
    <div>
      {fleetList ? (
        fleetList.length ? (
          <FleetList fleetList={fleetList} />
        ) : (
          <EmptyState />
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
