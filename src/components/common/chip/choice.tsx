import { FC, ReactChild, Reducer, useEffect, useReducer } from "react";
import { ChipSet } from ".";

const arrayFromInitValue = (value: unknown) =>
  value ? (Array.isArray(value) ? value : [value]) : [];

const reducer: Reducer<
  selectedState,
  { type: "ADD" | "DELETE"; payload: ChipsValue; meta: { multiple: boolean } }
> = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // 単一選択の場合クリア
      if (!action.meta.multiple) state.clear();
      return new Set(state.add(action.payload));
    }

    case "DELETE": {
      state.delete(action.payload);
      return new Set(state);
    }

    default: {
      return state;
    }
  }
};

type ChipsValue = string;

type selectedState = Set<ChipsValue>;

type ChipProps = {
  value: string | number;
  label: ReactChild;
  activated?: boolean;
};

type MultipleProps =
  | {
      multiple: true;
      onChangeValue?: (value: ChipsValue[] | null) => void;
      selectedValue?: Array<string | number>;
    }
  | {
      multiple?: false;
      onChangeValue?: (value: ChipsValue | null) => void;
      selectedValue?: string | number;
    };
type Props = {
  items: ChipProps[];
  scroll?: boolean;
} & MultipleProps;
export const ChoiceChips: FC<Props> = (props) => {
  const isMultiple = props.multiple || false;

  const initState = new Set<ChipsValue>(
    arrayFromInitValue(props.selectedValue)
  );
  const [values, dispatch] = useReducer(reducer, initState);

  const handlerOnChange = (value: ChipsValue) => {
    if (values.has(value)) {
      dispatch({
        type: "DELETE",
        payload: value,
        meta: { multiple: isMultiple },
      });
    } else {
      dispatch({
        type: "ADD",
        payload: value,
        meta: { multiple: isMultiple },
      });
    }
  };

  useEffect(() => {
    if (props.onChangeValue) {
      if (values.size === 0) props.onChangeValue(null);

      const arrayValues = [...values];
      if (props.multiple) props.onChangeValue(arrayValues);
      else props.onChangeValue(arrayValues[0]);
    }
  }, [values]);

  const itemsPram = props.items.map((item) => {
    const value = item.value.toString();

    return {
      value,
      label: item.label,
      activated: values.has(value),
    };
  });

  return (
    <ChipSet
      scroll={props.scroll}
      items={itemsPram}
      onSelect={handlerOnChange}
    />
  );
};
