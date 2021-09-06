import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { Search } from "@mui/icons-material";
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
