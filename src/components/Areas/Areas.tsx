import { memo, useMemo } from "react";
import { Props } from "./types";
import { useSelector } from "~/store/utils";
import * as styles from "./Areas.module.scss";

export const Areas = ({ time }: Props) => {
  const events = useSelector((store) => store.events.data);
  const eventsToRender = useMemo(
    () =>
      events.filter(
        (e) => time > e.timestamp && time < e.timestamp + e.duration
      ),
    [time, events]
  );

  return eventsToRender.map((e) => (
    <div
      className={styles.area}
      key={e.timestamp}
      style={e.zone}
      data-testid={`area-${e.timestamp}`}
    />
  ));
};

export default memo(Areas);
