import User from "../../models/User";
import APIService from "../APIService";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getUserUrl();

const UserService = {
    getUser: async (id: number) => {
        return await APIService.get<User>(route + id);
    },

    getAvatar: async (id: number) => {
        return await APIService.get<string>(route + id + "/avatar");
    },

    setAvatar: async (id: number, formData: FormData) => {
        return await fetch(route + id + "/avatar", {
            method: "PUT",
            headers: { "Content-Type": "multipart/form-data" },
            body: formData
        });
    }
};

export default UserService;
