import APIService from '../APIService';
import UserWithAvatarDTO from '../../../models/UserWithAvatarDTO';
import "reflect-metadata";
import User from '../../../models/User';
import { injectable } from 'tsyringe';

@injectable()
class UserService {
    constructor(private apiService: APIService) { }
    routePrefix: string = 'user';

    getUserWithAvatarById(userId: number, includeAvatar = false) {
        return this.apiService.get<UserWithAvatarDTO>(this.routePrefix + '/withAvatar/' + userId);
    }
    getUserAvatarBytesById(userId: number) {
        return this.apiService.get<string>(this.routePrefix + '/' + userId + '/avatar');
    }
    createUser(user: User) {
        return this.apiService.post<User>(this.routePrefix, { data: user });
    }
    updateUser(user: User) {
        return this.apiService.putRequest<User>(this.routePrefix, { data: user });
    }
    deleteUser(user: User) {
        return this.apiService.deleteRequest<User>(this.routePrefix, { data: user })
    }
}

export default UserService;