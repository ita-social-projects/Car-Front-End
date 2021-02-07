import axios, { AxiosResponse } from 'axios'
import { AuthManager } from '../src/activity/auth/AuthManager';
import * as RootNavigation from '../src/components/navigation/RootNavigation';


export let axiosInstance = axios.create({timeout: 4000});

axiosInstance.interceptors.request.use(
    async function (req: { headers: { Accept: string; "Content-Type": string; Authorization?: string; }; }) {
        const token = await AuthManager.getAPIToken();
        if (token) {
            req.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            };
        }
        else{
            req.headers = {
                Accept: 'application/json',
        'Content-Type': 'application/json',
            };
        }
        return req;
    },
    (error: any) => {

        return Promise.reject(error);
    })
    axiosInstance.interceptors.response.use(
    (response: AxiosResponse<JSON>) => { return response; },
    function (error: { response: { status: number; }; }) {
        let errorCode: any = 'Network error';
        if(error.response)
        {
            errorCode = error.response.status;
        }
        RootNavigation.navigate("Exception", { errorMessage: errorCode });
        return Promise.reject(error);
    }
);
