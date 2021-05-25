import ErrorAlert from "../src/components/error-alert/ErrorAlert";
import Axios from "./Axios";

const baseHeaders = {
    headers: {
        "Context-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
};

const noResponseAlert = (err: any) => {
    if (err.response === undefined) {
        ErrorAlert("No response from server");
    }
};

const APIService = {
    get<T> (url: string, params?: any) {
        return Axios.get<T>(url, Object.assign({}, baseHeaders, params))
            .catch(err => noResponseAlert(err));
    },

    post<T> (url: string, params?: any) {
        return Axios.post<T>(url, Object.assign({}, baseHeaders, params))
            .catch(err => noResponseAlert(err));
    },

    put<T> (url: string, params?: any) {
        return Axios.put<T>(url, Object.assign({}, baseHeaders, params))
            .catch(err => noResponseAlert(err));
    },

    delete (url: string, params?: any) {
        return Axios.delete(url, Object.assign({}, baseHeaders, params))
            .catch(err => noResponseAlert(err));
    }
};

export default APIService;
