import APIService from "../services/APIService/APIService";
import UserService from "../services/APIService/UserService/UserService";

const initialStateAPI = {
    apiService: new APIService(),
    userService: new UserService(new APIService())
};

const reducerAPI = (state = initialStateAPI, action: any) => {
    return state;
}

export default reducerAPI;