import User from "../../models/User";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getLogindUrl();

const LoginService = {
    loginUser: async (user: User) => {
        return await APIService.post<User>(route, user);
    }
};

export default LoginService;
