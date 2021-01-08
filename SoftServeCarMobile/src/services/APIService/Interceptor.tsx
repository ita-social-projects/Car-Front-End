import axios, { AxiosResponse } from 'axios'
import { AuthManager } from '../../components/auth/AuthManager';
import * as RootNavigation from '../../components/navigation/RootNavigation';


export let axiosInstance = axios.create();
 
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
        RootNavigation.navigate("Exception",{ errorMessage: errorCode });     
        return Promise.reject(error);
    }
);