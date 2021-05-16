import { OutlinedInput, OutlinedInputProps } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { VFC } from "react";
import { useStyles } from "./styles";

type Props = OutlinedInputProps;
export const SearchBox: VFC<Props> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <OutlinedInput
      startAdornment={<Search />}
      classes={{ input: classes.input }}
      {...props}
    />
  );
};
