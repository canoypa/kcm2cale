import { FC, MouseEvent, MouseEventHandler } from "react";
import { IconButton } from "../button";
import { IconMoreVert } from "../icons";
import * as styles from "./styles";

export const Card: FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

type OverflowMenuProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export const CardOverflowMenu: FC<OverflowMenuProps> = ({ onClick }) => {
  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };
  return (
    <div className={styles.overflowMenu}>
      <IconButton icon={<IconMoreVert />} onClick={clickHandler} />
    </div>
  );
};

export const CardHeader: FC = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

type OverlineProps = {
  label?: string;
};
export const CardOverline: FC<OverlineProps> = ({ label, children }) => (
  <div className={styles.overline}>{label || children}</div>
);

type TitleProps = {
  label?: string;
};
export const CardTitle: FC<TitleProps> = ({ label, children }) => (
  <h6 className={styles.title}>{label || children}</h6>
);

type SubTitleProps = {
  label?: string;
};
export const CardSubTitle: FC<SubTitleProps> = ({ label, children }) => (
  <div className={styles.subtitle}>{label || children}</div>
);

type BodyProps = {
  label?: string;
};
export const CardBody: FC<BodyProps> = ({ label, children }) => (
  <div className={styles.body}>{label || children}</div>
);
