export type Zone = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

export type Event = {
  timestamp: number;
  duration: number;
  zone: Zone;
};

export type EventsState = {
  loading: boolean;
  error: string | null;
  data: Event[];
};
