/**
 * Преобразует числовое значение времени в формат MM:SS:sss
 * @param {number} time - время в секундах
 * @returns {string}
 */
export const formatEventTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const remainingSeconds = Math.floor(time % 60);
  const milliseconds = Math.round((time % 1) * 1000);

  const pad = (num: number, size: number) => num.toString().padStart(size, "0");

  return `${pad(minutes, 2)}:${pad(remainingSeconds, 2)}:${pad(milliseconds, 3)}`;
};
