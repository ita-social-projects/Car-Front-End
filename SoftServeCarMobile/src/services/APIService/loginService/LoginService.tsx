import React from 'react';
import APIService from '../APIService';
import {User} from '../../../models/User';

class LoginService {
    constructor(private apiService: APIService) { }
    routePrefix: string = 'Login';   
   
    async loginUser(user: User) {
        return await this.apiService.postRequest<User>(this.routePrefix, { data: user });
    }   
}
export const PreferencesServiceContext = React.createContext(new LoginService(new APIService));
export default LoginService;