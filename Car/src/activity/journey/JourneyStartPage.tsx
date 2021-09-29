import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import JourneyService from "../../../api-service/journey-service/JourneyService";
import Journey from "../../../models/journey/Journey";
import JourneyCardList from "../../components/journey-card/JourneyCardList";
import JourneyStartPageStyle from "./JourneyStartPageStyle";
import TouchableNavigationBlock from "../../components/touchable-navigation-block/TouchableNavigationBlock";
import {
    FIRST_ELEMENT_INDEX,
    SECOND_ELEMENT_INDEX,
    THIRD_ELEMENT_INDEX,
    FOURTH_ELEMENT_INDEX,
    EMPTY_COLLECTION_LENGTH
} from "../../constants/GeneralConstants";
import NavigationAddListener from "../../types/NavigationAddListener";
import { useTheme } from "../../components/theme/ThemeProvider";

const JourneyStartPage = (props: NavigationAddListener) => {
    const { DM, DMStyleObject } = useTheme();

    const activeButtonStyle = {
        backgroundColor: DM("#FFFFFF"),
        color: DM("#000000"),
        borderBottomWidth: 2
    };

    const activeButtonTextStyle = {
        backgroundColor: DM("#FFFFFF"),
        color: DM("#000000")
    };

    const inactiveButtonStyle = {
        backgroundColor: DM("#FFFFFF"),
        color: DM("#8C8F8E"),
        borderBottomWidth: 0
    };

    const inactiveButtonTextStyle = {
        backgroundColor: DM("#FFFFFF"),
        color: DM("#8C8F8E"),
    };

    const [selectedIndex, setSelectedIndex] = useState(FIRST_ELEMENT_INDEX);
    const [allButtonStyle, setAllButtonStyle] = useState(activeButtonStyle);
    const [pastButtonStyle, setPastButtonStyle] = useState(inactiveButtonStyle);
    const [upcomingButtonStyle, setUpcomingButtonStyle] = useState(inactiveButtonStyle);
    const [scheduledButtonStyle, setScheduledButtonStyle] = useState(inactiveButtonStyle);
    const [allButtonTextStyle, setAllButtonTextStyle] = useState(activeButtonTextStyle);
    const [pastButtonTextStyle, setPastButtonTextStyle] = useState(inactiveButtonTextStyle);
    const [upcomingButtonTextStyle, setUpcomingButtonTextStyle] = useState(inactiveButtonTextStyle);
    const [scheduledButtonTextStyle, setScheduledButtonTextStyle] = useState(inactiveButtonTextStyle);

    const [pastJourneys, setPastJourneys] = useState<Array<Journey>>([]);
    const [upcomingJourneys, setUpcomingJourneys] = useState<Array<Journey>>(
        []
    );
    const [scheduledJourneys, setScheduledJourneys] = useState<Array<Journey>>(
        []
    );

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadJourneys();
    }, []);

    const loadJourneys = () => {
        JourneyService.getUpcomingJourneys().then((res) =>
            setUpcomingJourneys(res.data)
        ).then(() => setRefreshing(false));

        JourneyService.getPastJourneys().then((res1) =>
            setPastJourneys(res1.data)
        ).then(() => setRefreshing(false));

        JourneyService.getScheduledJourneys().then((res2) =>
            setScheduledJourneys(res2.data)
        ).then(() => setRefreshing(false));
    };

    useEffect(() => {
        return props.navigation.addListener("focus", loadJourneys);
    }, [props.navigation]);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={[JourneyStartPageStyle.page, { backgroundColor: DM("white") }]}>
            <View style={JourneyStartPageStyle.touchableNavigationBlocks}>
                <TouchableNavigationBlock
                    navigation={props.navigation}
                    navigationName="Search Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-searching.png")}
                    blockName="Search for a Ride"
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
                    blockName="Add a ride"
                    from="#00A3CF"
                    to="#5552A0"
                    reverse={true}
                    width={210}
                    height={140}
                />
            </View>
            <View style={JourneyStartPageStyle.manageJourneysContainer}>
                <Text style={[JourneyStartPageStyle.manageJourneysText, { color: DM("black") }]}>
                    MANAGE RIDES
                </Text>
            </View>
            <ScrollView style={JourneyStartPageStyle.scrollViewStyle}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                contentContainerStyle={{ flexGrow: 10 }}
            >
                <View style={JourneyStartPageStyle.segmentControlContainer}>

                    <TouchableOpacity
                        activeOpacity={1}
                        style={[JourneyStartPageStyle.allJourneys, allButtonStyle, { borderColor: DM("black") }]}
                        onPress={() => {
                            setSelectedIndex(FIRST_ELEMENT_INDEX);
                            setAllButtonStyle(activeButtonStyle);
                            setPastButtonStyle(inactiveButtonStyle);
                            setUpcomingButtonStyle(inactiveButtonStyle);
                            setScheduledButtonStyle(inactiveButtonStyle);
                            setAllButtonTextStyle(activeButtonTextStyle);
                            setPastButtonTextStyle(inactiveButtonTextStyle);
                            setUpcomingButtonTextStyle(inactiveButtonTextStyle);
                            setScheduledButtonTextStyle(inactiveButtonTextStyle);
                        }}
                    >
                        <Text
                            style={[
                                JourneyStartPageStyle.buttonText,
                                allButtonTextStyle
                            ]}
                        >
                            All
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[
                            JourneyStartPageStyle.pastJourneys,
                            pastButtonStyle,
                            { borderColor: DM("black") }
                        ]}
                        onPress={() => {
                            setSelectedIndex(SECOND_ELEMENT_INDEX);
                            setAllButtonStyle(inactiveButtonStyle);
                            setPastButtonStyle(activeButtonStyle);
                            setUpcomingButtonStyle(inactiveButtonStyle);
                            setScheduledButtonStyle(inactiveButtonStyle);
                            setAllButtonTextStyle(inactiveButtonTextStyle);
                            setPastButtonTextStyle(activeButtonTextStyle);
                            setUpcomingButtonTextStyle(inactiveButtonTextStyle);
                            setScheduledButtonTextStyle(inactiveButtonTextStyle);
                        }}
                    >
                        <Text
                            style={[
                                JourneyStartPageStyle.buttonText,
                                pastButtonTextStyle
                            ]}
                        >
                            Past
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[
                            JourneyStartPageStyle.upcomingJourneys,
                            upcomingButtonStyle,
                            { borderColor: DM("black") }
                        ]}
                        onPress={() => {
                            setSelectedIndex(THIRD_ELEMENT_INDEX);
                            setAllButtonStyle(inactiveButtonStyle);
                            setPastButtonStyle(inactiveButtonStyle);
                            setUpcomingButtonStyle(activeButtonStyle);
                            setScheduledButtonStyle(inactiveButtonStyle);
                            setAllButtonTextStyle(inactiveButtonTextStyle);
                            setPastButtonTextStyle(inactiveButtonTextStyle);
                            setUpcomingButtonTextStyle(activeButtonTextStyle);
                            setScheduledButtonTextStyle(inactiveButtonTextStyle);
                        }}
                    >
                        <Text
                            style={[
                                JourneyStartPageStyle.buttonText,
                                upcomingButtonTextStyle
                            ]}
                        >
                            Upcoming
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[
                            JourneyStartPageStyle.scheduledJourneys,
                            scheduledButtonStyle,
                            { borderColor: DM("black") }
                        ]}
                        onPress={() => {
                            setSelectedIndex(FOURTH_ELEMENT_INDEX);
                            setAllButtonStyle(inactiveButtonStyle);
                            setPastButtonStyle(inactiveButtonStyle);
                            setUpcomingButtonStyle(inactiveButtonStyle);
                            setScheduledButtonStyle(activeButtonStyle);
                            setAllButtonTextStyle(inactiveButtonTextStyle);
                            setPastButtonTextStyle(inactiveButtonTextStyle);
                            setUpcomingButtonTextStyle(inactiveButtonTextStyle);
                            setScheduledButtonTextStyle(activeButtonTextStyle);
                        }}
                    >
                        <Text
                            style={[
                                JourneyStartPageStyle.buttonText,
                                scheduledButtonTextStyle
                            ]}
                        >
                            Regular
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {selectedIndex === FIRST_ELEMENT_INDEX && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {upcomingJourneys.length > EMPTY_COLLECTION_LENGTH && (
                        <Text style={[JourneyStartPageStyle.tabTextStyle, { color: DM("black") }]}>
                            Upcoming
                        </Text>
                    )}
                    {<JourneyCardList journey={upcomingJourneys} ascending />}

                    {pastJourneys.length > EMPTY_COLLECTION_LENGTH && (
                        <Text style={[JourneyStartPageStyle.tabTextStyle, { color: DM("black") }]}>
                            Past
                        </Text>
                    )}
                    {<JourneyCardList journey={pastJourneys} />}

                    {scheduledJourneys.length > EMPTY_COLLECTION_LENGTH && (
                        <Text style={[JourneyStartPageStyle.tabTextStyle, { color: DM("black") }]}>
                            Regular
                        </Text>
                    )}
                    {<JourneyCardList journey={scheduledJourneys} />}
                </View>
            )}
            {selectedIndex === SECOND_ELEMENT_INDEX && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {<JourneyCardList journey={pastJourneys} />}
                </View>
            )}
            {selectedIndex === THIRD_ELEMENT_INDEX && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {<JourneyCardList journey={upcomingJourneys} ascending />}
                </View>
            )}
            {selectedIndex === FOURTH_ELEMENT_INDEX && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {<JourneyCardList journey={scheduledJourneys} />}
                </View>
            )}
        </ScrollView>
    );
};

export default JourneyStartPage;
