import { memo, useMemo } from "react";
import { useSelector } from "~/store/utils";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Props } from "./types";
import Event from "~/components/Event";

export const Events = ({ onClick }: Props) => {
  const { error, loading, data } = useSelector((store) => store.events);

  const itemData = useMemo(() => ({ onClick, marks: data }), [data, onClick]);

  if (error) return <>Ошибка загрузки.</>;

  if (loading) return <>Загрузка...</>;

  if (data.length === 0) return <>Список событий пуст</>;

  return (
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
  );
};

export default memo(Events);
