import { isFleetType } from ".";
import { FleetType } from "../../../store/organize/info";

test("isFleetType", () => {
  expect(isFleetType(FleetType.Normal)).toBe(true);
  expect(isFleetType(FleetType.StrikingForce)).toBe(true);
  expect(isFleetType(FleetType.Carrier)).toBe(true);
  expect(isFleetType(FleetType.Surface)).toBe(true);
  expect(isFleetType(FleetType.Transport)).toBe(true);

  expect(isFleetType("")).toBe(false);
  expect(isFleetType("normal")).toBe(false);
});
