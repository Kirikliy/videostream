import { put } from "redux-saga/effects";
import eventsSlice, { Event } from "~/store/slices/events";
import { getEventsSaga } from "~/store/slices/events/sagas";

describe(`тестирование саги ${getEventsSaga.name}`, () => {
  it("полученные данные должны отправляться в стор в отсортированном относительно timestamp порядке (по возр.)", () => {
    const unsortedEvents = [
      { timestamp: 300 },
      { timestamp: 100 },
      { timestamp: 200 },
    ] as Event[];

    const expectedSortedEvents = [
      { timestamp: 100 },
      { timestamp: 200 },
      { timestamp: 300 },
    ] as Event[];

    const generator = getEventsSaga();

    generator.next();

    const nextStep = generator.next({ data: unsortedEvents });

    expect(nextStep.value).toEqual(
      put(eventsSlice.actions.getEventsSuccess(expectedSortedEvents))
    );
  });
});
