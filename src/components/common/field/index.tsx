import { cloneElement, FC, ReactElement, useState } from "react";
import { classNames } from "../../../util/class-names";
import * as styles from "./styles";

type Props = {
  label?: string;
  value?: string;
  fullWidth?: boolean;
  children: ReactElement;
};
export const Field: FC<Props> = ({ label, value, fullWidth, children }) => {
  const [isFocusin, setIsFocusin] = useState(false);

  const handlers = {
    focusin: () => setIsFocusin(true),
    focusout: () => setIsFocusin(false),
  };

  const wrapperClassNames = classNames(styles.wrapper, {
    [styles.focusing]: isFocusin,
    [styles.hasValue]: Boolean(value),
    [styles.fullWidth]: Boolean(fullWidth),
  });

  return (
    <div className={wrapperClassNames}>
      <div
        className={styles.container}
        onFocus={handlers.focusin}
        onBlur={handlers.focusout}
      >
        {cloneElement(children, { value })}
        <label className={styles.label}>{label}</label>
        <div className={styles.outlineContainer}>
          <div
            className={classNames(styles.outline, styles.outlineStart)}
          ></div>
          {label && (
            <div className={classNames(styles.outline, styles.outlineCenter)}>
              <div className={styles.labelSizing}>{label}</div>
            </div>
          )}
          <div className={classNames(styles.outline, styles.outlineEnd)}></div>
        </div>
      </div>
    </div>
  );
};

export { TextInput } from "./input";
export { Select } from "./select";
export { Textarea } from "./textarea";
