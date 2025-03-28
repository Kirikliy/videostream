import { ToggleButton } from "~/components/ToggleButton/ToggleButton";
import { render, fireEvent } from "@testing-library/react";

describe(`тестирование компонента ${ToggleButton.name}`, () => {
  it("при клике вызывает onClick колбэк", () => {
    const mockOnClick = jest.fn();

    const { getByTestId } = render(
      <ToggleButton className="" active onClick={mockOnClick} />
    );

    fireEvent.click(getByTestId("toggle-button"));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
