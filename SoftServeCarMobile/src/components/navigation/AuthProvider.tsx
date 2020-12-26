import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthManager } from "./AuthManager";
import {GraphManager} from './GraphAuthProvider';
import {loginUrl} from '../../api/ApiEndPoints';
import { axiosInstance } from "../../api/Interceptor";


type User = null | { username: string };
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
                      const currentUser = { username: userGraph.givenName };
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
        .then(async userString => { 
          if(userString){
            const userGraph = await GraphManager.getUserAsync();
            const currentUser = { username: userGraph.givenName };     
            setUser(currentUser);
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