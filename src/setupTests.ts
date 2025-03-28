import "@testing-library/jest-dom";

beforeAll(() => {
  window.HTMLMediaElement.prototype.play = jest
    .fn()
    .mockImplementation(() => Promise.resolve());
  window.HTMLMediaElement.prototype.pause = jest.fn();
});
