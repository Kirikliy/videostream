import { memo } from "react";
import { Props } from "./types";
import * as styles from "./Video.module.scss";

export const Video = ({ ref, src }: Props) => {
  const handleClick = () => {
    if (ref.current) {
      ref.current.paused ? ref.current.play() : ref.current.pause();
    }
  };

  return (
    <video
      onClick={handleClick}
      className={styles.video}
      width="100%"
      height="100%"
      ref={ref}
      data-testid="video"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default memo(Video);
