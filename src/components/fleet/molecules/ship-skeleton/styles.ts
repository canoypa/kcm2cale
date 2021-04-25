import { css } from "@emotion/css";

// Todo: ship item との重複解決
export const root = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #e0e0e0",
  padding: "16px 0",
  borderRadius: "4px",
  color: "#212121",
  cursor: "pointer",

  boxSizing: "border-box",
  height: "64px",

  margin: "4px 0",
});

export const icon = css({
  width: "24px",
  height: "24px",
  fill: "#bdbdbd",
});
