import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import JourneyService from "../../../api-service/journey-service/JourneyService";
import Journey from "../../../models/journey/Journey";
import JourneyCardList from "../../components/journey-card/JourneyCardList";
import JourneyStartPageStyle from "./JourneyStartPageStyle";
import Request from "../../../models/request/Request";
import TouchableNavigationBlock from "../../components/touchable-navigation-block/TouchableNavigationBlock";
import {
    FIRST_ELEMENT_INDEX,
    SECOND_ELEMENT_INDEX,
    THIRD_ELEMENT_INDEX,
    FOURTH_ELEMENT_INDEX,
    EMPTY_COLLECTION_LENGTH, FIFTH_ELEMENT_INDEX, SIXTH_ELEMENT_INDEX
} from "../../constants/GeneralConstants";
import NavigationAddListener from "../../types/NavigationAddListener";
import { useTheme } from "../../components/theme/ThemeProvider";
import AsyncStorage from "@react-native-community/async-storage";
import RequestCardList from "../../components/request-card/RequestCardList";

const JourneyStartPage = (props: NavigationAddListener) => {
    const { colors } = useTheme();

    const activeButtonStyle = {
        backgroundColor: colors.white,
        color: colors.primary,
        borderBottomWidth: 2
    };

    const activeButtonTextStyle = {
        backgroundColor: colors.white,
        color: colors.primary
    };

    const inactiveButtonStyle = {
        backgroundColor: colors.white,
        color: colors.hover,
        borderBottomWidth: 0
    };

    const inactiveButtonTextStyle = {
        backgroundColor: colors.white,
        color: colors.hover,
    };

    const [selectedIndex, setSelectedIndex] = useState(FIRST_ELEMENT_INDEX);
    const [allButtonStyle, setAllButtonStyle] = useState(activeButtonStyle);
    const [pastButtonStyle, setPastButtonStyle] = useState(inactiveButtonStyle);
    const [upcomingButtonStyle, setUpcomingButtonStyle] = useState(inactiveButtonStyle);
    const [scheduledButtonStyle, setScheduledButtonStyle] = useState(inactiveButtonStyle);
    const [requestedButtonStyle, setRequestedButtonStyle] = useState(inactiveButtonStyle);
    const [canceledButtonStyle, setCanceledButtonStyle] = useState(inactiveButtonStyle);
    const [allButtonTextStyle, setAllButtonTextStyle] = useState(activeButtonTextStyle);
    const [pastButtonTextStyle, setPastButtonTextStyle] = useState(inactiveButtonTextStyle);
    const [requestedButtonTextStyle, setRequestedButtonTextStyle] = useState(inactiveButtonTextStyle);
    const [canceledButtonTextStyle, setCanceledButtonTextStyle] = useState(inactiveButtonTextStyle);
    const [upcomingButtonTextStyle, setUpcomingButtonTextStyle] =
                                            useState(inactiveButtonTextStyle);
    const [scheduledButtonTextStyle, setScheduledButtonTextStyle] =
                                            useState(inactiveButtonTextStyle);

    const screenHeight = Dimensions.get("screen").height;
    const screenWidth = Dimensions.get("screen").width;
    const sizeOfScreenComparerWidth = 380;
    const sizeOfScreenComparerHeight = 600;
    const sides = {
        "SIDE_OF_100": 100, "SIDE_OF_108": 108, "SIDE_OF_140": 140, "SIDE_OF_150": 150, "SIDE_OF_200": 200
    };

    useEffect(() => {
        setAllButtonStyle(selectedIndex == FIRST_ELEMENT_INDEX ? activeButtonStyle : inactiveButtonStyle);
        setPastButtonStyle(selectedIndex == SECOND_ELEMENT_INDEX ? activeButtonStyle : inactiveButtonStyle);
        setUpcomingButtonStyle(selectedIndex == THIRD_ELEMENT_INDEX ? activeButtonStyle : inactiveButtonStyle);
        setScheduledButtonStyle(selectedIndex == FOURTH_ELEMENT_INDEX ? activeButtonStyle : inactiveButtonStyle);
        setRequestedButtonStyle(selectedIndex == FIFTH_ELEMENT_INDEX ? activeButtonStyle : inactiveButtonStyle);
        setCanceledButtonStyle(selectedIndex == SIXTH_ELEMENT_INDEX ? activeButtonStyle : inactiveButtonStyle);
        setAllButtonTextStyle(selectedIndex == FIRST_ELEMENT_INDEX ? activeButtonTextStyle : inactiveButtonTextStyle);
        setRequestedButtonTextStyle(selectedIndex ==
        FIFTH_ELEMENT_INDEX ? activeButtonTextStyle : inactiveButtonTextStyle);
        setCanceledButtonTextStyle(selectedIndex ==
        FIFTH_ELEMENT_INDEX ? activeButtonTextStyle : inactiveButtonTextStyle);
        setPastButtonTextStyle(selectedIndex == SECOND_ELEMENT_INDEX ? activeButtonTextStyle : inactiveButtonTextStyle);
        setUpcomingButtonTextStyle(
            selectedIndex == THIRD_ELEMENT_INDEX ? activeButtonTextStyle : inactiveButtonTextStyle);
        setScheduledButtonTextStyle(
            selectedIndex == FOURTH_ELEMENT_INDEX ? activeButtonTextStyle : inactiveButtonTextStyle);
    }, [colors, selectedIndex]);

    const [pastJourneys, setPastJourneys] = useState<Array<Journey>>([]);
    const [upcomingJourneys, setUpcomingJourneys] = useState<Array<Journey>>(
        []
    );
    const [scheduledJourneys, setScheduledJourneys] = useState<Array<Journey>>(
        []
    );
    const [requestedJourneys, setRequestedJourneys] = useState<Array<Request>>(
        []
    );
    const [canceledJourneys, setCanceledJourneys] = useState<Array<Journey>>(
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

        JourneyService.getRequestedJourneys().then((res3) =>
            setRequestedJourneys(res3.data)
        ).then(() => setRefreshing(false));

        JourneyService.getCanceledJourneys().then((res4) =>
            setCanceledJourneys(res4.data)
        ).then(() => setRefreshing(false));
    };

    useEffect(() => {
        return props.navigation.addListener("focus", loadJourneys);
    }, [props.navigation]);

    useEffect(()=>{
        AsyncStorage.removeItem("publishRideFieldsState");
    });

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={[JourneyStartPageStyle.page, { backgroundColor: colors.white }]}>
            <View style={JourneyStartPageStyle.touchableNavigationBlocks}>
                <TouchableNavigationBlock
                    navigation={props.navigation}
                    navigationName="Search Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-searching.png")}
                    blockName="Find a Ride"
                    from={colors.greenGradientFrom}
                    to={colors.greenGradientTo}
                    reverse={false}
                    width={(screenWidth > sizeOfScreenComparerWidth) ? (sides.SIDE_OF_150) : (sides.SIDE_OF_140)}
                    height={(screenHeight > sizeOfScreenComparerHeight) ? (sides.SIDE_OF_140) : (sides.SIDE_OF_108)}
                />
                <TouchableNavigationBlock
                    navigation={props.navigation}
                    navigationName="Create Journey"
                    blockImage={require("../../../assets/images/journey/bermuda-delivery-car-service.png")}
                    blockName="Add a ride"
                    from={colors.navyBlueGradientFrom}
                    to={colors.navyBlueGradientTo}
                    reverse={true}
                    width={(screenWidth > sizeOfScreenComparerWidth) ? (sides.SIDE_OF_200) : (sides.SIDE_OF_150)}
                    height={(screenHeight > sizeOfScreenComparerHeight) ? (sides.SIDE_OF_140) : (sides.SIDE_OF_100)}
                />
            </View>
            <View style={JourneyStartPageStyle.manageJourneysWrapper }>
                <View style={JourneyStartPageStyle.manageJourneysContainer}>
                    <Text style={[JourneyStartPageStyle.manageJourneysText, { color: colors.primary }]}>
                        MANAGE RIDES
                    </Text>
                </View>
                <ScrollView style={JourneyStartPageStyle.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={false}
                    contentContainerStyle={{ flexGrow: 10 }}
                >
                    <View style={JourneyStartPageStyle.segmentControlContainer}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[JourneyStartPageStyle.allJourneys, allButtonStyle,
                                { borderColor: colors.primary }]}
                            onPress={() => {
                                setSelectedIndex(FIRST_ELEMENT_INDEX);
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
                                { borderColor: colors.primary }
                            ]}
                            onPress={() => {
                                setSelectedIndex(SECOND_ELEMENT_INDEX);
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
                                { borderColor: colors.primary }
                            ]}
                            onPress={() => {
                                setSelectedIndex(THIRD_ELEMENT_INDEX);
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
                                { borderColor: colors.primary }
                            ]}
                            onPress={() => {
                                setSelectedIndex(FOURTH_ELEMENT_INDEX);
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
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[
                                JourneyStartPageStyle.requestedJourneys,
                                requestedButtonStyle
                            ]}
                            onPress={() => {
                                setSelectedIndex(FIFTH_ELEMENT_INDEX);
                            }}
                        >
                            <Text
                                style={[
                                    JourneyStartPageStyle.buttonText,
                                    requestedButtonTextStyle
                                ]}
                            >
                                Requested
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[
                                JourneyStartPageStyle.canceledJourneys,
                                canceledButtonStyle
                            ]}
                            onPress={() => {
                                setSelectedIndex(SIXTH_ELEMENT_INDEX);
                            }}
                        >
                            <Text
                                style={[
                                    JourneyStartPageStyle.buttonText,
                                    canceledButtonTextStyle
                                ]}
                            >
                                Canceled
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {selectedIndex === FIRST_ELEMENT_INDEX && (
                    <View style={JourneyStartPageStyle.tabStyle}>
                        {upcomingJourneys.length > EMPTY_COLLECTION_LENGTH && (
                            <Text style={[JourneyStartPageStyle.tabTextStyle, { color: colors.primary }]}>
                                Upcoming
                            </Text>
                        )}
                        {<JourneyCardList journey={upcomingJourneys} ascending />}
                        {pastJourneys.length > EMPTY_COLLECTION_LENGTH && (
                            <Text style={[JourneyStartPageStyle.tabTextStyle, { color: colors.primary }]}>
                                Past
                            </Text>
                        )}
                        {<JourneyCardList journey={pastJourneys} isPast={true} />}
                        {scheduledJourneys.length > EMPTY_COLLECTION_LENGTH && (
                            <Text style={[JourneyStartPageStyle.tabTextStyle, { color: colors.primary }]}>
                                Regular
                            </Text>
                        )}
                        {<JourneyCardList journey={scheduledJourneys} />}
                        {requestedJourneys.length > EMPTY_COLLECTION_LENGTH && (
                            <Text style={[JourneyStartPageStyle.tabTextStyle, { color: colors.primary }]}>
                                Upcoming
                            </Text>
                        )}
                        {<RequestCardList request={requestedJourneys} />}
                        {canceledJourneys.length > EMPTY_COLLECTION_LENGTH && (
                            <Text style={[JourneyStartPageStyle.tabTextStyle, { color: colors.primary }]}>
                                Upcoming
                            </Text>
                        )}
                        {<JourneyCardList journey={canceledJourneys} />}
                    </View>
                )}
                {selectedIndex === SECOND_ELEMENT_INDEX && (
                    <View style={JourneyStartPageStyle.tabStyle}>
                        {<JourneyCardList journey={pastJourneys} isPast={true} />}
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
                {selectedIndex === FIFTH_ELEMENT_INDEX && (
                    <View style={JourneyStartPageStyle.tabStyle}>
                        {<RequestCardList request={requestedJourneys} />}
                    </View>
                )}
                {selectedIndex === SIXTH_ELEMENT_INDEX && (
                    <View style={JourneyStartPageStyle.tabStyle}>
                        {<JourneyCardList journey={canceledJourneys} />}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default JourneyStartPage;
