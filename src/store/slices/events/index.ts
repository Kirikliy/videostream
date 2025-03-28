import eventsSlice from "./slice";

export * from "./types";

export { watchEventsSagas } from "./sagas";

export const { getEventsStart } = eventsSlice.actions;

export default eventsSlice;
