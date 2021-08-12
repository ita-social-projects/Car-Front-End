import Axios from "./Axios";

const baseHeaders = {
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
};

const APIService = {
    get<T> (url: string, params?: any) {
        return Axios.get<T>(url, Object.assign({}, baseHeaders, params));
    },

    post<T> (url: string, data?: any, params?: any) {
        return Axios.post<T>(url, data, Object.assign({}, baseHeaders, params));
    },

    put<T> (url: string, data?: any, params?: any) {
        return Axios.put<T>(url, data, Object.assign({}, baseHeaders, params));
    },

    delete (url: string, params?: any) {
        return Axios.delete(url, Object.assign({}, baseHeaders, params));
    }
};

export default APIService;
