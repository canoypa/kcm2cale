import { css } from "@emotion/css";
import {
  TypographyBody1,
  TypographyHeadline4,
} from "../../../../common/typography";

export const title = css(
  {
    margin: 0,
    color: "rgba(0, 0, 0, 0.87)",
  },
  TypographyHeadline4
);

export const description = css(
  {
    marginTop: 8,
  },
  TypographyBody1
);

export const fleetType = css(
  {
    marginTop: 16,
  },
  TypographyBody1
);
