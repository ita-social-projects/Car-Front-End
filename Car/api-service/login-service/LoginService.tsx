import User from "../../models/user/User";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getLoginUrl();

const LoginService = {
    loginUser: async () => APIService.post<User>(route)
};

export default LoginService;
