import { FC } from "react";
import { IconButton } from "../../../../common/button";
import { IconCreate } from "../../../../common/icons";
import { container } from "./styles";

type Props = {
  startEdit: () => void;
};
export const Actions: FC<Props> = ({ startEdit }) => {
  const editFleetInfo = startEdit;

  return (
    <div className={container}>
      <IconButton icon={<IconCreate />} onClick={editFleetInfo} />
    </div>
  );
};
