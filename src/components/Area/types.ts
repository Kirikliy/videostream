import { Event } from "~/store/slices/events";
import { Ratios } from "~/types";

export type Props = {
  event: Event;
  ratios: Ratios;
};
