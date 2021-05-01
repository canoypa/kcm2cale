import { ChangeEventHandler, FC } from "react";
import { useTextareaStyles } from "./styles";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};
export const Textarea: FC<Props> = ({ value, onChange }) => {
  const styles = useTextareaStyles();

  return (
    <>
      <textarea value={value} onChange={onChange} className={styles.textarea} />
      <div className={styles.sizer}>{value}</div>
    </>
  );
};
