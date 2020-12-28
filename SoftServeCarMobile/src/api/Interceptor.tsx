import axios, { AxiosResponse } from 'axios'
import { AuthManager } from '../components/auth/AuthManager';
import * as RootNavigation from '../components/navigation/RootNavigation';


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
        RootNavigation.navigate("Exception",{ errorMessage: error.response.status });     
        return Promise.reject(error);
    }
);