import { FC } from "react";
import { root } from "./styles";
import { MaterialIconNames } from "./types";

export * from "./action";
export * from "./content";
export * from "./editor";
export * from "./Image";
export * from "./maps";
export * from "./navigation";

type Props = {
  icon: MaterialIconNames;
  size?: number;
};
export const MaterialIcon: FC<Props> = ({ icon, size }) => {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <text className={root} y={24}>
        {icon}
      </text>
    </svg>
  );
};
