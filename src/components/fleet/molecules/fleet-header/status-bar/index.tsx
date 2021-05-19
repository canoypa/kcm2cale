import { IconButton } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import { FC } from "react";
import { useStyles } from "./styles";

type Props = {
  startEdit: () => void;
};
export const Actions: FC<Props> = ({ startEdit }) => {
  const editFleetInfo = startEdit;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <IconButton onClick={editFleetInfo} aria-label="編成情報の編集">
        <EditOutlined />
      </IconButton>
    </div>
  );
};
