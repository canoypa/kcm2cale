import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fleet } from "../../components/fleet";
import { FleetDataProvider } from "../../components/fleet/fleet-data-provider";
import { FleetIdContext } from "../../components/fleet/fleetIdContext";

const FleetPage: NextPage = () => {
  const { query } = useRouter();
  const fleetId = query.fleetId;

  // 初回ロード時 undefined になる
  if (typeof fleetId !== "string") return null;

  return (
    <>
      <FleetIdContext.Provider value={fleetId}>
        <FleetDataProvider>
          <Fleet />
        </FleetDataProvider>
      </FleetIdContext.Provider>
    </>
  );
};
export default FleetPage;
