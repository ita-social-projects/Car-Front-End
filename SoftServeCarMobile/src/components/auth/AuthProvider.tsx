import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthManager } from "./AuthManager";
import {GraphManager} from './GraphAuthProvider';
import {loginUrl} from '../../api/ApiEndPoints';
import { axiosInstance } from "../../api/Interceptor";
import * as RootNavigation from '../navigation/RootNavigation';


type User = null | { username: string, id: string, surname: string, email: string, azureId: string };
const axiosInst = axiosInstance;

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
  loadStorageUser: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  loadStorageUser: () => {}
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async() => {
          await AuthManager.signInAsync();
          let accessToken = await AuthManager.getAccessTokenAsync();                
                 if(accessToken)
                  {
                    const userGraph = await GraphManager.getUserAsync();
                    if(!userGraph)
                    {
                      RootNavigation.navigate("Login", {});
                      return;
                    }
                    const params = {
                      EmailAddress: userGraph.mail! || userGraph.userPrincipalName!,
                      Name: userGraph.givenName,
                      Surname: userGraph.surname,
                      AzureId: userGraph.id,
                      OfficeLocation: userGraph.officeLocation,
                    }
                    axiosInst.post(loginUrl,params)
                    .then(response => {
                      AuthManager.saveAPIToken(response.data.token);        
                      AuthManager.saveUserId(JSON.stringify(response.data.userId));
                      const currentUser = { username: userGraph.givenName, id: response.data.userId, surname: userGraph.surname
                      , email: userGraph.mail! || userGraph.userPrincipalName!, azureId: userGraph.id };
                      AsyncStorage.setItem("user", JSON.stringify(currentUser));                                           
                      setUser(currentUser);
                    })
                    .catch((error) => {
                      console.log('Login failed: ' + error);
                    }); 
                  }     
        },
        logout: async() => {                   
          await AuthManager.signOutAsync();  
          setUser(null);                
        },
        loadStorageUser: async() => {
        AsyncStorage.getItem("user")
        .then(async user => { 
          if(user){            
            let storageUser = JSON.parse(user);
            setUser(storageUser);
          }  
          else{
            setUser(null);
          }           
        })
        .catch(err => {
          console.log(err);    
        });                           
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};