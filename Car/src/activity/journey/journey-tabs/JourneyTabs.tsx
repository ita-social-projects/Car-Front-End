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
import SearchJourneyMap from "../journey-activity/map-address/SearchJourneyMap";
import Chat from "../../messages/messages-activity/chat/Chat";
import HeaderBackButton from "../../../components/header-back-button/HeaderBackButton";
import HeaderEllipsis from "../../../components/header-ellipsis/HeaderEllipsis";
import HeaderRequestButton from "../../../components/header-request-button/HeaderRequestButton";
import {
    CREATE_JOURNEY_MORE_OPTIONS_POPUP_HEIGHT,
    JOURNEY_MORE_OPTIONS_POPUP_HEIGHT,
    NUMBER_OF_STOPS_LIMIT,
    REQUEST_RIDE_POPUP_HEIGHT
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
import DM from "../../../components/styles/DM";
import AddressInputPage from "../journey-activity/create-journey/AddressInputPade/AddressInputPage";
import JourneyDetailsPage from "../journey-activity/journey-details-page/JourneyDetailsPage";
import * as navigation from "../../../components/navigation/Navigation";
import ShadowedBottomPopup from "../../../components/shadowed-bottom-popup/ShadowedBottomPopup";
import ConfirmModal from "../../../components/confirm-modal/ConfirmModal";
import { Host } from "react-native-portalize";

const JourneyTabs = () => {
    const [isNewRequestModalVisible, setNewRequestModalVisible] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);

    const layoutOpacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];
    const journeyOpacity = useState(new Animated.Value(MAX_OPACITY))[FIRST_ELEMENT_INDEX];

    const ridePageMoreOptionsRef = useRef<BottomSheet>(null);
    const createRideMoreOptionsRef = useRef<BottomSheet>(null);

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
        ref?.current?.snapTo(MIN_POPUP_POSITION);
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
                        headerRight: () => HeaderEllipsis(
                            { onPress: () => pressHandle(createRideMoreOptionsRef) })
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
                                    <CreateJourney props={{
                                        ...props,
                                        moreOptionsPopupIsOpen: isOpen,
                                        closeMoreOptionPopup: () => closeMoreOptionPopup(createRideMoreOptionsRef)
                                    }} />
                                </Animated.View>

                                <BottomPopup
                                    refForChild={createRideMoreOptionsRef}
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
                                                text={`Add Stop (${CreateJourney.numberOfAddedStop}/7)`}
                                                isIcon={true}
                                                iconName={"add-circle-outline"}
                                                onPress={() => {
                                                    CreateJourney.addStopPressHandler();
                                                    pressHandle(createRideMoreOptionsRef);
                                                }}
                                                disabled={CreateJourney.numberOfAddedStop === NUMBER_OF_STOPS_LIMIT}
                                            />
                                            <MenuButton
                                                text="Change Preferences"
                                                isIcon={true}
                                                onPress={() => navigation.navigate("MyProfileTabs",
                                                    { screen: "Preferences" })}
                                            />
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
                    name="Journey Details"
                    component={JourneyDetailsPage}
                    options={{
                        headerTitle: "Ride details",
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
                        headerRight: () => HeaderEllipsis(
                            { onPress: () => pressHandle(ridePageMoreOptionsRef) })
                    }}
                >
                    {(props: any) => {

                        return (
                            <Host>
                                <Animated.View style={isVisible && [HeaderStyle.layout,
                                    { opacity: layoutOpacity, backgroundColor: DM("#000000") }
                                ]} />

                                <Animated.View style={[HeaderStyle.popUp,
                                    { opacity: journeyOpacity, backgroundColor: DM("#FFFFFF") }
                                ]}>
                                    <JourneyPage props={{
                                        ...props,
                                        moreOptionsPopupIsOpen: isOpen,
                                        closeMoreOptionPopup: () => pressHandle(ridePageMoreOptionsRef)
                                    }}/>
                                </Animated.View>

                                {props.route.params.isDriver &&
                                    <BottomPopup
                                        refForChild={ridePageMoreOptionsRef}
                                        snapPoints={[MIN_POPUP_HEIGHT, JOURNEY_MORE_OPTIONS_POPUP_HEIGHT]}
                                        enabledInnerScrolling={false}
                                        onCloseEnd={closeHandle}
                                        initialSnap={0}
                                        renderHeader={
                                            <View style={[JourneyPageStyle.headerTitleStyle,
                                                { backgroundColor: DM("white") }
                                            ]}>
                                                <Text style={[JourneyPageStyle.headerTextStyle,
                                                    { color: DM("black") }]}>
                                                    MORE OPTIONS
                                                </Text>
                                            </View>
                                        }
                                        renderContent={
                                            <View style={[JourneyPageStyle.panel,
                                                { backgroundColor: DM("white") }
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
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                    }}
                />
                <StackTabs.Screen
                    name="OK Search Result"
                    options={{
                        title: "Search Results",
                        headerTitleAlign: "center",
                        headerTitleStyle: [HeaderStyle.headerTitleStyle, { color: DM("black") }],
                        headerLeft: HeaderBackButton,
                        headerRight: HeaderRequestButton
                    }}
                    children = {(props: any) => (
                        <>
                            <OkSearchResult
                                journeys={props.route.params.journeys}
                                displayFee={props.route.params.displayFee}
                            />
                            <ConfirmModal
                                visible={isNewRequestModalVisible}
                                title="ARE YOU SURE?"
                                subtitle="You're about to create a ride request with new filters."
                                confirmText="Yes, Create"
                                cancelText="No, Go back"
                                confirmColor={DM("black")}
                                onConfirm={() => {
                                    setNewRequestModalVisible(false);
                                    (async () => sleep(SLEEP_DURATION))().then(() =>
                                        navigation.navigate("Journey Request Page", { isRequest: true }));
                                }}
                                disableModal={() => setNewRequestModalVisible(false)}
                            />
                            <ShadowedBottomPopup
                                snapPoints={[MIN_POPUP_HEIGHT, REQUEST_RIDE_POPUP_HEIGHT]}
                                enabledInnerScrolling={false}
                                initialSnap={0}
                                renderHeader={
                                    <View style={[JourneyPageStyle.headerTitleStyle,
                                        { backgroundColor: DM("white") }
                                    ]}>
                                        <Text style={[JourneyPageStyle.headerTextStyle, { color: DM("black") }]}>
                                            REQUEST A RIDE
                                        </Text>
                                    </View>
                                }
                                renderContent={
                                    <View style={[JourneyPageStyle.panel, { backgroundColor: DM("white") }]}>
                                        <MenuButton
                                            text="With the Previous Filters"
                                            isIcon={true}
                                            onPress={() => {
                                                navigation.navigate("Journey Request Page",
                                                    { isRequest: true, isPreviousFilter: true });
                                                if(ShadowedBottomPopup)
                                                    ShadowedBottomPopup.pressHandle();
                                            }}
                                        />
                                        <MenuButton
                                            text="With New Filters"
                                            isIcon={true}
                                            onPress={() => {
                                                if(ShadowedBottomPopup)
                                                    ShadowedBottomPopup.pressHandle();
                                                setNewRequestModalVisible(true);
                                            }}
                                        />
                                    </View>
                                }
                            />
                        </>
                    )
                    }
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