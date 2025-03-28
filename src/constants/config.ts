const CONFIG = {
  useMockData: process.env.USE_MOCK_DATA === "on",
  videoUrl: process.env.VIDEO_URL ?? null,
};

export default CONFIG;
