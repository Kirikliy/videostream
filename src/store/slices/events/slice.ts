import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventsState, Event } from "./types";

export const timeSheetsSlice = createSlice({
  name: "events",
  initialState: {
    data: [],
    loading: false,
    error: null,
  } as EventsState,
  reducers: {
    getEventsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getEventsSuccess(state, action: PayloadAction<Event[]>) {
      state.data = action.payload;
      state.loading = false;
    },
    getEventsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default timeSheetsSlice;
