import { createStackNavigator } from "@react-navigation/stack";
import React, { RefObject, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
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
import SearchJourneyMap from "../journey-activity/search-journey-map/SearchJourneyMap";
import Chat from "../../messages/messages-activity/chat/Chat";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";
import HeaderEllipsis from "../../../components/header-ellipsis/HeaderEllipsis";
import HeaderRequestButton from "../../../components/header-request-button/HeaderRequestButton";
import {
    JOURNEY_MORE_OPTIONS_POPUP_HEIGHT,
} from "../../../constants/JourneyConstants";
import {
    HALF_OPACITY,
    MAX_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_HEIGHT,
    MIN_POPUP_POSITION,
    ZERO_OPACITY
} from "../../../constants/StylesConstants";
import {
    ANIMATION_DURATION,
    SLEEP_DURATION,
    animateOpacity,
    sleep
} from "../../../constants/AnimationConstants";
import { FIRST_ELEMENT_INDEX } from "../../../constants/GeneralConstants";
import JourneyDetailsPage from "../journey-activity/journey-details-page/JourneyDetailsPage";
import * as navigation from "../../../components/navigation/Navigation";
import { Host } from "react-native-portalize";
import AddressInputPage from "../journey-activity/address-input-page/AddressInputPage";
import WeekDay from "../../../components/schedule-bottom-popup/WeekDay";
import JourneyInvitationsPage from "../journey-activity/journey-invitations/JourneyInvitationsPage";
import CreateJourneyMoreOptionsPopup from "../../../components/create-journey-more-options-popup/CreateJourneyMoreOptionsPopup";
import { useTheme } from "../../../components/theme/ThemeProvider";
import Preferences from "../../my-profile/my-profile-activity/preferences/Preferences";

const JourneyTabs = () => {
    const { colors } = useTheme();
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);

    const layoutOpacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];
    const journeyOpacity = useState(new Animated.Value(MAX_OPACITY))[FIRST_ELEMENT_INDEX];

    const ridePageMoreOptionsRef = useRef<any>(null);
    const createRideMoreOptionsRef = useRef<any>(null);
    const scheduleMoreOptionsRef = useRef<any>(null);

    const StackTabs = createStackNavigator();

    const fadeIn = () => {
        setVisibility(true);

        animateOpacity(layoutOpacity, HALF_OPACITY, ANIMATION_DURATION);
        animateOpacity(journeyOpacity, HALF_OPACITY, ANIMATION_DURATION);
    };

    const fadeOut = () => {
        animateOpacity(layoutOpacity, ZERO_OPACITY, ANIMATION_DURATION);
        animateOpacity(journeyOpacity, MAX_OPACITY, ANIMATION_DURATION);
    };

    const closeHandle = () => {
        setOpen(false);
        fadeOut();
        (async () => sleep(SLEEP_DURATION))().then(() => setVisibility(false));
    };

    const pressHandle = (ref: RefObject<BottomSheet>) => {
        setOpen(!isOpen);
        setVisibility(!isOpen);
        isOpen ? fadeOut() : fadeIn();
        ref?.current?.snapTo(isOpen ? MAX_POPUP_POSITION : MIN_POPUP_POSITION);
    };

    const closeMoreOptionPopup = (ref: RefObject<BottomSheet>) => {
        setOpen(false);
        setVisibility(false);
        fadeOut();
        ref?.current?.snapTo(MAX_POPUP_POSITION);
    };

    return (
        <View style={JourneyStyle.tabsStyle}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Journey"
                    component={JourneyStartPage}
                    options={{
                        headerTitle: "Ride",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerTitleAlign: "center",
                        headerLeft: () => <View />
                    }}
                />

                <StackTabs.Screen
                    name="Create Journey"
                    options={{
                        headerTitle: "Add a Ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: () => HeaderBackButton({
                            onPress: () => {
                                closeMoreOptionPopup(createRideMoreOptionsRef);
                                navigation.goBack();
                            }
                        }),
                        headerRight: () => HeaderEllipsis(
                            { onPress: () => pressHandle(createRideMoreOptionsRef) })
                    }}
                >
                    {(props: any) => {
                        /* eslint-disable */
                        const weekDayRef = useRef<WeekDay>(WeekDay.None);
                        const isScheduleOpened = useRef(false);
                        /* eslint-enable */

                        return (
                            <>
                                <Animated.View style={isVisible && [HeaderStyle.layout,
                                    { opacity: layoutOpacity, backgroundColor: colors.primary }
                                ]} />

                                <Animated.View style={[HeaderStyle.popUp,
                                    { opacity: journeyOpacity, backgroundColor: colors.white }
                                ]}>
                                    <CreateJourney props={{
                                        ...props,
                                        moreOptionsPopupIsOpen: isOpen,
                                        closeMoreOptionPopup: () => closeMoreOptionPopup(createRideMoreOptionsRef),
                                        weekDay: weekDayRef,
                                    }} />
                                </Animated.View>

                                <CreateJourneyMoreOptionsPopup
                                    pressHandle = {pressHandle}
                                    closeMoreOptionPopup = {closeMoreOptionPopup}
                                    closeHandle = {closeHandle}
                                    createRideMoreOptionsRef = {createRideMoreOptionsRef}
                                    weekDayRef = {weekDayRef}
                                    scheduleMoreOptionsRef = {scheduleMoreOptionsRef}
                                    isScheduleOpened = {isScheduleOpened}
                                    navigation = {navigation}
                                    showAddStop = {true}
                                />
                            </>
                        );
                    }}
                </StackTabs.Screen>

                <StackTabs.Screen
                    name="Address Input"
                    component={AddressInputPage}
                    options={{
                        headerTitle: "Input Address",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerTitleAlign: "center",
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Journey Details"
                    options={{
                        headerTitle: "Publish a Ride",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerTitleAlign: "center",
                        headerLeft: () => HeaderBackButton({
                            onPress: () => {
                                closeMoreOptionPopup(ridePageMoreOptionsRef);
                                navigation.goBack();
                            }
                        }),
                        headerRight: () => HeaderEllipsis(
                            { onPress: () => pressHandle(ridePageMoreOptionsRef) })
                    }}
                >
                    {(props: any) => {
                        /* eslint-disable */
                        const weekDayRef = useRef<WeekDay>(WeekDay.None);
                        const isScheduleOpened = useRef(false);
                        /* eslint-enable */

                        return (
                            <>
                                <Animated.View style={isVisible && [HeaderStyle.layout,
                                    { opacity: layoutOpacity, backgroundColor: colors.primary }
                                ]} />

                                <JourneyDetailsPage
                                    route={props.route}
                                    weekDay={weekDayRef}
                                />

                                <CreateJourneyMoreOptionsPopup
                                    pressHandle = {pressHandle}
                                    closeMoreOptionPopup = {closeMoreOptionPopup}
                                    closeHandle = {closeHandle}
                                    createRideMoreOptionsRef = {ridePageMoreOptionsRef}
                                    weekDayRef = {weekDayRef}
                                    scheduleMoreOptionsRef = {scheduleMoreOptionsRef}
                                    isScheduleOpened = {isScheduleOpened}
                                    navigation = {navigation}
                                    showAddStop = {false}
                                />
                            </>
                        );
                    }}
                </StackTabs.Screen>

                <StackTabs.Screen
                    name="Journey Invitations"
                    component={JourneyInvitationsPage}
                    options={{
                        headerTitle: "Ride Invitations",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerTitleAlign: "center",
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Search Journey"
                    component={SearchJourney}
                    options={{
                        headerTitle: "Search for Ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Journey Page"
                    options={{
                        title: "Ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                        headerRight: () => HeaderEllipsis(
                            { onPress: () => pressHandle(ridePageMoreOptionsRef) })
                    }}
                >
                    {(props: any) => {

                        return (
                            <Host>
                                <Animated.View style={isVisible && [HeaderStyle.layout,
                                    { opacity: layoutOpacity, backgroundColor: colors.primary }
                                ]} />

                                <Animated.View style={[HeaderStyle.popUp,
                                    { opacity: journeyOpacity, backgroundColor: colors.white }
                                ]}>
                                    <JourneyPage props={{
                                        ...props,
                                        moreOptionsPopupIsOpen: isOpen,
                                        closeMoreOptionsPopup: () => closeMoreOptionPopup(ridePageMoreOptionsRef)
                                    }} />
                                </Animated.View>

                                {props.route.params.isDriver &&
                                    <BottomPopup
                                        refForChild={ref => (ridePageMoreOptionsRef.current = ref)}
                                        snapPoints={[MIN_POPUP_HEIGHT, JOURNEY_MORE_OPTIONS_POPUP_HEIGHT]}
                                        enabledInnerScrolling={false}
                                        onCloseEnd={closeHandle}
                                        initialSnap={0}
                                        renderHeader={
                                            <View style={[JourneyPageStyle.headerTitleStyle,
                                                { backgroundColor: colors.white }
                                            ]}>
                                                <Text style={[JourneyPageStyle.headerTextStyle,
                                                    { color: colors.primary }]}>
                                                    MORE OPTIONS
                                                </Text>
                                            </View>
                                        }
                                        renderContent={
                                            <View style={[JourneyPageStyle.panel,
                                                { backgroundColor: colors.white }
                                            ]}>
                                                <MenuButton
                                                    text="Edit ride route"
                                                    isIcon={true}
                                                    onPress={() => {
                                                        pressHandle(ridePageMoreOptionsRef);
                                                        JourneyPage.editJourneyRoute();
                                                    }}
                                                />
                                                <MenuButton
                                                    text="Edit ride details"
                                                    isIcon={true}
                                                    onPress={() => {
                                                        JourneyPage.editJourneyDetails();
                                                        pressHandle(ridePageMoreOptionsRef);
                                                    }} />
                                                <MenuButton
                                                    text="Cancel ride"
                                                    isIcon={true}
                                                    onPress={JourneyPage.showCancelRidePopup}
                                                />
                                            </View>
                                        }
                                    />}
                            </Host>
                        );
                    }}
                </StackTabs.Screen>
                <StackTabs.Screen
                    name="Journey Request Page"
                    component={SearchJourney}
                    options={{
                        title: "Create Ride Request",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                    }}
                />
                <StackTabs.Screen
                    name="OK Search Result"
                    component={OkSearchResult}
                    options={{
                        title: "Search Results",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderRequestButton
                    }}
                />
                <StackTabs.Screen
                    name="Bad Search Result"
                    component={BadSearchResult}
                    options={{
                        title: "Search Results",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton,
                    }}
                />
                <StackTabs.Screen
                    name="Search"
                    component={SearchJourneyMap}
                    options={{
                        title: "Search Ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        headerTitle: "Chat",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Preferences"
                    component={Preferences}
                    options={{
                        headerTitle: "Preferences",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: colors.primary }],
                        headerLeft: HeaderBackButton
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default JourneyTabs;
