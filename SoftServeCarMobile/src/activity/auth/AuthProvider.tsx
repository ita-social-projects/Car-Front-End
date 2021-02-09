import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthManager } from "./AuthManager";
import {GraphManager} from './GraphAuthProvider';
import * as RootNavigation from '../../components/navigation/RootNavigation';
import {User} from "../../../models/User";
import "reflect-metadata";
import { container } from 'tsyringe';
import LoginService from '../../../api-service/login-service/LoginService'
import NotificationsService from '../../../api-service/notificationsService/NotificationsService'


const loginService = container.resolve(LoginService);
const notificationsService = container.resolve(NotificationsService);

export const AuthContext = React.createContext<{
  user: User;
  unreadNumber: number;
  login: () => void;
  logout: () => void;
  loadStorageUser: () => void;
  getUnreadNumber: () => void;
}>({
  user: null,
  unreadNumber: 0,
  login: () => {},
  logout: () => {},
  loadStorageUser: () => {},
  getUnreadNumber: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [unreadNumber, setUnreadNumber] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        user,
        unreadNumber,
        login: async() => {
          await AuthManager.signInAsync();
          let accessToken = await AuthManager.getAccessTokenAsync();                
          if(accessToken)
          {
            const userGraph = await GraphManager.getUserAsync();
            if(!userGraph)
            {
              RootNavigation.navigate("Login", {resetIndicator: true});
              return;
            }                    
            const tempUser: User = {
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
            const dbUser = await loginService.loginUser(tempUser); 
            if(!dbUser.data?.token){
              RootNavigation.navigate("Login", {resetIndicator: true});
              return;
            }                 
            const token: any = dbUser.data?.token;
            AuthManager.saveAPIToken(token);
            AsyncStorage.setItem('user', JSON.stringify(dbUser.data));
            setUser(dbUser.data);
            RootNavigation.navigate("AppTabs", {});
          }     
        },
        logout: async() => {                   
          await AuthManager.signOutAsync();  
          setUser(null);                
        },        
        loadStorageUser: async() => {
          const storeUser = await AsyncStorage.getItem("user");
          if(storeUser){
            setUser(JSON.parse(storeUser));
          }
          else{
            setUser(null);
          }           
        },
        getUnreadNumber: async() =>{
          if(user)
          {
            const number = await notificationsService.getUnreadNotificationsNumber(Number(user?.id));
            let testNumber = number.data as number;
            setUnreadNumber(testNumber);
          }          
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
