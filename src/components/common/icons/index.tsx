import { FC } from "react";
import { codePointMap } from "./codepointMap";
import { root } from "./styles";
import { MaterialIconNames } from "./types";

type Props = {
  icon: MaterialIconNames;
  size?: number;
};
export const MaterialIcon: FC<Props> = ({ icon, size }) => {
  const codePoint = String.fromCodePoint(codePointMap[icon]);
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <text className={root} y={24}>
        {codePoint}
      </text>
    </svg>
  );
};
