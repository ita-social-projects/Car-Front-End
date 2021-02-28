import axios from "axios";
import ErrorAlert from "../src/components/error-alert/ErrorAlert";
import AuthManager from "../src/components/auth/AuthManager";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
    async (req: any) => {
        const token = await AuthManager.getAPIToken();

        if (token) {
            req.headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            };
        } else {
            req.headers = {
                Accept: "application/json",
                "Content-Type": "application/json"
            };
        }

        return req;
    },

    async (error: any) => {
        ErrorAlert();

        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    async (response) => {
        return response;
    },

    async (error: { response: { status: number } }) => {
        let errorCode: any = "Network error";

        if (error.response) {
            errorCode = error.response.status;
        }

        ErrorAlert();

        return Promise.reject(error);
    }
);

export default Axios;
