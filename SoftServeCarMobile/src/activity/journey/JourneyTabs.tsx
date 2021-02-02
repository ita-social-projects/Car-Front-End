import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { View } from 'react-native'
import CreateJourney from './journey-activity/CreateJourney';
import SearchJourney from './journey-activity/SearchJourney';
import Journey from './Journey';
import JourneyPage from './journey-activity/segment-control-activities/JourneyPage';
import JourneyStyle from './JourneyStyle';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import JourneyApplicant from './journey-activity/segment-control-activities/JourneyApplicant';

const StackTabs = createStackNavigator();

const JourneyTabs = (props: any) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <View style={JourneyStyle.tabsStyle}>
            <StackTabs.Navigator>
                <StackTabs.Screen name="Journey"
                    component={Journey} options={{ headerTitleAlign: "center" }} />
                <StackTabs.Screen name="Create Journey" component={CreateJourney}/>
                <StackTabs.Screen name="Search Journey" component={SearchJourney}/>
                <StackTabs.Screen name="Journey Page"
                    options={{
                        headerRight: () => (
                            <TouchableWithoutFeedback onPress={() => setOpen(!isOpen)}>
                                <Ionicons name={'ellipsis-horizontal'} size={30} style={{ paddingRight: 12 }} />
                            </TouchableWithoutFeedback>
                        ),
                    }} >
                    {() => <JourneyPage isOpen={isOpen} setIsOpen={setOpen} />}
                </StackTabs.Screen>
                <StackTabs.Screen name="Applicant Page" component={JourneyApplicant}/>
            </StackTabs.Navigator>
        </View>
    );
}
export default JourneyTabs;
