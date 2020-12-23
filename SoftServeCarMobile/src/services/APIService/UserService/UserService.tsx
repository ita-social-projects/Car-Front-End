import React from 'react';
import APIService from '../APIService';
import UserWithAvatarDTO from '../../../models/UserWithAvatarDTO';
import User from '../../../models/User';

class UserService {
    constructor(private apiService: APIService) { }
    routePrefix: string = 'user';

    getUserWithAvatarById(userId: number) {
        return this.apiService.getRequest<UserWithAvatarDTO>(this.routePrefix + '/withAvatar/' + userId);
    }
    getUserAvatarBytesById(userId: number) {
        return this.apiService.getRequest<string>(this.routePrefix + '/' + userId + '/avatar');
    }
    createUser(user: User) {
        return this.apiService.postRequest<User>(this.routePrefix, { data: user });
    }
    updateUser(user: User) {
        return this.apiService.putRequest<User>(this.routePrefix, { data: user });
    }
    deleteUser(user: User) {
        return this.apiService.deleteRequest<User>(this.routePrefix, { data: user })
    }
}
export const UserServiceContext = React.createContext(new UserService(new APIService));
export default UserService;