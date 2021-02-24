import Interceptor from "./Interceptor";

const baseHeaders = {
    headers: {
        "Context-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
};

const APIService = {
    get<T>(url: string, params?: any) {
        return Interceptor.get<T>(url, Object.assign({}, baseHeaders, params));
    },

    post<T>(url: string, params?: any) {
        return Interceptor.post<T>(url, Object.assign({}, baseHeaders, params));
    },

    put<T>(url: string, params?: any) {
        return Interceptor.put<T>(url, Object.assign({}, baseHeaders, params));
    },

    delete<T>(url: string, params?: any) {
        return Interceptor.delete<T>(
            url,
            Object.assign({}, baseHeaders, params)
        );
    }
};

export default APIService;
