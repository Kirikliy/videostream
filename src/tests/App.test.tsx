import { App } from "../App";
import { render, fireEvent } from "@testing-library/react";

jest.mock("~/store/utils", () => {
  const store = {
    events: {
      data: [],
      loading: false,
      error: null,
    },
  };

  return {
    useDispatch: () => () => undefined,
    useSelector: (callback) => callback(store),
  };
});

describe(`тестирование компонента ${App.name}`, () => {
  it("при клике по тугл кнопке корректно скрывается и отображается список событий", () => {
    const { getByTestId, queryByTestId } = render(<App />);

    const button = getByTestId("toggle-button");

    expect(getByTestId("events")).toBeInTheDocument();

    fireEvent.click(button);

    expect(queryByTestId("events")).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(getByTestId("events")).toBeInTheDocument();
  });
});
