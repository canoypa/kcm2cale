import { Box, IconButton } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import { FC } from "react";
import { useIsFleetOwner } from "../../../../../hooks/organize/fleet";

type Props = {
  startEdit: () => void;
};
export const Actions: FC<Props> = ({ startEdit }) => {
  const editFleetInfo = startEdit;
  const isOwner = useIsFleetOwner();

  return (
    <Box display="flex" justifyContent="flex-end">
      {isOwner && (
        <IconButton onClick={editFleetInfo} aria-label="編成情報の編集">
          <EditOutlined />
        </IconButton>
      )}
    </Box>
  );
};
