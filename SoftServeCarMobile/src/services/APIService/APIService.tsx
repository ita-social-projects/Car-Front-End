import { AxiosRequestConfig } from 'axios';
import { environment } from '../../environments/environment';
import { axiosInstance } from "./Interceptor";


class APIService {
    baseUrl: string = environment.apiUrl;    

    getRequest<T>(url: string, config?: AxiosRequestConfig) {
        return axiosInstance.get<T>(this.baseUrl + url, config);
    }
    postRequest<T>(url: string, config?: AxiosRequestConfig) {
        return axiosInstance.post<T>(this.baseUrl + url, config?.data, config);
    }
    putRequest<T>(url: string, config?: AxiosRequestConfig) {
        return axiosInstance.put<T>(this.baseUrl + url, config?.data,config);
    }
    deleteRequest<T>(url: string, config?: AxiosRequestConfig) {
        return axiosInstance.delete<T>(this.baseUrl + url, config);
    }
}
export default APIService;