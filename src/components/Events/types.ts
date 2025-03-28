import { Event } from "~/store/slices/events";

export type Props = {
  className: string;
  onClick: (item: Event) => unknown;
};
