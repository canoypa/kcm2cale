import { css } from "@emotion/css";
import { FC } from "react";
import { classNames } from "../../../util/class-names";
import * as styles from "./styles";

type Props = {
  children: string;
  clamp?: number;
};
export const LineClamp: FC<Props> = ({ children, clamp = 4 }) => {
  const style = css({
    WebkitLineClamp: clamp,
  });

  return (
    <span className={classNames(styles.container, style)}>{children}</span>
  );
};
