import { InputAdornment, TextField, TextFieldProps } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { VFC } from "react";

type Props = TextFieldProps;
export const SearchBox: VFC<Props> = ({ ...props }) => {
  return (
    <TextField
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
