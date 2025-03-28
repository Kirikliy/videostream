import { http, HttpResponse, delay } from "msw";
import { setupWorker } from "msw/browser";
import { ENDPOINTS } from "~/constants/index";
import { TIME_SHEETS } from "./data";

export const handlers = [
  http.get(ENDPOINTS.getEvents, async () => {
    await delay(400);

    return HttpResponse.json(TIME_SHEETS);
  }),
];

export const worker = setupWorker(...handlers);
