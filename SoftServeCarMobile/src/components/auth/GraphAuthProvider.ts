import { Client } from '@microsoft/microsoft-graph-client';
import { AuthManager } from './AuthManager';

class GraphAuthProvider {
    getAccessToken = async() => {
      const token = await AuthManager.getAccessTokenAsync();    
      return token || '';
    }
  }

  const clientOptions = {
    authProvider: new GraphAuthProvider()
  };
  
  const graphClient = Client.initWithMiddleware(clientOptions);
  
  export class GraphManager {
    static getUserAsync = async() => {
      
      return await graphClient
        .api('/me')
        .select('id,displayName,givenName,mail,mailboxSettings,userPrincipalName,officeLocation,surname')
        .get();
    } 
  }
