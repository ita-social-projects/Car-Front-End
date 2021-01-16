import "reflect-metadata";
import {injectable} from 'tsyringe';
import {routes} from '../environment';
import {axiosInstance} from "./Interceptor";

@injectable()
class APIService {
    baseUrl: string = routes.apiUrl;
    baseHeaders = {
        headers: {
            'Context-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        responseType: 'json'
    };

    get<T>(url: string, params?: any) {
        return axiosInstance.get<T>(this.baseUrl + url, Object.assign({}, this.baseHeaders, params));
    }

    post<T>(url: string, params?: any) {
        return axiosInstance.post<T>(this.baseUrl + url, Object.assign({}, this.baseHeaders, params.data));
    }

    put<T>(url: string, params?: any) {
        return axiosInstance.put<T>(this.baseUrl + url, Object.assign({}, this.baseHeaders, params.data));
    }

    delete<T>(url: string, params?: any) {
        return axiosInstance.delete<T>(this.baseUrl + url, Object.assign({}, this.baseHeaders, params));
    }
}

export default APIService;
