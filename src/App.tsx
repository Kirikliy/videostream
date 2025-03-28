import { useCallback, useEffect, useRef, useState } from "react";
import Video from "./components/Video";
import { useDispatch } from "~/store/utils";
import { getEventsStart, Event } from "~/store/slices/events";
import Events from "~/components/Events";
import * as styles from "./App.module.scss";
import Areas from "~/components/Areas";
import ToggleButton from "~/components/ToggleButton";
import { CONFIG } from "~/constants";

export const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const [showEvents, setShowEvents] = useState(true);

  useEffect(() => {
    /**
     * Тут для оптимизации по хорошему еще throttle добавить. Но я не знаю, что это за события
     * и какая нужна чувствительность, так что оставил как есть.
     */
    const callback = () => setTime(videoRef.current?.currentTime ?? 0);

    videoRef.current?.addEventListener("timeupdate", callback);

    return () => {
      videoRef.current?.removeEventListener("timeupdate", callback);
    };
  }, []);

  useEffect(() => {
    dispatch(getEventsStart());
  }, []);

  const handleClick = useCallback((item: Event) => {
    if (videoRef.current) {
      videoRef.current.currentTime = item.timestamp;
    }
  }, []);

  const handleToggle = useCallback(() => {
    setShowEvents((show) => !show);
  }, []);

  return (
    <main className={styles.main}>
      <Video ref={videoRef} src={CONFIG.videoUrl} />
      <Areas time={time} />
      <ToggleButton
        className={styles.toggleButton}
        active={!showEvents}
        onClick={handleToggle}
      />
      {showEvents && (
        <div className={styles.events} data-testid="events">
          <Events className={styles.events} onClick={handleClick} />
        </div>
      )}
    </main>
  );
};

export default App;
