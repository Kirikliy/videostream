import { memo, useMemo } from "react";
import { Props } from "./types";
import * as styles from "./Area.module.scss";

export const Areas = ({ event, ratios }: Props) => {
  const style = useMemo(() => {
    const { left, top, width, height } = event.zone;

    return {
      left: left * ratios.width,
      width: width * ratios.width,
      top: top * ratios.height,
      height: height * ratios.height,
    };
  }, [ratios, event.zone]);

  return (
    <div
      className={styles.area}
      style={style}
      data-testid={`area-${event.timestamp}`}
    />
  );
};

export default memo(Areas);
