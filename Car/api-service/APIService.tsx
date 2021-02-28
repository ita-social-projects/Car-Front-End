import Axios from "./Axios";

const baseHeaders = {
    headers: {
        "Context-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
};

const APIService = {
    get<T>(url: string, params?: any) {
        return Axios.get<T>(url, Object.assign({}, baseHeaders, params));
    },

    post<T>(url: string, params?: any) {
        return Axios.post<T>(url, Object.assign({}, baseHeaders, params));
    },

    put<T>(url: string, params?: any) {
        return Axios.put<T>(url, Object.assign({}, baseHeaders, params));
    },

    delete<T>(url: string, params?: any) {
        return Axios.delete<T>(url, Object.assign({}, baseHeaders, params));
    }
};

export default APIService;
