import { css } from "@emotion/css";
import { FC, useEffect, useRef, useState } from "react";
import { classNames } from "../../../util/class-names";
import { FloatingLayout } from "../layout/fixed-layout";
import { List, ListItem } from "../list";
import * as styles from "./styles";

type Props = {
  open?: boolean;
  coordinates: { x: number; y: number };
  items: Array<{ label: string; value?: string }>;
  onSelect?: (value: string) => void;
  onClose?: () => void;
};
export const Menu: FC<Props> = ({
  open,
  coordinates,
  items,
  onSelect,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
    }
  }, [open]);

  if (!open) return null;

  const coordinatesStyle = css({
    top: Math.min(
      window.innerHeight - ((containerRect?.height ?? 0) + 8),
      coordinates.y
    ),

    left: Math.min(
      window.innerWidth - ((containerRect?.width ?? 0) + 8),
      coordinates.x
    ),
  });

  const containerClasses = classNames(styles.container, coordinatesStyle);

  const onSelectHandler = (v: string) => {
    onSelect?.(v);
    onClose?.();
  };

  return (
    <FloatingLayout>
      <div className={containerClasses} ref={containerRef}>
        <List onSelect={onSelectHandler}>
          {items.map((v) => (
            <ListItem key={v.value} label={v.label} value={v.value} />
          ))}
        </List>
      </div>
      <div className={styles.scrim} onClick={onClose} />
    </FloatingLayout>
  );
};
