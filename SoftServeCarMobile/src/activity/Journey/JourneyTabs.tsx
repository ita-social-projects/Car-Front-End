import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { View } from 'react-native'
import CreateJourney from './journeyActivity/CreateJourney';
import SearchJourney from './journeyActivity/SearchJourney';
import Journey from './Journey';
import JourneyPage from './journeyActivity/segmentControlActivities/JourneyPage';
import JourneyStyle from './JourneyStyle';

const StackTabs = createStackNavigator();

const JourneyTabs = (props: any) => {
    return (
        <View style={JourneyStyle.tabsStyle}>
            <StackTabs.Navigator>
                <StackTabs.Screen name="Journey"
                    component={Journey} options={{ headerTitleAlign: "center" }} />
                <StackTabs.Screen name="Create Journey" component={CreateJourney}></StackTabs.Screen>
                <StackTabs.Screen name="Search Journey" component={SearchJourney}></StackTabs.Screen>
                <StackTabs.Screen name="Journey Page" component={JourneyPage}></StackTabs.Screen>
            </StackTabs.Navigator>
        </View>
    );
}
export default JourneyTabs;
