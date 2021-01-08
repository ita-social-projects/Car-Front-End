//import { prefetchConfiguration } from 'react-native-app-auth';

import { JsonHubProtocol } from "@microsoft/signalr";
import axios from "axios";

//import Preferences from '../src/activity/MyProfile/MyProfileActivity/Preferences/Preferences'
const contF = require('../src/activity/login/Login');
const Preferences = require('../src/activity/MyProfile/MyProfileActivity/Preferences/Preferences');

/* 
 describe('It will test loadingProcess function', ()=>{
    it('the first test',()=>{
        expect(contF.loadingProcess(false)).toEqual(null);        
    });
});  */
 describe('It will test updateUserPreferences func',()=>{
     const preferencesInfo = {response: 'SomeString'};
     const resp = {data: preferencesInfo};
     jest.spyOn(axios, 'post').mockResolvedValueOnce(resp);

    it('the first test', async()=>{
        const res = await Preferences.updatePreferences();
        expect(res.data.response).toContain('SomeString');
        /* return Preferences.updatePreferences().then((res: { data: { response: any; }; }) =>{
            expect(res.data.response).toContain('somestring'); */

    });
});
   


export {}