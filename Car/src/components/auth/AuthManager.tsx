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
        const promises: Promise<void>[] = [];

        promises.push(AsyncStorage.removeItem("userToken"));
        promises.push(AsyncStorage.removeItem("refreshToken"));
        promises.push(AsyncStorage.removeItem("expireTime"));
        promises.push(AsyncStorage.removeItem("idToken"));
        promises.push(AsyncStorage.removeItem("user"));
        promises.push(AsyncStorage.removeItem("APIToken"));
        await Promise.all(promises);
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

    setUser: async (user: string) => {
        AsyncStorage.setItem("user", user);
    }
};

export default AuthManager;
