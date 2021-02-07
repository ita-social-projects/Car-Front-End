import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";
import "reflect-metadata";
import { container } from 'tsyringe';
import LoginService from '../../../api-service/login-service/LoginService';
import { User } from "../../../models/User";
import * as RootNavigation from '../../components/navigation/RootNavigation';
import { AuthManager } from "./AuthManager";
import { GraphManager } from './GraphAuthProvider';

const loginService = container.resolve(LoginService);

export const AuthContext =
    React.createContext<{ user: User, login: () => void, logout: () => void, loadStorageUser: () => void, }>({
        user: null
        , login: () => {
        }
        , logout: () => {
        }
        , loadStorageUser: () => {
        }
    });

interface AuthProviderProps {
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
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
                            RootNavigation.navigate("Login", { resetIndicator: true });
                            return;
                        }
                        const userData: User = {
                            email: userGraph.mail! || userGraph.userPrincipalName!,
                            name: userGraph.givenName,
                            surname: userGraph.surname,
                            location: userGraph.officeLocation,
                            position: userGraph.jobTitle,
                            id: 0,
                            token: '',
                            byteOfImage: '',
                            hireDate: new Date(),
                        }
                        const dbUser = await loginService.loginUser(userData);
                        if (!dbUser.data?.token) {
                            RootNavigation.navigate("Login", { resetIndicator: true });
                            return;
                        }
                        const token: any = dbUser.data?.token;
                        AuthManager.saveAPIToken(token);
                        AsyncStorage.setItem('user', JSON.stringify(dbUser.data));
                        setUser(dbUser.data);
                        RootNavigation.navigate('AppTabs', {});
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
