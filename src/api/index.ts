import axios from "axios";
import { environment } from "../config/environment";

const apiClient = axios.create({
  baseURL: "http://api.openweathermap.org/",
});

apiClient.interceptors.request.use((config) => {
  const apiKey = environment.apiKey;

  if (apiKey) {
    config.params = {
      ...config.params,
      appid: apiKey,
    };
  } else {
    alert(
      "Please provide an API key in the .env file as instructed in the README!",
    );
  }

  return config;
});

export default {
  get(endpoint: string, params?: any) {
    return apiClient.get(endpoint, { params });
  },
};
