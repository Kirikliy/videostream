import { RefObject } from "react";

export type Props = {
  ref: RefObject<HTMLVideoElement | null>;
  src: string | null;
};
