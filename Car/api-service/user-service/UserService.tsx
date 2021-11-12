import User from "../../models/user/User";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Axios from "../Axios";
import { AxiosRequestConfig } from "axios";

const route = APIRoutes.getUserUrl();

const UserService = {
    getUser: async (id: number) => APIService.get<User>(route + id),

    getUserByEmail: async (email: string) => APIService.get<User>(route + "email/"+ email),

    updateUserImage: async (user: FormData, config: AxiosRequestConfig = {}) => Axios.put<FormData>(
        route + "image",
        user,
        config),

    addUserFcmtoken: async (token: FormData) => APIService.post<FormData>(route + "fcmtoken/", token),

    deleteUserFcmtoken: async (token: string) => APIService.delete(route + "fcmtoken/" + token)
};

export default UserService;
