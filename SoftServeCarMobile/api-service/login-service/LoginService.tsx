import React from 'react';
import APIService from '../APIService';
import {User} from '../../models/User';
import { injectable } from 'tsyringe';

@injectable()
class LoginService {
    constructor(private apiService: APIService) { }
    routePrefix: string = 'login';

    async loginUser(user: User) {
        return await this.apiService.post<User>(this.routePrefix, { data: user });
    }
}
export default LoginService;
