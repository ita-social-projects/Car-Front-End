import "reflect-metadata";
import { injectable } from "tsyringe";
import User from "../../models/User";
import APIService from "../APIService";
import EnvironmentRoutes from "../EnvironmentRoutes";

@injectable()
class UserService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "users";

    getUser(id: number) {
        return this.apiService.get<User>(this.routePrefix + "/" + id);
    }

    getAvatar(id: number) {
        return this.apiService.get<string>(
            this.routePrefix + "/" + id + "/avatar"
        );
    }

    setAvatar(id: number, formData: FormData) {
        return fetch(
            EnvironmentRoutes.apiUrl + this.routePrefix + "/" + id + "/avatar",
            {
                method: "PUT",
                headers: { "Content-Type": "multipart/form-data" },
                body: formData
            }
        );
    }

    create(user: User) {
        return this.apiService.post<User>(this.routePrefix, user);
    }

    update(user: User) {
        return this.apiService.put<User>(this.routePrefix, user);
    }

    delete(user: User) {
        return this.apiService.delete<User>(this.routePrefix, user);
    }
}

export default UserService;
