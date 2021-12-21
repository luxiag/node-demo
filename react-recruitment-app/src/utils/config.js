// 本地测试API
const devBaseURL = "/api";
const proBaseURL = "";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 8000;
