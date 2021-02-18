import { isCombinedFleet } from ".";
import { FleetType } from "../../../store/organize/info";

test("isCombinedFleet", () => {
  expect(isCombinedFleet(FleetType.Carrier)).toBe(true);
  expect(isCombinedFleet(FleetType.Surface)).toBe(true);
  expect(isCombinedFleet(FleetType.Transport)).toBe(true);

  expect(isCombinedFleet(FleetType.Normal)).toBe(false);
  expect(isCombinedFleet(FleetType.StrikingForce)).toBe(false);
});
