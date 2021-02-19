import AsyncStorage from "@react-native-community/async-storage";
import { authorize } from "react-native-app-auth";
import AuthConfig from "./AuthConfig";

class AuthManager {
    static signInAsync = async () => {
        const result = await authorize(AuthConfig);
        await AsyncStorage.setItem("userToken", result.accessToken);
        await AsyncStorage.setItem("idToken", result.idToken);
        await AsyncStorage.setItem("refreshToken", result.refreshToken);
        await AsyncStorage.setItem(
            "expireTime",
            result.accessTokenExpirationDate
        );
    };

    static signOutAsync = async () => {
        await AsyncStorage.removeItem("userToken");
        await AsyncStorage.removeItem("refreshToken");
        await AsyncStorage.removeItem("expireTime");
        await AsyncStorage.removeItem("idToken");
        await AsyncStorage.removeItem("user");
        await AsyncStorage.removeItem("APIToken");
    };

    static getIdToken = async () => {
        return await AsyncStorage.getItem("idToken");
    };

    static getAccessTokenAsync = async () => {
        return await AsyncStorage.getItem("userToken");
    };

    static saveAPIToken = async (token: string) => {
        await AsyncStorage.setItem("APIToken", token);
    };
    static getAPIToken = async () => {
        return await AsyncStorage.getItem("APIToken");
    };

    static getUser = async () => {
        return await AsyncStorage.getItem("user");
    };

    static setUser = async (user: any) => {
        await AsyncStorage.setItem("user", user);
    };
}

export default AuthManager;
