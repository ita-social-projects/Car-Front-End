import 'react-native';
import { AxiosResponse } from 'axios';
import APIService from '../APIService/APIService'
import {UserPreferences} from '../models/UserPreferences';
import PreferencesService from '../APIService/preferencesServise/PreferencesService'


describe('UserService', () => {
    let preferencesData = {
        id: 3,
        userId: 14,
        doAllowEating: false,
        doAllowSmoking: false,
        comments: 'what a lovely day',
    }

    let apiService: APIService = new APIService();
    let preferencesService = new PreferencesService(apiService);

    test('should get preferences', () => {
        jest.spyOn(apiService, 'get').mockImplementation(() => new Promise<AxiosResponse<UserPreferences>>
            (function (resolve) {
                resolve(
                    {
                        data: preferencesData,
                        statusText: 'Ok',
                        status: 200,
                        config: {},
                        headers: {
                            'Context-Type': 'application/json',
                        }
                    }
                );
            })
        );

        let response: UserPreferences;

        preferencesService.getUserPreferences(preferencesData.userId)
            .then(res => {
                response = res.data;
                expect(res.status).toEqual(200);
                expect(response).toEqual(preferencesData);
            }
        );
    }),

    test('It should update preferences', () => {
        let newComments = 'Hello world!';
        let newPreferences = {...preferencesData, comments: newComments};
        jest.spyOn(apiService, 'put').mockImplementation(() => new Promise<AxiosResponse<UserPreferences>>
            (function (resolve) {
                resolve({
                    data: newPreferences,
                    statusText: 'Ok',
                    status: 200,
                    config: {},
                    headers: {
                     'Context-Type': 'application/json',
                    }
                });
            })
        );
        let response: UserPreferences;
        preferencesService.updateUserPreferences(preferencesData)
            .then(res => {
                response = res.data;
                expect(res.status).toEqual(200);
                expect(response).toEqual(preferencesData);
            }
        );
    })
});
