import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit";
import errorHandlerMiddleware from "./middlewares/errorHandler";
import createSagaMiddleware from "redux-saga";
import eventsSlice from "~/store/slices/events";
import rootSaga from "~/store/rootSaga";

const listenerMiddleware = createListenerMiddleware();

const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers({
  events: eventsSlice.reducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat([
      sagaMiddleware,
      errorHandlerMiddleware,
      listenerMiddleware.middleware,
    ]),
});

sagaMiddleware.run(rootSaga);

export default store;
