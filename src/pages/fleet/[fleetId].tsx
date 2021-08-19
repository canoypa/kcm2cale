import { NextPage } from "next";
import { useRouter } from "next/router";
import { FleetDataProvider } from "~/components/fleet/fleet-data-provider";
import { FleetExistRoute } from "~/components/fleet/FleetExistRoute";
import { FleetIdContext } from "~/components/fleet/fleetIdContext";

const FleetPage: NextPage = () => {
  const { query } = useRouter();
  const fleetId = query.fleetId;

  // 初回ロード時 undefined になる
  if (typeof fleetId !== "string") return null;

  return (
    <>
      <FleetIdContext.Provider value={fleetId}>
        <FleetDataProvider>
          <FleetExistRoute />
        </FleetDataProvider>
      </FleetIdContext.Provider>
    </>
  );
};
export default FleetPage;
