import User from "../../models/User";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getUserUrl();

const UserService = {
    getUser: async (id: number) => APIService.get<User>(route + id),

    getAvatar: async (id: number) =>
        APIService.get<string>(route + id + "/avatar"),

    setAvatar: async (id: number, formData: FormData) =>
        APIService.put(route + id + "/avatar", formData)
};

export default UserService;
