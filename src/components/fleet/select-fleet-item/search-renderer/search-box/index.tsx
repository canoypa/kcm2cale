import { InputAdornment, OutlinedInput } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { FC, KeyboardEventHandler } from "react";

type Props = {
  onSubmit: (value: string) => void;
};
export const SearchBox: FC<Props> = ({ onSubmit }) => {
  const handlerSubmit: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit(event.currentTarget?.value ?? "");
    }
  };

  return (
    <OutlinedInput
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      onKeyDown={handlerSubmit}
      sx={{
        borderRadius: 24,
        input: { p: 0, height: 48 },
      }}
    />
  );
};
