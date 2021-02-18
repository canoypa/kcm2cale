import { ShipSearch } from ".";
import { ShipType } from "../../../modules/ship";

describe("Search: Ship", () => {
  it("Type", () => {
    const filter = { type: [ShipType.Destroyer] };

    const search = ShipSearch.search(filter);
    const isCorrect = search.every(
      (shipData) => shipData.type === ShipType.Destroyer
    );

    expect(isCorrect).toBe(true);
  });

  it("Query", () => {
    const target = { keyword: "伊", no: "127a" };

    const filter = { q: target.keyword };

    const search = ShipSearch.search(filter);
    const isCorrect = search.some((shipData) => shipData.no === target.no);

    expect(isCorrect).toBe(true);
  });
});
