import React, { useContext, useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import JourneyService from "../../../api-service/journey-service/JourneyService";
import Journey from "../../../models/Journey";
import AuthContext from "../../components/auth/AuthContext";
import JourneyCardList from "../../components/journey-card/JourneyCardList";
import JourneyStyle from "./JourneyStyle";
import TouchableNavigationBlock from "./touchable-navigation-block/TouchableNavigationBlock";

function JourneyStartPage(props: any) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [allButtonStyle, setAllButtonStyle] = useState(
        JourneyStyle.activeButton
    );
    const [pastButtonStyle, setPastButtonStyle] = useState(
        JourneyStyle.unactiveButton
    );
    const [upcomingButtonStyle, setUpcomingButtonStyle] = useState(
        JourneyStyle.unactiveButton
    );
    const [scheduledButtonStyle, setScheduledButtonStyle] = useState(
        JourneyStyle.unactiveButton
    );

    const { user } = useContext(AuthContext);
    const [pastJourneys, setPastJourneys] = useState<Array<Journey>>([]);
    const [upcomingJourneys, setUpcomingJourneys] = useState<Array<Journey>>(
        []
    );
    const [scheduledJourneys, setScheduledJourneys] = useState<Array<Journey>>(
        []
    );

    useEffect(() => {
        JourneyService.getUpcomingJourneys(Number(user?.id))
            .then((res) => {
                setUpcomingJourneys(res.data);
            })
            .catch((e) => Alert.alert("Error", e.message));
    }, []);

    useEffect(() => {
        JourneyService.getPastJourneys(Number(user?.id))
            .then((res) => {
                setPastJourneys(res.data);
            })
            .catch((e) => Alert.alert("Error", e.message));
    }, []);

    useEffect(() => {
        JourneyService.getScheduledJourneys(Number(user?.id))
            .then((res) => {
                setScheduledJourneys(res.data);
            })
            .catch((e) => Alert.alert("Error", e.message));
    }, []);

    return (
        <ScrollView style={JourneyStyle.page}>
            <View style={JourneyStyle.touchableNavigationBlocks}>
                <TouchableNavigationBlock
                    navigation={props.navigation}
                    navigationName="Search Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-searching.png")}
                    blockName="Search for a Journey"
                    from="#A5C500"
                    to="#00A977"
                    reverse={false}
                    width={150}
                    height={140}
                />
                <TouchableNavigationBlock
                    navigation={props.navigation}
                    navigationName="Create Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-delivery-car-service.png")}
                    blockName="Create a Journey"
                    from="#00A3CF"
                    to="#5552A0"
                    reverse={true}
                    width={210}
                    height={140}
                />
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
                    }}
                >
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
                    }}
                >
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
                    }}
                >
                    <Text
                        style={[JourneyStyle.buttonText, upcomingButtonStyle]}
                    >
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[
                        JourneyStyle.scheduledJourneys,
                        scheduledButtonStyle
                    ]}
                    onPress={() => {
                        setSelectedIndex(3);
                        setAllButtonStyle(JourneyStyle.unactiveButton);
                        setPastButtonStyle(JourneyStyle.unactiveButton);
                        setUpcomingButtonStyle(JourneyStyle.unactiveButton);
                        setScheduledButtonStyle(JourneyStyle.activeButton);
                    }}
                >
                    <Text
                        style={[JourneyStyle.buttonText, scheduledButtonStyle]}
                    >
                        Scheduled
                    </Text>
                </TouchableOpacity>
            </View>

            {selectedIndex === 0 && (
                <View style={JourneyStyle.tabStyle}>
                    {upcomingJourneys.length > 0 && (
                        <Text style={JourneyStyle.tabTextStyle}>Upcoming</Text>
                    )}
                    {<JourneyCardList journey={upcomingJourneys} />}

                    {pastJourneys.length > 0 && (
                        <Text style={JourneyStyle.tabTextStyle}>Past</Text>
                    )}
                    {<JourneyCardList journey={pastJourneys} />}

                    {scheduledJourneys.length > 0 && (
                        <Text style={JourneyStyle.tabTextStyle}>Scheduled</Text>
                    )}
                    {<JourneyCardList journey={scheduledJourneys} />}
                </View>
            )}
            {selectedIndex === 1 && (
                <View style={JourneyStyle.tabStyle}>
                    {<JourneyCardList journey={pastJourneys} />}
                </View>
            )}
            {selectedIndex === 2 && (
                <View style={JourneyStyle.tabStyle}>
                    {<JourneyCardList journey={upcomingJourneys} />}
                </View>
            )}
            {selectedIndex === 3 && (
                <View style={JourneyStyle.tabStyle}>
                    {<JourneyCardList journey={scheduledJourneys} />}
                </View>
            )}
        </ScrollView>
    );
}

export default JourneyStartPage;
