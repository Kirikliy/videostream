import { memo, useMemo } from "react";
import { useSelector } from "~/store/utils";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Props } from "./types";
import Event from "~/components/Event";
import * as styles from "./Events.module.scss";
import cn from "classnames";

export const Events = ({ className, onClick }: Props) => {
  const { error, loading, data } = useSelector((store) => store.events);

  const itemData = useMemo(() => ({ onClick, marks: data }), [data, onClick]);

  if (error) return <div>Ошибка загрузки.</div>;

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={cn(className, styles.events)} data-testid="events">
      <AutoSizer>
        {({ height, width }) => (
          <List
            itemData={itemData}
            itemCount={data.length}
            itemSize={30}
            height={height}
            width={width}
          >
            {Event}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default memo(Events);
