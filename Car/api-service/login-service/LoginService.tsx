import User from "../../models/user/User";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getLoginUrl();

const LoginService = {
    loginUser: async (user: User) => APIService.post<User>(route, user)
};

export default LoginService;
