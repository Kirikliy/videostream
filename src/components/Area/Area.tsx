import { memo } from "react";
import { Props } from "./types";
import * as styles from "./Area.module.scss";

export const Areas = ({ event }: Props) => {
  return (
    <div
      className={styles.area}
      style={event.zone}
      data-testid={`area-${event.timestamp}`}
    />
  );
};

export default memo(Areas);
