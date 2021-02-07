import { injectable } from 'tsyringe';
import { User } from '../../models/User';
import APIService from '../APIService';

@injectable()
class LoginService {
    constructor(private apiService: APIService) { }

    routePrefix: string = 'login';

    async loginUser(user: User) {
        return await this.apiService.post<User>(this.routePrefix, user);
    }
}
export default LoginService;
