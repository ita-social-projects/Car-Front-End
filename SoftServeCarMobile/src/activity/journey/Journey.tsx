import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AllJourneys from './journey-activity/segment-control-activities/journey-page/tabs/all-journeys/AllJourneys';
import PastJourneys from './journey-activity/segment-control-activities/journey-page/tabs/past-journeys/PastJourneys';
import ScheduledJourneys from './journey-activity/segment-control-activities/journey-page/tabs/scheduled-journeys/ScheduledJourneys';
import UpcomingJourneys from './journey-activity/segment-control-activities/journey-page/tabs/upcoming-journeys/UpcomingJourneys';
import JourneyStyle from './JourneyStyle';
import TouchableNavigationBlock from './touchable-navigation-block/TouchableNavigationBlock';

function Journey(props: any) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [allButtonStyle, setAllButtonStyle] = useState(JourneyStyle.activeButton);
    const [pastButtonStyle, setPastButtonStyle] = useState(JourneyStyle.unactiveButton);
    const [upcomingButtonStyle, setUpcomingButtonStyle] = useState(JourneyStyle.unactiveButton);
    const [scheduledButtonStyle, setScheduledButtonStyle] = useState(JourneyStyle.unactiveButton);

    return (
        <ScrollView style={JourneyStyle.page}>
            <View style={JourneyStyle.touchableNavigationBlocks}>
                <TouchableNavigationBlock navigation={props.navigation}
                    navigationName="Search Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-searching.png")}
                    blockName="Search for a Journey"
                    from="#A5C500"
                    to="#00A977"
                    reverse={false}
                    width={150}
                    height={140} />
                <TouchableNavigationBlock navigation={props.navigation}
                    navigationName="Create Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-delivery-car-service.png")}
                    blockName="Create a Journey"
                    from="#00A3CF"
                    to="#5552A0"
                    reverse={true}
                    width={210}
                    height={140} />
            </View>
            <View style={JourneyStyle.manageJourneysContainer}>
                <Text style={JourneyStyle.manageJourneysText}>
                    Manage journeys
                </Text>
            </View>
            <View style={JourneyStyle.segmentControlContainer}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[JourneyStyle.allJourneys, allButtonStyle]}
                    onPress={() => {
                        setSelectedIndex(0);
                        setAllButtonStyle(JourneyStyle.activeButton);
                        setPastButtonStyle(JourneyStyle.unactiveButton);
                        setUpcomingButtonStyle(JourneyStyle.unactiveButton);
                        setScheduledButtonStyle(JourneyStyle.unactiveButton);
                    }}>
                    <Text style={[JourneyStyle.buttonText, allButtonStyle]}>
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[JourneyStyle.pastJourneys, pastButtonStyle]}
                    onPress={() => {
                        setSelectedIndex(1);
                        setAllButtonStyle(JourneyStyle.unactiveButton);
                        setPastButtonStyle(JourneyStyle.activeButton);
                        setUpcomingButtonStyle(JourneyStyle.unactiveButton);
                        setScheduledButtonStyle(JourneyStyle.unactiveButton);
                    }}>
                    <Text style={[JourneyStyle.buttonText, pastButtonStyle]}>
                        Past
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[JourneyStyle.upcomingJourneys, upcomingButtonStyle]}
                    onPress={() => {
                        setSelectedIndex(2);
                        setAllButtonStyle(JourneyStyle.unactiveButton);
                        setPastButtonStyle(JourneyStyle.unactiveButton);
                        setUpcomingButtonStyle(JourneyStyle.activeButton);
                        setScheduledButtonStyle(JourneyStyle.unactiveButton);
                    }}>
                    <Text style={[JourneyStyle.buttonText, upcomingButtonStyle]}>
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[JourneyStyle.scheduledJourneys, scheduledButtonStyle]}
                    onPress={() => {
                        setSelectedIndex(3);
                        setAllButtonStyle(JourneyStyle.unactiveButton);
                        setPastButtonStyle(JourneyStyle.unactiveButton);
                        setUpcomingButtonStyle(JourneyStyle.unactiveButton);
                        setScheduledButtonStyle(JourneyStyle.activeButton);
                    }}>
                    <Text style={[JourneyStyle.buttonText, scheduledButtonStyle]}>
                        Scheduled
                    </Text>
                </TouchableOpacity>
            </View>

            {selectedIndex === 0 && (<View><AllJourneys /></View>)}
            {selectedIndex === 1 && (<View><PastJourneys /></View>)}
            {selectedIndex === 2 && (<View><UpcomingJourneys /></View>)}
            {selectedIndex === 3 && (<View><ScheduledJourneys /></View>)}

        </ScrollView>
    )
}

export default Journey;
