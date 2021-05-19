import { FC, useState } from "react";
import { Editing } from "./editing";
import { Info } from "./info";
import { Actions } from "./status-bar";
import { useStyles } from "./styles";

export const FleetHeader: FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => setIsEditing(true);
  const endEdit = () => setIsEditing(false);

  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Actions startEdit={startEdit} />
        <Info />
      </div>

      <Editing open={isEditing} onEnd={endEdit} />
    </>
  );
};
