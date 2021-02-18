import { FC } from "react";
import { createPortal } from "react-dom";
import { appRoot } from "../../../../core/variable";
import { classNames } from "../../../../util/class-names";
import * as styles from "./styles";

export const FloatingLayout: FC = ({ children }) =>
  createPortal(
    <div className={classNames(styles.root)}>{children}</div>,
    appRoot
  );
