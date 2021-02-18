import { FC } from "react";
import { classNames } from "../../../util/class-names";
import * as styles from "./styles";

export const TopAppBar: FC = ({ children }) => (
  <header className={styles.container}>{children}</header>
);

export const TopAppBarSection: FC<{ align: "start" | "end" }> = ({
  align,
  children,
}) => (
  <section
    className={classNames(styles.section, {
      [styles.sectionAlignStart]: align === "start",
      [styles.sectionAlignEnd]: align === "end",
    })}
  >
    {children}
  </section>
);

export const TopAppBarTitle: FC = ({ children }) => (
  <h6 className={styles.title}>{children}</h6>
);

export const TopAppBarIcon: FC = ({ children }) => <i>{children}</i>;
