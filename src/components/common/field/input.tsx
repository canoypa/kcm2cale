import { ChangeEventHandler, FC } from "react";
import * as styles from "./styles";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
export const TextInput: FC<Props> = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={styles.textInput}
  />
);
