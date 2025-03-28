import { memo, useMemo } from "react";
import { Props } from "./types";
import { useSelector } from "~/store/utils";
import Area from "~/components/Area";

export const Areas = ({ time }: Props) => {
  const events = useSelector((store) => store.events.data);
  const eventsToRender = useMemo(
    () =>
      events.filter(
        (e) => time > e.timestamp && time < e.timestamp + e.duration
      ),
    [time, events]
  );

  return eventsToRender.map((e) => <Area event={e} key={e.timestamp} />);
};

export default memo(Areas);
