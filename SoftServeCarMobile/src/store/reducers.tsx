import APIService from "../services/APIService/APIService";
import LoginService from "../services/APIService/loginService/LoginService";
import PreferencesService from "../services/APIService/preferencesServise/PreferencesService";
import UserService from "../services/APIService/UserService/UserService";


const initialStateAPI = {
    apiService: new APIService(),
    userService: new UserService(new APIService()),
    preferencesService: new PreferencesService(new APIService()),
    LoginService: new LoginService(new APIService())
};

const reducerAPI = (state = initialStateAPI, action: any) => {
    return state;
}

export default reducerAPI;