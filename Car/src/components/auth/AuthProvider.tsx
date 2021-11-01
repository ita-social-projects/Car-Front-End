import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import AuthManager from "./AuthManager";
import * as navigation from "../navigation/Navigation";
import User from "../../../models/user/User";
import LoginService from "../../../api-service/login-service/LoginService";
import AuthContext from "./AuthContext";
import { EventRegister } from "react-native-event-listeners";
import { USER_STATE_CHANGE_EVENT_NAME } from "../../constants/ProfileConstants";
import UserService from "../../../api-service/user-service/UserService";
import messaging from "@react-native-firebase/messaging";

const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>(null);

    const updateUserState = (updatedUser : User) => {
        setUser(updatedUser);
        EventRegister.emit(USER_STATE_CHANGE_EVENT_NAME, updatedUser);
    };

    const navigateLoginWithResetIndicator = () =>
        navigation.navigate("Login", { resetIndicator: true });

    const addTokenToDatabase = async (token: string, userToUpdate: User) => {
        const fcmTokenForm = new FormData();

        fcmTokenForm.append("token", token);

        await UserService.addUserFcmtoken(fcmTokenForm);
        await UserService.getUser(userToUpdate!.id).then((res) => {
            AsyncStorage.setItem("user", JSON.stringify(res.data));
        });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login: async () => {
                    let loginCanceled = false;

                    await AuthManager.signInAsync().catch(() => {
                        loginCanceled = true;
                        navigateLoginWithResetIndicator();
                    });

                    if (loginCanceled) return;

                    let accessToken = await AuthManager.getAccessTokenAsync();

                    if (accessToken) {
                        const dbUser = await LoginService.loginUser();

                        await AsyncStorage.setItem(
                            "user",
                            JSON.stringify(dbUser.data));

                        updateUserState(dbUser.data);

                        messaging()
                            .getToken()
                            .then(tokenToSave => {
                                if(tokenToSave)
                                    addTokenToDatabase(tokenToSave, dbUser.data);
                            });

                        messaging().onTokenRefresh(tokenToSave => addTokenToDatabase(tokenToSave, dbUser.data));

                        navigation.navigate("AppTabs");
                    }
                },

                logout: async () => {
                    let tokenToDelete = await messaging().getToken();

                    await UserService.deleteUserFcmtoken(tokenToDelete);
                    await AuthManager.signOutAsync();
                    updateUserState(null);
                },

                loadStorageUser: async () => {
                    const storeUser = await AsyncStorage.getItem("user");

                    if (storeUser) {
                        updateUserState(JSON.parse(storeUser));
                    } else {
                        updateUserState(null);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
