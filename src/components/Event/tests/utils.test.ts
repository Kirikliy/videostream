import { formatEventTime } from "~/components/Event/utils";

describe(`тестирование метода ${formatEventTime.name}`, () => {
  test("метод возвращает корректное значение миллисекунд", () => {
    expect(formatEventTime(0.160356073346696)).toEqual("00:00:160");
  });

  test("метод возвращает корректное значение секунд", () => {
    expect(formatEventTime(9.160356073346696)).toEqual("00:09:160");
  });

  test("метод возвращает корректное значение минут", () => {
    expect(formatEventTime(69.160356073346696)).toEqual("01:09:160");
  });
});
