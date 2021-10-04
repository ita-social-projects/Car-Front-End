import axios, { AxiosError } from "axios";
import AuthManager from "../src/components/auth/AuthManager";
import RNRestart from "react-native-restart";
import { StatusCodes } from "../src/constants/Constants";
import appInsights from "../src/components/telemetry/AppInsights";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
    async (req: any) => {
        const token = await AuthManager.getAPIToken();

        if (token) {
            req.headers.Authorization = "Bearer " + token;
        }

        return req;
    },

    async (error: any) => {

        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    async (response) => {
        return response;
    },

    async (error?: AxiosError) => {
        if (!axios.isCancel(error)) {
            appInsights.trackException({ exception: error });
            if (axios.isAxiosError(error)) {
                error.response?.status === StatusCodes.UNAUTHORIZED &&
                    (async () => { await AuthManager.signOutAsync(); })().then(() => {

                        RNRestart.Restart();
                    });
            }
        }

        return Promise.reject(error);
    }
);

export default Axios;
