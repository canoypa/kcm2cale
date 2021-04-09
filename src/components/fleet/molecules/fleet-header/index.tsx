import { FC, useState } from "react";
import { Editing } from "./editing";
import { Info } from "./info";
import { Actions } from "./status-bar";
import * as styles from "./styles";

export const FleetHeader: FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => setIsEditing(true);
  const endEdit = () => setIsEditing(false);

  return (
    <>
      <div className={styles.container}>
        <Actions startEdit={startEdit} />
        <Info />
      </div>

      <Editing open={isEditing} onEnd={endEdit} />
    </>
  );
};
