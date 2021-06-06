import { sortFleet } from ".";
import { FleetPlace, FleetState } from "../../store/organize/ships";

const fleetData: FleetState = [
  { fleetNo: 0, turnNo: 0, shipId: "0" },
  { fleetNo: 0, turnNo: 1, shipId: "1" },
  { fleetNo: 0, turnNo: 2, shipId: "2" },
];

describe("SortFleet", () => {
  test("Single Move", () => {
    const from: FleetPlace = { fleetNo: 0, turnNo: 0 };
    const to: FleetPlace = { fleetNo: 0, turnNo: 1 };

    const expected = [
      expect.objectContaining({ turnNo: 0, shipId: "1" }),
      expect.objectContaining({ turnNo: 1, shipId: "0" }),
      expect.objectContaining({ turnNo: 2, shipId: "2" }),
    ];

    expect(sortFleet(fleetData, from, to)).toEqual(
      expect.arrayContaining(expected)
    );
  });

  test("Multi Move", () => {
    const from: FleetPlace = { fleetNo: 0, turnNo: 0 };
    const to: FleetPlace = { fleetNo: 0, turnNo: 2 };

    const expected = [
      expect.objectContaining({ turnNo: 0, shipId: "1" }),
      expect.objectContaining({ turnNo: 1, shipId: "2" }),
      expect.objectContaining({ turnNo: 2, shipId: "0" }),
    ];

    expect(sortFleet(fleetData, from, to)).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
