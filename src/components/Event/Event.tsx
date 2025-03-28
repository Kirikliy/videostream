import { memo, useMemo } from "react";
import { ListChildComponentProps } from "react-window";
import * as styles from "./Event.module.scss";
import { formatEventTime } from "./utils";

export const Event = ({ index, style, data }: ListChildComponentProps) => {
  const { marks, onClick } = data;

  const formattedTime = useMemo(
    () => formatEventTime(marks[index].timestamp),
    [marks[index].timestamp]
  );

  return (
    <div
      className={styles.event}
      style={style}
      onClick={() => onClick(marks[index])}
    >
      {formattedTime}
    </div>
  );
};

export default memo(Event);
