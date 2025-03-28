import { Event } from "~/store/slices/events";

export type Props = {
  onClick: (item: Event) => unknown;
};
