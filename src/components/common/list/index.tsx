import { Attributes, createContext, FC, ReactNode, useContext } from "react";
import { RequireOne } from "../../../util/types";
import * as styles from "./styles";

type ListValue = any;

type ListContextType = {
  clickItem?: (value: ListValue) => void;
};
const ListContext = createContext<ListContextType>({});

type ListItemProps = {
  label: string;
  value: ListValue;
};
export const ListItem: FC<ListItemProps> = ({ label, value }) => {
  const { clickItem } = useContext(ListContext);

  const onClick = clickItem && (() => clickItem(value));

  return (
    <li className={styles.listItem} tabIndex={0} onClick={onClick}>
      {label}
      <div className={styles.state}></div>
    </li>
  );
};

type ListProps = {
  onSelect?: (value: ListValue) => void;
} & RequireOne<{
  items: Array<ListItemProps & Attributes>;
  children: ReactNode;
}>;
export const List: FC<ListProps> = ({ onSelect, items, children }) => {
  const getContextValue: ListContextType = {
    clickItem: (value: ListValue) => onSelect?.(value),
  };

  const renderChild = () => {
    if (items) {
      return items.map((props, index) => <ListItem key={index} {...props} />);
    }
    return children;
  };

  return (
    <ListContext.Provider value={getContextValue}>
      <ul className={styles.list}>{renderChild()}</ul>
    </ListContext.Provider>
  );
};
