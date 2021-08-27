import { EquipSearch } from ".";
import { EquipType } from "../../../models/equip/types";

describe("Search: Equip", () => {
  it("Type", () => {
    const filter = { type: [EquipType.LargeCaliberMainGun] };

    const search = EquipSearch.search(filter);
    const isCorrect = search.every(
      (equipData) => equipData.type === EquipType.LargeCaliberMainGun
    );

    expect(isCorrect).toBe(true);
  });

  it("Query", () => {
    const target = { keyword: "12cm", no: 1 };

    const filter = { q: target.keyword };

    const search = EquipSearch.search(filter);
    const isCorrect = search.some((equipData) => equipData.no === target.no);

    expect(isCorrect).toBe(true);
  });
});
