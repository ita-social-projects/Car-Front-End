import React from 'react';
import APIService from '../APIService';
import UserPreferences from '../../../models/UserPreferences';

class PreferencesService {
    constructor(private apiService: APIService) { }
    routePrefix: string = 'UserPreferences';

    getUserPreferences(userId: number) {
        return this.apiService.getRequest<UserPreferences>(this.routePrefix + '/'+ userId);
    }
   
    updateUserPreferences(preferences: UserPreferences) {
        return this.apiService.putRequest<UserPreferences>(this.routePrefix, { data: preferences });
    }   
}
export const PreferencesServiceContext = React.createContext(new PreferencesService(new APIService));
export default PreferencesService;