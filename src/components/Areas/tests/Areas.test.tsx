import { Areas } from "~/components/Areas/Areas";
import { render } from "@testing-library/react";
import { useSelector } from "~/store/utils";

jest.mock("~/store/utils", () => {
  const EVENTS = [
    {
      timestamp: 6.160356073346696,
      duration: 0.8361136523432808,
    },
    {
      timestamp: 570.9478910336351,
      duration: 1.387859163381885,
    },
  ];

  const store = {
    events: {
      data: EVENTS,
    },
  };

  return {
    useSelector: (callback) => callback(store),
  };
});

describe(`тестирование компонента ${Areas.name}`, () => {
  it("при достижении временной метки отображаются только соответствующие события", async () => {
    const { getByTestId, queryByTestId, rerender } = render(<Areas time={0} />);

    const events = useSelector((store) => store.events.data);
    const firstEvent = events[0];
    const secondEvent = events[1];

    expect(
      queryByTestId(`area-${firstEvent.timestamp}`)
    ).not.toBeInTheDocument();

    expect(
      queryByTestId(`area-${secondEvent.timestamp}`)
    ).not.toBeInTheDocument();

    rerender(<Areas time={firstEvent.timestamp + firstEvent.duration / 2} />);

    expect(queryByTestId(`area-${firstEvent.timestamp}`)).toBeInTheDocument();

    expect(
      queryByTestId(`area-${secondEvent.timestamp}`)
    ).not.toBeInTheDocument();

    rerender(<Areas time={secondEvent.timestamp + secondEvent.duration / 2} />);

    expect(
      queryByTestId(`area-${firstEvent.timestamp}`)
    ).not.toBeInTheDocument();

    expect(queryByTestId(`area-${secondEvent.timestamp}`)).toBeInTheDocument();
  });
});
