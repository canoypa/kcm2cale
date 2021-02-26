type NumberOrString<T extends number = number> = T | `${T}`;

type DeckbuilderEquipment = {
  /** 装備 id */
  id: NumberOrString;
  /** 改修 */
  rf?: NumberOrString<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>;
  /** 熟練度 */
  mas?: NumberOrString<1 | 2 | 3 | 4 | 5 | 6 | 7>;
};

type DeckbuilderShip = {
  /** Api id */
  id: NumberOrString;
  /** レベル */
  lv?: NumberOrString;
  /** 幸運 -1 でデフォルト値 */
  luck?: NumberOrString;

  /**
   * 装備リスト
   * i[slot number], ix (補強増設)
   */
  items: Partial<{
    i1: DeckbuilderEquipment;
    i2: DeckbuilderEquipment;
    i3: DeckbuilderEquipment;
    i4: DeckbuilderEquipment;
    i5: DeckbuilderEquipment;
    ix: DeckbuilderEquipment;
  }>;
};

type DeckbuilderFleet = Partial<{
  s1: DeckbuilderShip;
  s2: DeckbuilderShip;
  s3: DeckbuilderShip;
  s4: DeckbuilderShip;
  s5: DeckbuilderShip;
  s6: DeckbuilderShip;
  s7: DeckbuilderShip;
}>;

export type DeckbuilderFleetFormat = {
  /**
   * フォーマットバージョン
   * 現在 4
   */
  version: 4;
} & Partial<{
  /**
   * 提督レベル
   * 反映はされない
   */
  hqlv: NumberOrString;

  f1: DeckbuilderFleet;
  f2: DeckbuilderFleet;
  f3: DeckbuilderFleet;
  f4: DeckbuilderFleet;
}>;
