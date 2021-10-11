import AsyncStorage from "@react-native-community/async-storage";
import { authorize, refresh } from "react-native-app-auth";
import AuthConfig from "./AuthConfig";

const AuthManager = {
    signInAsync: async () => {
        const result = await authorize(AuthConfig);

        console.log(result);
        AsyncStorage.setItem("userToken", result.accessToken);
        AsyncStorage.setItem("idToken", result.idToken);
        AsyncStorage.setItem("refreshToken", result.refreshToken);
        AsyncStorage.setItem("expireTime", result.accessTokenExpirationDate);
    },

    refreshAsync: async () => {
        const result = await refresh(AuthConfig, { refreshToken: (await AsyncStorage.getItem("refreshToken")) ?? "" });

        console.log(result);
        AsyncStorage.setItem("userToken", result.accessToken);
        AsyncStorage.setItem("idToken", result.idToken);
        if (result.refreshToken) {
            AsyncStorage.setItem("refreshToken", result.refreshToken);
        }

        AsyncStorage.setItem("expireTime", result.accessTokenExpirationDate);
    },

    signOutAsync: async () => {
        const promises: Promise<void>[] = [];

        promises.push(AsyncStorage.removeItem("userToken"));
        promises.push(AsyncStorage.removeItem("refreshToken"));
        promises.push(AsyncStorage.removeItem("expireTime"));
        promises.push(AsyncStorage.removeItem("idToken"));
        promises.push(AsyncStorage.removeItem("user"));
        await Promise.all(promises);
    },

    getIdTokenAsync: async () => {
        return AsyncStorage.getItem("idToken");
    },

    getAccessTokenAsync: async () => {
        return AsyncStorage.getItem("userToken");
    },

    getUser: async () => {
        return AsyncStorage.getItem("user");
    },

    setUser: async (user: string) => {
        AsyncStorage.setItem("user", user);
    }
};

export default AuthManager;
