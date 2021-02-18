import { ChangeEventHandler, FC } from "react";
import * as styles from "./styles";

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};
export const Textarea: FC<Props> = ({ value, onChange }) => (
  <>
    <textarea value={value} onChange={onChange} className={styles.textarea} />
    <div className={styles.sizer}>{value}</div>
  </>
);
