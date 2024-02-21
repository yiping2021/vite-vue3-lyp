/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginData {
  token: string;
}
/**
 * @description: Login interface return value
 */
export interface LoginResultMode {
  code: number;
  data: LoginData;
}
