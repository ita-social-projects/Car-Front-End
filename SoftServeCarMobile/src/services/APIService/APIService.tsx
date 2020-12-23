import axios, { AxiosRequestConfig } from 'axios';
import { environment } from '../../environments/environment';

class APIService {
    baseUrl: string = environment.apiUrl;

    getRequest<T>(url: string, config?: AxiosRequestConfig) {
        return axios.get<T>(this.baseUrl + url, config);
    }
    postRequest<T>(url: string, config?: AxiosRequestConfig) {
        return axios.post<T>(this.baseUrl + url, config);
    }
    putRequest<T>(url: string, config?: AxiosRequestConfig) {
        return axios.put<T>(this.baseUrl + url, config);
    }
    deleteRequest<T>(url: string, config?: AxiosRequestConfig) {
        return axios.delete<T>(this.baseUrl + url, config);
    }
}
export default APIService;