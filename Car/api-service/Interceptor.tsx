import axios from "axios";
import { Alert } from "react-native";
import AuthManager from "../src/components/auth/AuthManager";
import RNRestart from "react-native-restart";

const Interceptor = axios.create({ timeout: 20000 });
const AlertWindow = (message: string) => (Alert.alert("Error", message, [
    {
        text: "Restart",
        onPress: () => {
            RNRestart.Restart();
        }
    }
]));

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
    (response) => {
        return response;
    },
    function (error: { response: { status: number } }) {
        let errorCode: any = "Network error";
        if (error.response) {
            errorCode = error.response.status;
        }
        AlertWindow(errorCode);
        return Promise.reject(error);
    }
);

export default Interceptor;
