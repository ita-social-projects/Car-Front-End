import axios, { AxiosError, AxiosResponse } from 'axios'
import { AuthManager } from '../components/auth/AuthManager';
import * as RootNavigation from '../components/navigation/RootNavigation';
import SomeComponent from "../api/NotificationService"

export let axiosInstance = axios.create({ timeout: 4000 });

axiosInstance.interceptors.request.use(
    async function (req) {
        const token = await AuthManager.getAPIToken();
        if (token) {
            req.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            };
        }
        else {
            req.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };
        }
        return req;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse<JSON>) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response === undefined) {
            SomeComponent(
                "There isn't server response",
                'error');
        }
        else if (error.response?.status == 401 ||
            error.response?.status == 500) {
            RootNavigation.navigate("Exception",
                {
                    errorMessage: error.response.status
                }
            );
        }
        else {
            if (error.response?.data.StatusCode === undefined) {
                SomeComponent(
                    "Status " + error.response?.status + ": " + error.response?.data.title,
                    'error');
            } else {
                SomeComponent(
                    "Status " + error.response?.data.StatusCode + ": " + error.response?.data.Message,
                    error.response?.data.Severity == 1 ? 'error' : 'warning');
            }
        }
        return Promise.reject(error);
    }
);