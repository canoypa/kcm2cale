import { FC } from "react";
import { useHistory } from "react-router";
import { FloatingActionButton } from "../../common/button/floating";
import { IconAdd } from "../../common/icons";
import * as styles from "./styles";

export const CreateNewFleet: FC = () => {
  const { push } = useHistory();
  const linkToFleet = () => push("/new");

  return (
    <div className={styles.container}>
      <FloatingActionButton
        type="extended"
        icon={<IconAdd />}
        label={"編成を作成"}
        onClick={linkToFleet}
      />
    </div>
  );
};