import { createContext, FC, useContext, useState } from "react";
import { classNames } from "../../../util/class-names";
import * as styles from "./styles";

type ToggleButtonsValue = any;

type ToggleButtonsContextType = {
  itemClick?: (value: ToggleButtonsValue) => void;
  value?: ToggleButtonsValue;
};
const ToggleButtonsContext = createContext<ToggleButtonsContextType>({});

type ToggleButtonsProps = {
  defaultValue?: ToggleButtonsValue;
  onSelect?: (value: ToggleButtonsValue) => void;
};
export const ToggleButtons: FC<ToggleButtonsProps> = ({
  defaultValue,
  onSelect,
  children,
}) => {
  const [value, setValue] = useState<ToggleButtonsValue>(defaultValue);

  const getContextValue = {
    itemClick: (v: ToggleButtonsValue) => {
      setValue(v);
      onSelect?.(v);
    },
    value,
  };

  return (
    <ToggleButtonsContext.Provider value={getContextValue}>
      <div className={styles.toggleButtons}>{children}</div>
    </ToggleButtonsContext.Provider>
  );
};

type ToggleButtonItemProps = {
  label: string;
  value: ToggleButtonsValue;
};
export const ToggleButtonItem: FC<ToggleButtonItemProps> = ({
  label,
  value,
}) => {
  const { itemClick, value: activeValue } = useContext(ToggleButtonsContext);
  const handlerClick = () => itemClick?.(value);

  const classes = classNames(styles.toggleButtonItem, {
    [styles.selected]: value === activeValue,
  });

  return (
    <button className={classes} onClick={handlerClick}>
      {label}
    </button>
  );
};
