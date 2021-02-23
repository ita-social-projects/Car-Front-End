import AsyncStorage from "@react-native-community/async-storage";
import { authorize } from "react-native-app-auth";
import AuthConfig from "./AuthConfig";

const AuthManager = {
    signInAsync: async () => {
        const result = await authorize(AuthConfig);
        await AsyncStorage.setItem("userToken", result.accessToken);
        await AsyncStorage.setItem("idToken", result.idToken);
        await AsyncStorage.setItem("refreshToken", result.refreshToken);
        await AsyncStorage.setItem(
            "expireTime",
            result.accessTokenExpirationDate
        );
    },

    signOutAsync: async () => {
        await AsyncStorage.removeItem("userToken");
        await AsyncStorage.removeItem("refreshToken");
        await AsyncStorage.removeItem("expireTime");
        await AsyncStorage.removeItem("idToken");
        await AsyncStorage.removeItem("user");
        await AsyncStorage.removeItem("APIToken");
    },

    getIdToken: async () => {
        return await AsyncStorage.getItem("idToken");
    },

    getAccessTokenAsync: async () => {
        return await AsyncStorage.getItem("userToken");
    },

    saveAPIToken: async (token: string) => {
        await await AsyncStorage.setItem("APIToken", token);
    },

    getAPIToken: async () => {
        return await AsyncStorage.getItem("APIToken");
    },

    getUser: async () => {
        return await AsyncStorage.getItem("user");
    },

    setUser: async (user: any) => {
        await await AsyncStorage.setItem("user", user);
    }
};

export default AuthManager;
