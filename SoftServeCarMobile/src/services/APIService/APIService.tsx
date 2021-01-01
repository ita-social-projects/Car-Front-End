import axios from 'axios';
import "reflect-metadata";
import { injectable } from 'tsyringe';
import { environment } from '../../environments/environment';

@injectable()
class APIService {
    baseUrl: string = environment.apiUrl;

    baseHeaders = {
        headers: {
            'Context-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        responseType: 'json'
    };

    get<T>(url: string, params?: any) {
        return axios.get<T>(this.baseUrl + url, Object.assign({}, this.baseHeaders, params));
    }

    post<T>(url: string, params?: any) {
        return axios.post<T>(this.baseUrl + url, Object.assign({}, this.baseHeaders, params));
    }

    put<T>(url: string, params?: any) {
        return axios.put<T>(this.baseUrl + url, Object.assign({}, this.baseHeaders, params));
    }
    
    delete<T>(url: string, params?: any) {
        return axios.delete<T>(this.baseUrl + url, Object.assign({}, this.baseHeaders, params));
    }
}
export default APIService;