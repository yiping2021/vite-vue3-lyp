import axiosInstance from "@/utils/request";
import { LoginParams, LoginResultMode } from "./types/userModel";
enum API {
  LOGIN_URL = "/api/user/login",
  USERINFO_URL = "/admin/acl/index/info",
  LOGINOUT_URL = "/admin/acl/index/logout",
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return axiosInstance.post<any, LoginResultMode>(API.LOGIN_URL, params);
}

/**
 * @description: getUserInfo
 */
export function getUserInfo(token: string) {
  return axiosInstance.get(API.USERINFO_URL, AxiosRe);
}
