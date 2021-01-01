import AsyncStorage from "@react-native-community/async-storage";
import { authorize, AuthConfiguration } from 'react-native-app-auth';
import { Platform } from 'react-native';

const AuthConfig = {
  appId: '6d6543bc-f0a6-4312-a919-53f757516d63',
  appScopes: [
    'openid',
    'offline_access',
    'profile',
    'User.Read',
    'MailboxSettings.Read',
    'Calendars.ReadWrite'
  ]
};

const config: AuthConfiguration = {
  clientId: AuthConfig.appId,
  redirectUrl: Platform.OS === 'ios' ? 'urn:ietf:wg:oauth:2.0:oob' : 'softserve-car://react-native-auth',
  scopes: AuthConfig.appScopes,
  additionalParameters: { prompt: 'select_account' },
  serviceConfiguration: {
    authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  }
};

export class AuthManager {    

  static signInAsync = async () => {
    const result = await authorize(config);
    await AsyncStorage.setItem('userToken', result.accessToken);
    await AsyncStorage.setItem('idToken', result.idToken);
    await AsyncStorage.setItem('refreshToken', result.refreshToken);
    await AsyncStorage.setItem('expireTime', result.accessTokenExpirationDate);
  }
  
  static signOutAsync = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('refreshToken');
    await AsyncStorage.removeItem('expireTime');
    await AsyncStorage.removeItem('idToken');    
    await AsyncStorage.removeItem('UserId');
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("APIToken");
  }

  static getIdToken=async()=>{
    return await AsyncStorage.getItem('idToken');
  }

  static getAccessTokenAsync = async() => {
    return await AsyncStorage.getItem('userToken');
  }
  
  static saveAPIToken=async(token:string)=>{
    await AsyncStorage.setItem('APIToken', token);
  }
  static getAPIToken=async()=>{
    return await AsyncStorage.getItem('APIToken');
  }

  static saveUserId = async(Id:string)=>{
    await AsyncStorage.setItem('UserId', Id);
  }

  static getUserId=async()=>{
    return await AsyncStorage.getItem('UserId');
  }  
 
  static getUser = async() => {
    return await AsyncStorage.getItem("user");
  }  
}