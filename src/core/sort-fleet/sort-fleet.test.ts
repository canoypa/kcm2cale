import { sortFleet } from ".";
import { FleetPlace, FleetShip } from "../../models/ship";

const fleetData: FleetShip[] = [
  { fleetNo: 0, turnNo: 0, id: "0", no: "0" },
  { fleetNo: 0, turnNo: 1, id: "1", no: "0" },
  { fleetNo: 0, turnNo: 2, id: "2", no: "0" },
];

describe("SortFleet", () => {
  test("Single Move", () => {
    const from: FleetPlace = { fleetNo: 0, turnNo: 0 };
    const to: FleetPlace = { fleetNo: 0, turnNo: 1 };

    const expected = expect.arrayContaining([
      expect.objectContaining({ turnNo: 0, id: "1" }),
      expect.objectContaining({ turnNo: 1, id: "0" }),
      expect.objectContaining({ turnNo: 2, id: "2" }),
    ]);

    expect(sortFleet(fleetData, from, to)).toEqual(expected);
  });

  test("Multi Move", () => {
    const from: FleetPlace = { fleetNo: 0, turnNo: 0 };
    const to: FleetPlace = { fleetNo: 0, turnNo: 2 };

    const expected = expect.arrayContaining([
      expect.objectContaining({ turnNo: 0, id: "1" }),
      expect.objectContaining({ turnNo: 1, id: "2" }),
      expect.objectContaining({ turnNo: 2, id: "0" }),
    ]);

    expect(sortFleet(fleetData, from, to)).toEqual(expected);
  });
});
