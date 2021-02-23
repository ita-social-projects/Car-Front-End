import axios, { AxiosResponse } from "axios";
import AuthManager from "../src/activity/auth/AuthManager";
import * as navigation from "../src/components/navigation/Navigation";

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
        return Promise.reject(error);
    }
);

Interceptor.interceptors.response.use(
    (response: AxiosResponse<JSON>) => {
        return response;
    },
    function (error: { response: { status: number } }) {
        let errorCode: any = "Network error";
        if (error.response) {
            errorCode = error.response.status;
        }
        navigation.navigate("Exception", { errorMessage: errorCode });
        return Promise.reject(error);
    }
);

export default Interceptor;
