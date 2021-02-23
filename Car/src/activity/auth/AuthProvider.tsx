import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import AuthManager from "./AuthManager";
import GraphManager from "./GraphManager";
import * as navigation from "../../components/navigation/Navigation";
import User from "../../../models/User";
import LoginService from "../../../api-service/login-service/LoginService";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                login: async () => {
                    await AuthManager.signInAsync();

                    let accessToken = await AuthManager.getAccessTokenAsync();

                    if (accessToken) {
                        const userGraph = await GraphManager.getUserAsync();
                        if (!userGraph) {
                            navigation.navigate("Login", {
                                resetIndicator: true
                            });
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
                            avatarUrl: "",
                            journeyCount: 0,
                            hireDate: new Date()
                        };

                        const dbUser = await LoginService.loginUser(tempUser);

                        if (!dbUser.data?.token) {
                            navigation.navigate("Login", {
                                resetIndicator: true
                            });
                            return;
                        }

                        const token: any = dbUser.data?.token;

                        AuthManager.saveAPIToken(token);

                        AsyncStorage.setItem(
                            "user",
                            JSON.stringify(dbUser.data)
                        );

                        setUser(dbUser.data);

                        navigation.navigate("AppTabs", {});
                    }
                },

                logout: async () => {
                    await AuthManager.signOutAsync();
                    setUser(null);
                },

                loadStorageUser: async () => {
                    const storeUser = await AsyncStorage.getItem("user");
                    if (storeUser) {
                        setUser(JSON.parse(storeUser));
                    } else {
                        setUser(null);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
