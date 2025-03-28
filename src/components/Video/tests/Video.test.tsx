import { Video } from "~/components/Video/Video";
import { render, fireEvent } from "@testing-library/react";
import { createRef } from "react";

describe(`тестирование компонента ${Video.name}`, () => {
  const mockRef = createRef<HTMLVideoElement>();
  const props = {
    ref: mockRef,
    src: "test-video.mp4",
  };

  it("вызывает событие play при нажатии, когда видео на паузе", () => {
    const { getByTestId } = render(<Video {...props} />);
    const videoElement = getByTestId("video");

    const spyPlay = jest.spyOn(mockRef.current as HTMLVideoElement, "play");
    const spyStop = jest.spyOn(mockRef.current as HTMLVideoElement, "pause");

    fireEvent.click(videoElement);

    expect(spyPlay).toHaveBeenCalledTimes(1);
    expect(spyStop).not.toHaveBeenCalled();
  });
});
