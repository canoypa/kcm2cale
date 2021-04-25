import { FC, FormEventHandler, useRef } from "react";
import { MaterialIcon } from "../../../../common/icons";
import * as styles from "./styles";

// Todo: 汎用化
const IconLayout: FC = ({ children }) => (
  <div className={styles.iconLayout}>{children}</div>
);

type Props = {
  onSubmit: (value: string) => void;
};
export const SearchBox: FC<Props> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(inputRef.current?.value ?? "");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div className={styles.container}>
        <IconLayout>
          <MaterialIcon icon="search" size={20} />
        </IconLayout>
        <input ref={inputRef} type="text" className={styles.input} />
      </div>
    </form>
  );
};
