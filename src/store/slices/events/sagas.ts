import { takeLatest, call, put } from "redux-saga/effects";
import slice from "./slice";
import api from "~/store/api";
import { ENDPOINTS } from "~/constants";
import { Event } from "./types";

const { getEventsStart, getEventsSuccess, getEventsFailure } = slice.actions;

export function* getEventsSaga() {
  try {
    const { data } = yield call(api.get, ENDPOINTS.getEvents);

    yield put(
      getEventsSuccess(
        (data as Event[]).toSorted((a, b) => a.timestamp - b.timestamp)
      )
    );
  } catch (error) {
    yield put(getEventsFailure(error.message));
  }
}

export function* watchEventsSagas() {
  yield takeLatest(getEventsStart.type, getEventsSaga);
}
