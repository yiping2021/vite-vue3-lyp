import axios from "axios";
import { ElMessage } from "element-plus";

const axiosInstance = axios.create({
  baseURL: "",
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  console.log(config, "config");

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    let msg = null;
    switch (err.response.status) {
      case 401:
        msg = "token过期";
        break;
      case 403:
        msg = "无权访问";
        break;
      case 404:
        msg = "请求地址错误";
        break;
      case 500:
        msg = "服务器出现问题";
        break;
      default:
        msg = "无网络";
    }
    ElMessage({
      message: msg,
      type: "error",
    });
    Promise.reject(err);
  },
);

export default axiosInstance;
