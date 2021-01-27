import React from 'react';
import APIService from '../APIService';
import {UserPreferences} from '../../models/UserPreferences';
import { injectable } from 'tsyringe';

@injectable()

class PreferencesService {
    constructor(private apiService: APIService) { }
    
    routePrefix: string = 'UserPreferences';

    getUserPreferences(userId: number) {
        return this.apiService.get<UserPreferences>(this.routePrefix + '/'+ userId);
    }

    updateUserPreferences(preferences: UserPreferences) {
        return this.apiService.put<UserPreferences>(this.routePrefix, preferences );
    }
}
export default PreferencesService;
