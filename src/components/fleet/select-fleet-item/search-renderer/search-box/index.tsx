import {
  FormControl,
  OutlinedInput as MuiOutlinedInput,
} from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import { Search } from "@material-ui/icons";
import { FC, KeyboardEventHandler } from "react";

const Input = withStyles({
  root: {
    borderRadius: 24,
  },

  input: {
    padding: 0,
    paddingLeft: 8,
    height: 48,
  },
})(MuiOutlinedInput);

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
    <FormControl variant="outlined" fullWidth>
      <Input startAdornment={<Search />} onKeyDown={handlerSubmit} />
    </FormControl>
  );
};
