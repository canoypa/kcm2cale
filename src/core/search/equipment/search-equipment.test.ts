import { EquipmentSearch } from ".";
import { EquipmentType } from "../../../modules/equipment/types";

describe("Search: Equipment", () => {
  it("Type", () => {
    const filter = { type: [EquipmentType.LargeCaliberMainGun] };

    const search = EquipmentSearch.search(filter);
    const isCorrect = search.every(
      (equipmentData) =>
        equipmentData.type === EquipmentType.LargeCaliberMainGun
    );

    expect(isCorrect).toBe(true);
  });

  it("Query", () => {
    const target = { keyword: "12cm", no: 1 };

    const filter = { q: target.keyword };

    const search = EquipmentSearch.search(filter);
    const isCorrect = search.some(
      (equipmentData) => equipmentData.no === target.no
    );

    expect(isCorrect).toBe(true);
  });
});
