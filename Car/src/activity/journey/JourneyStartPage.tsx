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

    const [selectedIndex, setSelectedIndex] = useState(FIRST_ELEMENT_INDEX);
    const [allButtonStyle, setAllButtonStyle] = useState(JourneyStartPageStyle.activeButtonStyle);
    const [pastButtonStyle, setPastButtonStyle] = useState(JourneyStartPageStyle.inactiveButtonStyle);
    const [upcomingButtonStyle, setUpcomingButtonStyle] = useState(JourneyStartPageStyle.inactiveButtonStyle);
    const [scheduledButtonStyle, setScheduledButtonStyle] = useState(JourneyStartPageStyle.inactiveButtonStyle);

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
            <View style={JourneyStartPageStyle.segmentControlContainer}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[JourneyStartPageStyle.allJourneys, DMStyleObject(allButtonStyle)]}
                    onPress={() => {
                        setSelectedIndex(FIRST_ELEMENT_INDEX);
                        setAllButtonStyle(JourneyStartPageStyle.activeButtonStyle);
                        setPastButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setUpcomingButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setScheduledButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                    }}
                >
                    <Text
                        style={[
                            JourneyStartPageStyle.buttonText,
                            DMStyleObject(allButtonStyle)
                        ]}
                    >
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[
                        JourneyStartPageStyle.pastJourneys,
                        DMStyleObject(pastButtonStyle),
                    ]}
                    onPress={() => {
                        setSelectedIndex(SECOND_ELEMENT_INDEX);
                        setAllButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setPastButtonStyle(JourneyStartPageStyle.activeButtonStyle);
                        setUpcomingButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setScheduledButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                    }}
                >
                    <Text
                        style={[
                            JourneyStartPageStyle.buttonText,
                            DMStyleObject(pastButtonStyle)
                        ]}
                    >
                        Past
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[
                        JourneyStartPageStyle.upcomingJourneys,
                        DMStyleObject(upcomingButtonStyle),
                    ]}
                    onPress={() => {
                        setSelectedIndex(THIRD_ELEMENT_INDEX);
                        setAllButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setPastButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setUpcomingButtonStyle(JourneyStartPageStyle.activeButtonStyle);
                        setScheduledButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                    }}
                >
                    <Text
                        style={[
                            JourneyStartPageStyle.buttonText,
                            DMStyleObject(upcomingButtonStyle)
                        ]}
                    >
                        Upcoming
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[
                        JourneyStartPageStyle.scheduledJourneys,
                        DMStyleObject(scheduledButtonStyle),
                    ]}
                    onPress={() => {
                        setSelectedIndex(FOURTH_ELEMENT_INDEX);
                        setAllButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setPastButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setUpcomingButtonStyle(JourneyStartPageStyle.inactiveButtonStyle);
                        setScheduledButtonStyle(JourneyStartPageStyle.activeButtonStyle);
                    }}
                >
                    <Text
                        style={[
                            JourneyStartPageStyle.buttonText,
                            DMStyleObject(scheduledButtonStyle)
                        ]}
                    >
                        Regular
                    </Text>
                </TouchableOpacity>
            </View>

            {selectedIndex === FIRST_ELEMENT_INDEX && (
                <View style={JourneyStartPageStyle.tabStyle}>
                    {upcomingJourneys.length > EMPTY_COLLECTION_LENGTH && (
                        <Text style={[JourneyStartPageStyle.tabTextStyle, { color: DM("black") }]}>
                            Upcoming
                        </Text>
                    )}
                    {<JourneyCardList journey={upcomingJourneys} ascending/>}

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
                    {<JourneyCardList journey={upcomingJourneys} ascending/>}
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
