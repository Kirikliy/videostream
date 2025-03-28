import CONFIG from "~/constants/config";

/**
 * Включает воркер. Необходимо выполнять до запуска приложения
 * @returns {Promise}
 */
export default async (): Promise<unknown> => {
  if (process.env.NODE_ENV === "production" || !CONFIG.useMockData) {
    return;
  }

  const { worker } = await import("./browser");

  return worker.start();
};
