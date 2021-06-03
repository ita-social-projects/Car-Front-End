import axios from "axios";
import ErrorAlert from "../src/components/error-alert/ErrorAlert";
import AuthManager from "../src/components/auth/AuthManager";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
    async (req: any) => {
        const token = await AuthManager.getAPIToken();

        if (token) {
            req.headers.Authorization = "Bearer " + token;
        }

        if (req.method === "put") {
            console.log(req.data._parts);
        }

        return req;
    },

    async (error: any) => {
        var message = error.message || error.response.data;

        ErrorAlert(message);

        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    async (response) => {
        return response;
    },

    async (error: any) => {
        var message = error.message || error.response.data;

        ErrorAlert(message);

        return Promise.reject(error);
    }
);

export default Axios;
