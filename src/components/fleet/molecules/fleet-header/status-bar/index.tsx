import { EditOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { FleetShareButton } from "./ShareFleet";

type Props = {
  startEdit: () => void;
};
export const Actions: FC<Props> = ({ startEdit }) => {
  const editFleetInfo = startEdit;
  // const isOwner = useIsFleetOwner();

  return (
    <Box display="flex" justifyContent="flex-end">
      {/* {isOwner && ( */}
      <IconButton onClick={editFleetInfo} aria-label="編成情報の編集">
        <EditOutlined />
      </IconButton>
      {/* )} */}
      <FleetShareButton />
    </Box>
  );
};
