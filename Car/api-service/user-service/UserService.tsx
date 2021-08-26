import User from "../../models/user/User";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Axios from "../Axios";
import { AxiosRequestConfig } from "axios";

const route = APIRoutes.getUserUrl();

const UserService = {
    getUser: async (id: number) => APIService.get<User>(route + id),

    updateUserImage: async (user: FormData, config: AxiosRequestConfig = {}) => Axios.put<FormData>(
        route + "image",
        user,
        config),

    updateUserFcmtoken: async (user: FormData) => Axios.put<FormData>(route + "fcmtoken", user)
};

export default UserService;
