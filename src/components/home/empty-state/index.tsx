import { FC } from "react";
import { classNames } from "../../../util/class-names";
import * as styles from "./styles";

export const EmptyState: FC = () => (
  <div className={styles.container}>
    <p className={classNames(styles.paragraph, styles.title)}>
      まだ編成がありません
    </p>
    <p className={classNames(styles.paragraph, styles.text)}>
      <span className={styles.prom}>編成を作成</span>{" "}
      をタップして編成を作成します
    </p>
  </div>
);
