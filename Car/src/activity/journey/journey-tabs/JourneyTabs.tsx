import { createStackNavigator } from "@react-navigation/stack";
import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import {
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { JourneyNewApplicant } from "../../../components/journey-new-applicant/JourneyNewApplicant";
import { navigate } from "../../../components/navigation/Navigation";
import Journey from "../Journey";
import CreateJourney from "../journey-activity/create-journey/CreateJourney";
import SearchJourney from "../journey-activity/search-journey/SearchJourney";
import JourneyApplicant from "../journey-activity/segment-control-activities/journey-applicant/JourneyApplicant";
import JourneyPage from "../journey-activity/segment-control-activities/journey-page/JourneyPage";
import BadSearchResult from "../journey-activity/segment-control-activities/search-results/bad-search-result/BadSearchResult";
import OkSearchResult from "../journey-activity/segment-control-activities/search-results/ok-search-result/OkSearchResult";
import MapGetAddress from "../journey-activity/segment-control-activities/map-address/MapGetAddress";
import JourneyStyle from "../JourneyStyle";
import * as navigation from "../../../components/navigation/Navigation";
import JourneyPageStyle from "../journey-activity/segment-control-activities/journey-page/JourneyPageStyle";
import MenuButton from "../../../components/bottom-popup/menu-button/MenuButton";
import BottomPopup from "../../../components/bottom-popup/BottomPopup";
import BottomSheet from "reanimated-bottom-sheet";
import HeaderStyle from "../../../components/styles/HeaderStyle";

const StackTabs = createStackNavigator();

const JourneyTabs = () => {
    const [isOpen, setOpen] = useState(false);

    const moreOptionsHeader = () => (
        <View style={JourneyPageStyle.headerTitleStyle}>
            <Text style={JourneyPageStyle.headerTextStyle}>More options</Text>
        </View>
    );

    const moreOptionsContent = () => {
        return (
            <View style={JourneyPageStyle.panel}>
                <MenuButton text="Add Stop" onPress={() => {}} />
                <MenuButton text="Edit the Journey" onPress={() => {}} />
                <MenuButton text="Invite Softservian" onPress={() => {}} />
                <MenuButton text="Cancel the Journey" onPress={() => {}} />
            </View>
        );
    };
    const moreOptionsRef = useRef<BottomSheet>(null);

    return (
        <View style={JourneyStyle.tabsStyle}>
            <StackTabs.Navigator>
                <StackTabs.Screen
                    name="Journey"
                    component={Journey}
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
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                <StackTabs.Screen
                    name="Search Journey"
                    component={SearchJourney}
                    options={{
                        headerTitle: "Search for a Journey",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                <StackTabs.Screen
                    name="Journey Page"
                    options={{
                        title: "Journey",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    setOpen(!isOpen);
                                    moreOptionsRef?.current?.snapTo(
                                        isOpen ? 0 : 1
                                    );
                                }}
                            >
                                <Ionicons
                                    name={"ellipsis-horizontal"}
                                    size={30}
                                    style={HeaderStyle.moreOptionsIcon}
                                />
                            </TouchableWithoutFeedback>
                        )
                    }}
                >
                    {(props: any) => {
                        return (
                            <>
                                <JourneyPage props={props} />
                                <BottomPopup
                                    refForChild={moreOptionsRef}
                                    snapPoints={[0, 300]}
                                    renderContent={moreOptionsContent}
                                    initialSnap={0}
                                    renderHeader={moreOptionsHeader}
                                    enabledInnerScrolling={false}
                                    onCloseEnd={() => setOpen(false)}
                                />
                            </>
                        );
                    }}
                </StackTabs.Screen>
                <StackTabs.Screen
                    name="OK Search Result"
                    component={OkSearchResult}
                    options={{
                        title: "Search result",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={HeaderStyle.requestButton}
                                onPress={() => {
                                    navigate("Search Journey", {});
                                }}
                            >
                                <Text style={HeaderStyle.buttonText}>
                                    Request
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />

                <StackTabs.Screen
                    name="Bad Search Result"
                    component={BadSearchResult}
                    options={{
                        title: "Search result",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={HeaderStyle.requestButton}
                                onPress={() => {
                                    navigate("Search Journey", {});
                                }}
                            >
                                <Text style={HeaderStyle.buttonText}>
                                    Request
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
                <StackTabs.Screen
                    name="Get Location From Map"
                    component={MapGetAddress}
                    options={{
                        title: "Search Journey",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text style={HeaderStyle.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={HeaderStyle.requestButton}
                                onPress={() => {
                                    navigate("Search Journey", {});
                                }}
                            ></TouchableOpacity>
                        )
                    }}
                />

                <StackTabs.Screen
                    name="Applicant Page"
                    options={{
                        title: "SoftServian",
                        headerTitleAlign: "center",
                        headerTitleStyle: HeaderStyle.headerTitleStyle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={HeaderStyle.backButtonOpacity}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Ionicons
                                    name={"chevron-back-outline"}
                                    size={35}
                                    color={"#02A2CF"}
                                    style={HeaderStyle.blackButtonText}
                                />
                                <View style={HeaderStyle.backButtonTextView}>
                                    <Text
                                        style={[
                                            HeaderStyle.buttonText,
                                            HeaderStyle.blackButtonText
                                        ]}
                                    >
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    component={JourneyApplicant}
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
