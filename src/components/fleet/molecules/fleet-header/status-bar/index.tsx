import { FC } from "react";
import { IconButton } from "../../../../common/button";
import { MaterialIcon } from "../../../../common/icons";
import { container } from "./styles";

type Props = {
  startEdit: () => void;
};
export const Actions: FC<Props> = ({ startEdit }) => {
  const editFleetInfo = startEdit;

  return (
    <div className={container}>
      <IconButton icon={<MaterialIcon icon="edit" />} onClick={editFleetInfo} />
    </div>
  );
};
