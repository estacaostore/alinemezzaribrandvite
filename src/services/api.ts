import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_VTEX_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-VTEX-API-AppToken": `${import.meta.env.VITE_API_VTEX_APPTOKEN}`,
    "X-VTEX-API-AppKey": `${import.meta.env.VITE_API_VTEX_APPKEY}`,
  },
});
