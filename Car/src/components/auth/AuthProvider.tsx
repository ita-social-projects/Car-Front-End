import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import AuthManager from "./AuthManager";
import GraphManager from "./GraphManager";
import * as navigation from "../navigation/Navigation";
import User from "../../../models/user/User";
import LoginService from "../../../api-service/login-service/LoginService";
import AuthContext from "./AuthContext";
import { EventRegister } from "react-native-event-listeners";
import { USER_STATE_CHANGE_EVENT_NAME } from "../../constants/ProfileConstants";

const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>(null);

    const updateUserState = (updatedUser : User) => {
        setUser(updatedUser);
        EventRegister.emit(USER_STATE_CHANGE_EVENT_NAME, updatedUser);
    };

    const navigateLoginWithResetIndicator = () =>
        navigation.navigate("Login", { resetIndicator: true });

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
                        const userGraph = await GraphManager.getUserAsync();

                        if (!userGraph) {
                            navigateLoginWithResetIndicator();

                            return;
                        }
                        const tempUser: User = {
                            email:
                                userGraph.mail! || userGraph.userPrincipalName!,
                            name: userGraph.givenName,
                            surname: userGraph.surname,
                            location: userGraph.officeLocation,
                            position: userGraph.jobTitle,
                            id: 0,
                            token: "",
                            imageId: null,
                            journeyCount: 0,
                            hireDate: new Date(new Date().getMinutes()),
                        };

                        const dbUser = await LoginService.loginUser(tempUser);

                        if (!dbUser.data?.token) {
                            navigateLoginWithResetIndicator();

                            return;
                        }

                        const token: any = dbUser.data?.token;

                        await AuthManager.saveAPIToken(token);

                        await AsyncStorage.setItem(
                            "user",
                            JSON.stringify(dbUser.data));

                        updateUserState(dbUser.data);

                        navigation.navigate("AppTabs");
                    }
                },

                logout: async () => {
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
