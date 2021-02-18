import { FC } from "react";
import { classNames } from "../../../util/class-names";
import * as styles from "./styles";

type Props = {
  open?: boolean;
  onClose?: () => void;
};
export const Dialog: FC<Props> = ({ children, open, onClose }) => {
  if (!open) return null;

  const wrapperClasses = classNames(styles.wrapper, {
    [styles.isOpen]: Boolean(open),
  });

  const handler = {
    close: () => onClose?.(),
  };

  return (
    <div className={wrapperClasses}>
      <div className={styles.container}>{children}</div>
      <div className={styles.scrim} onClick={handler.close}></div>
    </div>
  );
};

export const DialogTitle: FC = ({ children }) => (
  <h6 className={styles.title}>{children}</h6>
);

export const DialogContent: FC = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

export const DialogActions: FC = ({ children }) => (
  <div className={styles.actions}>{children}</div>
);
