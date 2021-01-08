import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from 'react-native'
import "reflect-metadata";
import { container } from 'tsyringe';
import UserService from '../../services/APIService/UserService/UserService';
import User from '../../models/User';
import { AuthContext } from "../../components/auth/AuthProvider"
import CurrentJourney from './JourneyActivity/CurrentJourney';
import CreateJourney from './JourneyActivity/CreateJourney';
import SearchJourney from './JourneyActivity/SearchJourney';
import JourneyInformation from './JourneyActivity/JourneyInformation';
import Journey from './Journey';

const StackTabs = createStackNavigator();

const JourneyTabs = (props: any) => {


    return (
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
            <StackTabs.Navigator>
                <StackTabs.Screen name="Journey"
                        component={Journey} options={{headerTitleAlign:"center"}}/>
                <StackTabs.Screen name="CurrentJourney" component={CurrentJourney}></StackTabs.Screen>
                <StackTabs.Screen name="CreateJourney" component={CreateJourney}></StackTabs.Screen>
                <StackTabs.Screen name="SearchJourney" component={SearchJourney}></StackTabs.Screen>
                <StackTabs.Screen name="JourneyInformation" component={JourneyInformation}></StackTabs.Screen>
            </StackTabs.Navigator>
        </View>
    );
}
export default JourneyTabs;