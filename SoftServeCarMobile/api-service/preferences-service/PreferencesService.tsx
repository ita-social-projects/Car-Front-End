import APIService from '../APIService';
import { UserPreferences } from '../../models/UserPreferences';
import { injectable } from 'tsyringe';

@injectable()

class PreferencesService {
    constructor(private apiService: APIService) { }
    
    routePrefix: string = 'user-preferences';

    getUserPreferences(id: number) {
        return this.apiService.get<UserPreferences>(this.routePrefix + '/'+ id);
    }

    updateUserPreferences(preferences: UserPreferences) {
        return this.apiService.put<UserPreferences>(this.routePrefix, preferences);
    }
}
export default PreferencesService;
