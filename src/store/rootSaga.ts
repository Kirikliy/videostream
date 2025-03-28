import { all } from "redux-saga/effects";
import { watchEventsSagas } from "~/store/slices/events/sagas";

export default function* rootSaga() {
  yield all([watchEventsSagas()]);
}
