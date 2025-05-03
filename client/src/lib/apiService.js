import { axiosInstance } from "../config/http";
import { API_BASE_PATH } from "../config/constants";

export const getPersonalInfo = (params, controller) => {
  return axiosInstance.post(`${API_BASE_PATH}/getpersonalinfo`, params, {
    signal: controller?.signal,
  });
};
