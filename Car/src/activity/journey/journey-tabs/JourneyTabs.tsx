import { createStackNavigator } from "@react-navigation/stack";
import React, { useRef, useState } from "react";
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
import SearchJourneyMap from "../journey-activity/map-address/SearchJourneyMap";
import Chat from "../../messages/messages-activity/chat/Chat";
import JourneyRequestPage from "../journey-activity/journey-request-page/JourneyRequestPage";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";
import HeaderEllipsis from "../../../components/header-ellipsis/HeaderEllipsis";
import HeaderRequestButton from "../../../components/header-request-button/HeaderRequestButton";
import {
    ANIMATION_DURATION,
    CREATE_JOURNEY_MORE_OPTIONS_POPUP_HEIGHT,
    FIRST_ELEMENT_INDEX,
    HALF_OPACITY,
    JOURNEY_MORE_OPTIONS_POPUP_HEIGHT,
    MAX_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_HEIGHT,
    MIN_POPUP_POSITION,
    SLEEP_DURATION,
    ZERO_OPACITY,
    animateOpacity,
    sleep
} from "../../../constants/Constants";
import DM from "../../../components/styles/DM";
import AddressInputPage from "../journey-activity/create-journey/AddressInputPade/AddressInputPage";
import NewJourneyDetailsPage from "../journey-activity/create-journey/NewJourneyDetailsPage/NewJourneyDetailsPage";

const JourneyTabs = () => {
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);

    const layoutOpacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];
    const journeyOpacity = useState(new Animated.Value(MAX_OPACITY))[FIRST_ELEMENT_INDEX];

    const moreOptionsRef = useRef<BottomSheet>(null);

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

    return (
        <View style={JourneyStyle.tabsStyle}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Journey"
                    component={JourneyStartPage}
                    options={{
                        headerTitle: "Ride",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerTitleAlign: "center",
                        headerLeft: () => <View />
                    }}
                />

                <StackTabs.Screen
                    name="Create Journey"
                    options={{
                        headerTitle: "Add a ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: () => HeaderEllipsis({ onPress: pressHandle })
                    }}
                >
                    {(props: any) => {

                        return (
                            <>
                                <Animated.View style={isVisible && [HeaderStyle.layout,
                                    { opacity: layoutOpacity, backgroundColor: DM("#000000") }
                                ]} />

                                <Animated.View style={[HeaderStyle.popUp,
                                    { opacity: journeyOpacity, backgroundColor: DM("#FFFFFF") }
                                ]}>
                                    <CreateJourney props={props} />
                                </Animated.View>

                                <BottomPopup
                                    refForChild={moreOptionsRef}
                                    snapPoints={[MIN_POPUP_HEIGHT, CREATE_JOURNEY_MORE_OPTIONS_POPUP_HEIGHT]}
                                    enabledInnerScrolling={false}
                                    onCloseEnd={closeHandle}
                                    initialSnap={0}
                                    renderHeader={
                                        <View style={[JourneyPageStyle.headerTitleStyle,
                                            { backgroundColor: DM("white") }
                                        ]}>
                                            <Text style={[JourneyPageStyle.headerTextStyle, { color: DM("black") }]}>
                                                MORE OPTIONS
                                            </Text>
                                        </View>
                                    }
                                    renderContent={
                                        <View style={[JourneyPageStyle.panel, { backgroundColor: DM("white") }]}>
                                            <MenuButton
                                                text="Add Stop"
                                                isIcon={true}
                                                iconName={"add-circle-outline"}
                                                onPress={() => {
                                                    CreateJourney.addStopPressHandler();
                                                    pressHandle();
                                                }}
                                            />
                                            <MenuButton text="Change Preferences" isIcon={true} />
                                        </View>
                                    }
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerTitleAlign: "center",
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="New Journey Details"
                    component={NewJourneyDetailsPage}
                    options={{
                        headerTitle: "Add a ride",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Journey Page"
                    options={{
                        title: "Ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: () => HeaderEllipsis({ onPress: pressHandle })
                    }}
                >
                    {(props: any) => {

                        return (
                            <>
                                <Animated.View style={isVisible && [HeaderStyle.layout,
                                    { opacity: layoutOpacity, backgroundColor: DM("#000000") }
                                ]} />

                                <Animated.View style={[HeaderStyle.popUp,
                                    { opacity: journeyOpacity, backgroundColor: DM("#FFFFFF") }
                                ]}>
                                    <JourneyPage props={props} />
                                </Animated.View>

                                {props.route.params.isDriver && <BottomPopup
                                    refForChild={moreOptionsRef}
                                    snapPoints={[MIN_POPUP_HEIGHT, JOURNEY_MORE_OPTIONS_POPUP_HEIGHT]}
                                    enabledInnerScrolling={false}
                                    onCloseEnd={closeHandle}
                                    initialSnap={0}
                                    renderHeader={

                                        <View style={[JourneyPageStyle.headerTitleStyle,
                                            { backgroundColor: DM("white") }
                                        ]}>
                                            <Text style={[JourneyPageStyle.headerTextStyle, { color: DM("black") }]}>
                                                MORE OPTIONS
                                            </Text>
                                        </View>
                                    }
                                    renderContent={
                                        <View style={[JourneyPageStyle.panel, { backgroundColor: DM("white") }]}>
                                            <MenuButton text="Add stop" isIcon={true} />
                                            <MenuButton text="Edit route" isIcon={true} />
                                            <MenuButton text="Invite SoftServian" isIcon={true} />
                                            <MenuButton text="Cancel ride" isIcon={true} />
                                        </View>
                                    }
                                />}
                            </>
                        );
                    }}
                </StackTabs.Screen>
                <StackTabs.Screen
                    name="Journey Request Page"
                    component={JourneyRequestPage}
                    options={{
                        title: "Confirm Ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                />
                <StackTabs.Screen
                    name="OK Search Result"
                    component={OkSearchResult}
                    options={{
                        title: "Search Results",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                    }}
                />
                <StackTabs.Screen
                    name="Search"
                    component={SearchJourneyMap}
                    options={{
                        title: "Search Ride",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton
                    }}
                />

                <StackTabs.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        headerTitle: "Chat",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderEllipsis
                    }}
                />
            </StackTabs.Navigator>
        </View>
    );
};

export default JourneyTabs;