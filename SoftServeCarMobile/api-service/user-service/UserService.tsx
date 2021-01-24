import APIService from '../APIService';
import "reflect-metadata";
import {User} from '../../models/User';
import { injectable } from 'tsyringe';

@injectable()
class UserService {
    constructor(private apiService: APIService) { }

    routePrefix: string = 'user';

    getUser(userId: number) {
        return this.apiService.get<User>(this.routePrefix + '/withAvatar/' + userId);
    }

    getAvatar(userId: number) {
        return this.apiService.get<string>(this.routePrefix + '/' + userId + '/avatar');
    }

    create(user: User) {
        return this.apiService.post<User>(this.routePrefix, user);
    }

    update(user: User) {
        return this.apiService.put<User>(this.routePrefix, user);
    }

    delete(user: User) {
        return this.apiService.delete<User>(this.routePrefix, user)
    }
}

export default UserService;
