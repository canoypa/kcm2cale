import { FC } from "react";

type IconRendererProps =
  | {
      width?: number;
      height?: number;
      size?: never;
    }
  | {
      width?: never;
      height?: never;
      size?: number;
    };

export const createIcon = (...d: string[]): FC<IconRendererProps> => ({
  width,
  height,
  size,
}) => (
  <svg viewBox="0 0 24 24" width={size || width} height={size || height}>
    {d.map((v, key) => (
      <path key={key} d={v} />
    ))}
  </svg>
);
