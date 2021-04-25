import { ChangeEventHandler, FC } from "react";
import { useInputStyles } from "./styles";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
export const TextInput: FC<Props> = ({ value, onChange }) => {
  const styles = useInputStyles();

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.textInput}
    />
  );
};
