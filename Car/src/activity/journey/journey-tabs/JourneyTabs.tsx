import { createStackNavigator } from "@react-navigation/stack";
import React, { useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import JourneyNewApplicant from "../../../components/journey-new-applicant/JourneyNewApplicant";
import JourneyStartPage from "../JourneyStartPage";
import CreateJourney from "../journey-activity/create-journey/CreateJourney";
import SearchJourney from "../journey-activity/search-journey/SearchJourney";
import JourneyApplicant from "../journey-activity/journey-applicant/JourneyApplicant";
import JourneyPage from "../journey-activity/journey-page/JourneyPage";
import BadSearchResult from "../journey-activity/search-journey/search-results/bad-search-result/BadSearchResult";
import OkSearchResult from "../journey-activity/search-journey/search-results/ok-search-result/OkSearchResult";
import JourneyStyle from "../JourneyStartPageStyle";
import JourneyPageStyle from "../journey-activity/journey-page/JourneyPageStyle";
import MenuButton from "../../../components/menu-button/MenuButton";
import BottomPopup from "../../../components/bottom-popup/BottomPopup";
import BottomSheet from "reanimated-bottom-sheet";
import HeaderStyle from "../../../components/styles/HeaderStyle";
import SearchJourneyMap from "../journey-activity/map-address/SearchJourneyMap";
import Chat from "../../messages/messages-activity/chat/Chat";
import JourneyRequestPage from "../journey-activity/journey-request-page/JourneyRequestPage";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";
import HeaderEllipsis from "../../../components/header-ellipsis/HeaderEllipsis";
import HeaderRequestButton from "../../../components/header-request-button/HeaderRequestButton";
import {
    ANIMATION_DURATION,
    FIRST_ELEMENT_INDEX,
    HALF_OPACITY,
    JOURNEY_MORE_OPTIONS_POPUP_HEIGHT,
    MAX_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_HEIGHT,
    MIN_POPUP_POSITION,
    SLEEP_DURATION,
    ZERO_OPACITY
} from "../../../constants/Constants";

const JourneyTabs = () => {
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);

    const layoutOpacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];
    const journeyOpacity = useState(new Animated.Value(MAX_OPACITY))[FIRST_ELEMENT_INDEX];

    const StackTabs = createStackNavigator();

    const noAction = () => <></>;

    const sleep = (milliseconds: number) =>
        new Promise(resolve => setTimeout(resolve, milliseconds));

    const fadeIn = () => {
        setVisibility(true);

        Animated.timing(layoutOpacity, {
            toValue: HALF_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();

        Animated.timing(journeyOpacity, {
            toValue: HALF_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(layoutOpacity, {
            toValue: ZERO_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();

        Animated.timing(journeyOpacity, {
            toValue: MAX_OPACITY,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    };

    const closeHandle = () => {
        setOpen(false);
        fadeOut();
        (async () => sleep(SLEEP_DURATION))().then(() => setVisibility(false));
    };

    const pressHandle = () => {
        setOpen(!isOpen);

        if (isOpen) {
            fadeOut();
        } else {
            fadeIn();
        }

        moreOptionsRef?.current?.snapTo(
            isOpen ? MAX_POPUP_POSITION : MIN_POPUP_POSITION
        );

    };

    const moreOptionsHeader = () => (
        <View style={JourneyPageStyle.headerTitleStyle}>
            <Text style={JourneyPageStyle.headerTextStyle}>More options</Text>
        </View>
    );

    const moreOptionsContent = () => (
        <View style={JourneyPageStyle.panel}>
            <MenuButton text="Add Stop" onPress={noAction} />
            <MenuButton text="Edit the Journey" onPress={noAction} />
            <MenuButton text="Invite Softservian" onPress={noAction} />
            <MenuButton text="Cancel the Journey" onPress={noAction} />
        </View>
    );

    const moreOptionsRef = useRef<BottomSheet>(null);

    return (
        <View style={JourneyStyle.tabsStyle}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Journey"
                    component={JourneyStartPage}
                    options={{
                        headerTitle: "Journey",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerTitleAlign: "center",
                        headerLeft: () => <View />
                    }}
                />

                <StackTabs.Screen
                    name="Create Journey"
                    component={CreateJourney}
                    options={{
                        headerTitle: "Create a Journey",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Search Journey"
                    component={SearchJourney}
                    options={{
                        headerTitle: "Search for a Journey",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Journey Page"
                    options={{
                        title: "Journey",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton,
                        headerRight: () => HeaderEllipsis({ onPress: pressHandle })
                    }}
                >
                    {(props: any) => {

                        return (
                            <>
                                <Animated.View style={isVisible && [HeaderStyle.layout, { opacity: layoutOpacity }]} />
                                <Animated.View style={[HeaderStyle.popUp, { opacity: journeyOpacity }]}>
                                    <JourneyPage props={props} />
                                </Animated.View>
                                {props.route.params.isDriver && <BottomPopup
                                    refForChild={moreOptionsRef}
                                    snapPoints={[MIN_POPUP_HEIGHT, JOURNEY_MORE_OPTIONS_POPUP_HEIGHT]}
                                    renderContent={moreOptionsContent}
                                    initialSnap={0}
                                    renderHeader={moreOptionsHeader}
                                    enabledInnerScrolling={false}
                                    onCloseEnd={closeHandle}
                                />}
                            </>
                        );
                    }}
                </StackTabs.Screen>
                <StackTabs.Screen
                    name="Journey Request Page"
                    component={JourneyRequestPage}
                    options={{
                        title: "Confirm Journey",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="OK Search Result"
                    component={OkSearchResult}
                    options={{
                        title: "Search result",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderRequestButton
                    }}
                />

                <StackTabs.Screen
                    name="Bad Search Result"
                    component={BadSearchResult}
                    options={{
                        title: "Search result",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton,
                    }}
                />
                <StackTabs.Screen
                    name="Search"
                    component={SearchJourneyMap}
                    options={{
                        title: "Search Journey",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderRequestButton
                    }}
                />

                <StackTabs.Screen
                    name="Applicant Page"
                    component={JourneyApplicant}
                    options={{
                        title: "SoftServian",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        headerTitle: "Chat",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />

                <StackTabs.Screen
                    name="New Applicant Page"
                    component={JourneyNewApplicant}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default JourneyTabs;
