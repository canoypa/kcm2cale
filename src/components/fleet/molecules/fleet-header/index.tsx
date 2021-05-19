import { Box } from "@material-ui/core";
import { FC, useState } from "react";
import { Editing } from "./editing";
import { Info } from "./info";
import { Actions } from "./status-bar";

export const FleetHeader: FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => setIsEditing(true);
  const endEdit = () => setIsEditing(false);

  return (
    <>
      <Box padding={2}>
        <Actions startEdit={startEdit} />
        <Info />
      </Box>

      <Editing open={isEditing} onEnd={endEdit} />
    </>
  );
};
