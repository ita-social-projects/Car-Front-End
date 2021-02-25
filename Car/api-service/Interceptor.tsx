import axios from "axios";
import ErrorAlert from "../src/components/error-alert/ErrorAlert";
import AuthManager from "../src/components/auth/AuthManager";

const Interceptor = axios.create({ timeout: 20000 });

Interceptor.interceptors.request.use(
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

    (error: any) => {
        ErrorAlert(error.message);

        return Promise.reject(error);
    }
);

Interceptor.interceptors.response.use(
    (response) => {
        return response;
    },

    function (error: { response: { status: number } }) {
        let errorCode: any = "Network error";

        if (error.response) {
            errorCode = error.response.status;
        }

        ErrorAlert(errorCode);

        return Promise.reject(error);
    }
);

export default Interceptor;
