import User from "../../models/user/User";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Axios from "../Axios";
import { AxiosRequestConfig } from "axios";
import UserPhone from "../../models/user/UserPhone";

const route = APIRoutes.getUserUrl();

const UserService = {
    getUser: async (id: number) => APIService.get<User>(route + id),

    getAllUsers: async () => APIService.get<User[]>(route + "all-users/"),

    updateUserImage: async (user: FormData, config: AxiosRequestConfig = {}) => Axios.put<FormData>(
        route + "image",
        user,
        config),

    acceptPrivacyPolicy: async () => APIService.post(route + "accept-policy/"),

    addUserFcmtoken: async (token: FormData) => APIService.post<FormData>(route + "fcmtoken/", token),

    deleteUserFcmtoken: async (token: string) => APIService.delete(route + "fcmtoken/" + token),

    updateUserPhone: async (userPhone: UserPhone) => Axios.put<UserPhone>(route + "update/", userPhone)
};

export default UserService;
