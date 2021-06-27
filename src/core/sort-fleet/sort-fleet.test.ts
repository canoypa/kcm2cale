import { sortFleet } from ".";
import { FleetPlace, FleetShip } from "../../models/ship";

type FleetState = FleetShip[];

const fleetData: FleetState = [
  { fleetNo: 0, turnNo: 0, id: null, no: null },
  { fleetNo: 0, turnNo: 1, id: null, no: null },
  { fleetNo: 0, turnNo: 2, id: null, no: null },
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
