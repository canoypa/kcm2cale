import { IconButton } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import { FC } from "react";
import { container } from "./styles";

type Props = {
  startEdit: () => void;
};
export const Actions: FC<Props> = ({ startEdit }) => {
  const editFleetInfo = startEdit;

  return (
    <div className={container}>
      <IconButton onClick={editFleetInfo} aria-label="編成情報の編集">
        <EditOutlined />
      </IconButton>
    </div>
  );
};
