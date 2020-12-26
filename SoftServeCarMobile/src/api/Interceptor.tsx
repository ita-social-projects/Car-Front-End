import axios, { AxiosResponse } from 'axios'
import { AuthManager } from '../components/navigation/AuthManager';
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
        if (error.response.status === 401) {           
            RootNavigation.navigate("Exception",{ errorMessage: '401' });          
        }        
        else if (error.response.status === 500) {
            RootNavigation.navigate("Exception",{ errorMessage: '500' });
        }
        return Promise.reject(error);
    }
);