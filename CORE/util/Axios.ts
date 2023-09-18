import axios, { AxiosError, AxiosResponse } from "axios";
import Endpoints from "CORE/constants/Endpoints";
import { storage } from "CORE/util/storage";
import Toast from "react-native-toast-message";

const Axios = axios.create({
  baseURL: Endpoints.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Axios.interceptors.request.use(
  async (config) => {
    const token = storage.getString("auth-token");
    const lang = storage.getString("lang");
    const MSISDN = __DEV__ && storage.getString("msisdn");
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    if (lang) {
      config.headers["X-LANGUAGE"] = lang;
    } else {
      config.headers["X-LANGUAGE"] = "en";
    }
    if (__DEV__) {
      config.headers["x-sub-msisdn"] = MSISDN || "963500341003";
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// create inctance of axios with error handling
Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // if post request seccessfuly show toast
    if (response.config.method === "post") {
      console.log(response.data);
      Toast.show({
        type: "success",
        text1: response.data?.message,
      });
    }
    return response;
  },
  (error: AxiosError<{ error: { title: string; message: string } }>) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        storage.delete("auth-token");
        Toast.show({
          type: "error",
          text1: "Failed to authenticate",
          text2: "Please login again",
        });
      } else if (status === 409 || status === 422 || status === 500) {
        Toast.show({
          type: "error",
          text1: error.response.data?.error?.title,
          text2: error.response.data?.error?.message,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Something went wrong",
          text2: "Please try again later",
        });
      }
    }
    return Promise.reject(error);
  }
);

export default Axios;
