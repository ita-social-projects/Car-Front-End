import axios, { AxiosRequestConfig } from 'axios';
import "reflect-metadata";
import { injectable } from 'tsyringe';
import { environment } from '../../environments/environment';

@injectable()
class APIService {
    baseUrl: string = environment.apiUrl;

    get<T>(url: string, config?: AxiosRequestConfig) {
        return axios.get<T>(this.baseUrl + url, config);
    }

    post<T>(url: string, config?: AxiosRequestConfig) {
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