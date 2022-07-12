import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import storage from "../utils/storage";
const Axios = axios.create({
  baseURL: "/",
  timeout: 60000,
});
// 请求拦截
Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // => 如果是GET请求...
    if (config.method && /get/i.test(config.method)) {
      config.params = {
        ...config.params,
      };
    }
    // => 配置请求头
    const token = storage.getLocal("token");
    config.headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data;
    switch (code) {
      case 0:
        return response.data;
      default:
        console.log(msg);
        return response.data;
    }
  },
  (error: any) => {
    console.log(error);
    /timeout/.test(error.message) && console.log("请求超时，请检查网络");
    return Promise.reject(error);
  }
);

export default Axios;
