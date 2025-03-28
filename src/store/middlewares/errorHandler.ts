import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import type { AppDispatch } from "~/store/types";

export const errorHandlerMiddleware: Middleware =
  ({ dispatch }: MiddlewareAPI<AppDispatch>) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      if (isAxiosError(action.payload) && action.payload.response) {
        const { status } = action.payload.response;

        if (Number.isInteger(status)) {
          console.error(action.payload);

          return next(action);
        }
      }

      console.error(action.payload);
    }

    return next(action);
  };

export default errorHandlerMiddleware;
