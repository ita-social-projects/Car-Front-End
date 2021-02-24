import AsyncStorage from "@react-native-community/async-storage";
import { authorize } from "react-native-app-auth";
import AuthConfig from "./AuthConfig";

const AuthManager = {
    signInAsync: async () => {
        const result = await authorize(AuthConfig);
        AsyncStorage.setItem("userToken", result.accessToken);
        AsyncStorage.setItem("idToken", result.idToken);
        AsyncStorage.setItem("refreshToken", result.refreshToken);
        AsyncStorage.setItem("expireTime", result.accessTokenExpirationDate);
    },

    signOutAsync: async () => {
        AsyncStorage.removeItem("userToken");
        AsyncStorage.removeItem("refreshToken");
        AsyncStorage.removeItem("expireTime");
        AsyncStorage.removeItem("idToken");
        AsyncStorage.removeItem("user");
        AsyncStorage.removeItem("APIToken");
    },

    getIdToken: async () => {
        return AsyncStorage.getItem("idToken");
    },

    getAccessTokenAsync: async () => {
        return AsyncStorage.getItem("userToken");
    },

    saveAPIToken: async (token: string) => {
        AsyncStorage.setItem("APIToken", token);
    },

    getAPIToken: async () => {
        return AsyncStorage.getItem("APIToken");
    },

    getUser: async () => {
        return AsyncStorage.getItem("user");
    },

    setUser: async (user: any) => {
        AsyncStorage.setItem("user", user);
    }
};

export default AuthManager;
