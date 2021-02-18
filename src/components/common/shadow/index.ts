const umbraColor = "rgba(0, 0, 0, 0.2)";
const penumbraColor = "rgba(0, 0, 0, 0.14)";
const ambientColor = "rgba(0, 0, 0, 0.12)";

export type ElevationZValueRange =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

const umbraMap = {
  0: "0px 0px 0px 0px",
  1: "0px 2px 1px -1px",
  2: "0px 3px 1px -2px",
  3: "0px 3px 3px -2px",
  4: "0px 2px 4px -1px",
  5: "0px 3px 5px -1px",
  6: "0px 3px 5px -1px",
  7: "0px 4px 5px -2px",
  8: "0px 5px 5px -3px",
  9: "0px 5px 6px -3px",
  10: "0px 6px 6px -3px",
  11: "0px 6px 7px -4px",
  12: "0px 7px 8px -4px",
  13: "0px 7px 8px -4px",
  14: "0px 7px 9px -4px",
  15: "0px 8px 9px -5px",
  16: "0px 8px 10px -5px",
  17: "0px 8px 11px -5px",
  18: "0px 9px 11px -5px",
  19: "0px 9px 12px -6px",
  20: "0px 10px 13px -6px",
  21: "0px 10px 13px -6px",
  22: "0px 10px 14px -6px",
  23: "0px 11px 14px -7px",
  24: "0px 11px 15px -7px",
};

const penumbraMap = {
  0: "0px 0px 0px 0px",
  1: "0px 1px 1px 0px",
  2: "0px 2px 2px 0px",
  3: "0px 3px 4px 0px",
  4: "0px 4px 5px 0px",
  5: "0px 5px 8px 0px",
  6: "0px 6px 10px 0px",
  7: "0px 7px 10px 1px",
  8: "0px 8px 10px 1px",
  9: "0px 9px 12px 1px",
  10: "0px 10px 14px 1px",
  11: "0px 11px 15px 1px",
  12: "0px 12px 17px 2px",
  13: "0px 13px 19px 2px",
  14: "0px 14px 21px 2px",
  15: "0px 15px 22px 2px",
  16: "0px 16px 24px 2px",
  17: "0px 17px 26px 2px",
  18: "0px 18px 28px 2px",
  19: "0px 19px 29px 2px",
  20: "0px 20px 31px 3px",
  21: "0px 21px 33px 3px",
  22: "0px 22px 35px 3px",
  23: "0px 23px 36px 3px",
  24: "0px 24px 38px 3px",
};

const ambientMap = {
  0: "0px 0px 0px 0px",
  1: "0px 1px 3px 0px",
  2: "0px 1px 5px 0px",
  3: "0px 1px 8px 0px",
  4: "0px 1px 10px 0px",
  5: "0px 1px 14px 0px",
  6: "0px 1px 18px 0px",
  7: "0px 2px 16px 1px",
  8: "0px 3px 14px 2px",
  9: "0px 3px 16px 2px",
  10: "0px 4px 18px 3px",
  11: "0px 4px 20px 3px",
  12: "0px 5px 22px 4px",
  13: "0px 5px 24px 4px",
  14: "0px 5px 26px 4px",
  15: "0px 6px 28px 5px",
  16: "0px 6px 30px 5px",
  17: "0px 6px 32px 5px",
  18: "0px 7px 34px 6px",
  19: "0px 7px 36px 6px",
  20: "0px 8px 38px 7px",
  21: "0px 8px 40px 7px",
  22: "0px 8px 42px 7px",
  23: "0px 9px 44px 8px",
  24: "0px 9px 46px 8px",
};

const createShadow = (zValue: ElevationZValueRange) => ({
  boxShadow: `
    ${umbraMap[zValue]} ${umbraColor},
    ${penumbraMap[zValue]} ${penumbraColor},
    ${ambientMap[zValue]} ${ambientColor}
  `,
});

export const Shadow0dp = createShadow(0);
export const Shadow1dp = createShadow(1);
export const Shadow2dp = createShadow(2);
export const Shadow3dp = createShadow(3);
export const Shadow4dp = createShadow(4);
export const Shadow5dp = createShadow(5);
export const Shadow6dp = createShadow(6);
export const Shadow7dp = createShadow(7);
export const Shadow8dp = createShadow(8);
export const Shadow9dp = createShadow(9);
export const Shadow10dp = createShadow(10);
export const Shadow11dp = createShadow(11);
export const Shadow12dp = createShadow(12);
export const Shadow13dp = createShadow(13);
export const Shadow14dp = createShadow(14);
export const Shadow15dp = createShadow(15);
export const Shadow16dp = createShadow(16);
export const Shadow17dp = createShadow(17);
export const Shadow18dp = createShadow(18);
export const Shadow19dp = createShadow(19);
export const Shadow20dp = createShadow(20);
export const Shadow21dp = createShadow(21);
export const Shadow22dp = createShadow(22);
export const Shadow23dp = createShadow(23);
export const Shadow24dp = createShadow(24);
