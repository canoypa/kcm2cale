import { ChangeEventHandler, FC, useEffect, useRef, useState } from "react";
import { MaterialIcon } from "../icons";
import { useSelectStyles } from "./styles";

type Option = { label: string; value: string };
type OptionsOrOptGroup = Array<Option | { label: string; options: Option[] }>;

const renderOptions = (options: OptionsOrOptGroup) =>
  options.map((v) =>
    "options" in v ? (
      <optgroup key={v.label} label={v.label}>
        {renderOptions(v.options)}
      </optgroup>
    ) : (
      <option key={v.label} label={v.label} value={v.value} />
    )
  );

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options: OptionsOrOptGroup;
};
export const Select: FC<Props> = ({ value, options, onChange }) => {
  const ref = useRef<HTMLSelectElement>(null);

  const [label, setLabel] = useState<string>("");

  const styles = useSelectStyles();

  useEffect(() => {
    if (ref.current) {
      setLabel(ref.current.options[ref.current.selectedIndex].label);
    }
  });

  return (
    <>
      <div className={styles.select}>
        <div>{label}</div>
        <MaterialIcon icon="arrow_drop_down" size={24} />
      </div>
      <select
        ref={ref}
        value={value}
        onChange={onChange}
        className={styles.options}
      >
        {renderOptions(options)}
      </select>
    </>
  );
};
