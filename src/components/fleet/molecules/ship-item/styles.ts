import { css } from "@emotion/css";

export const root = css({
  display: "flex",
  alignItems: "center",
  border: "1px solid #e0e0e0",
  padding: `${16 - 1}px 0` /* - border width */,
  borderRadius: "4px",
  backgroundColor: "#fff",
  color: "#212121",
});

export const dragIndicator = css({
  margin: "0 4px",
  width: "24px",
  height: "24px",
  fill: "#bdbdbd",
  cursor: "grab",
});

export const content = css({
  display: "flex",
  flexDirection: "column",
  marginLeft: 12,
  minWidth: 0 /* flexbox バグ対策 */,
});

export const secondary = css({
  marginTop: 8,
  marginLeft: 8 /* avator + radius */,
  marginRight: 12,
});
