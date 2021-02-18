import { ComponentClass, createContext, FC, useContext } from "react";
import * as styles from "./styles";

export { bottomNavigationAdjust } from "./styles";

type BottomNavValue = any;

type BottomNavContextType = {
  itemClick?: (value: BottomNavValue) => void;
};
const BottomNavigationContext = createContext<BottomNavContextType>({});

type BottomNavProps = {
  onSelect?: (value: BottomNavValue) => void;
};
export const BottomNavigation: FC<BottomNavProps> = ({
  onSelect,
  children,
}) => {
  const getContextValue = {
    ...(onSelect && { itemClick: (value: BottomNavValue) => onSelect(value) }),
  };

  return (
    <BottomNavigationContext.Provider value={getContextValue}>
      <div className={styles.root}>{children}</div>
    </BottomNavigationContext.Provider>
  );
};

type BottomNavItemProps = {
  label: string;
  value: BottomNavValue;
  icon: ComponentClass | FC;
};
export const BottomNavigationItem: FC<BottomNavItemProps> = ({
  label,
  value,
  icon: Icon,
}) => {
  const { itemClick } = useContext(BottomNavigationContext);
  const handlerClick = itemClick && (() => itemClick(value));

  return (
    <div className={styles.item} onClick={handlerClick}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};
