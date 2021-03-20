import { FC } from "react";
import { useStyles } from "./styles";

type Props = {
  size?: number;
};
export const CircularProgressIndicators: FC<Props> = ({ size = 24 }) => {
  const styles = useStyles({ determinate: false });

  return (
    <svg viewBox="0 0 24 24" width={size} height={size}>
      <g className={styles.g}>
        <path d="M12,3a9,9,0,1,1,0,18a9,9,0,1,1,0-18" className={styles.path} />
      </g>
    </svg>
  );
};
