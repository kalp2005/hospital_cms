import axios from "axios";

import { env } from "./env";

export const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});