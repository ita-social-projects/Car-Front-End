import React, { useRef, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import CreateJourney from "../journey-activity/create-journey/CreateJourney";
import SearchJourney from "../journey-activity/search-journey/SearchJourney";
import Journey from "../Journey";
import JourneyPage from "../journey-activity/segment-control-activities/journey-page/JourneyPage";
import JourneyStyle from "../JourneyStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import JourneyTabsStyle from "./JourneyTabsStyle";
import JourneyApplicant from "../journey-activity/segment-control-activities/journey-applicant/JourneyApplicant";
import { JourneyNewApplicant } from "../../../components/journey-new-applicant/JourneyNewApplicant";
import { navigate } from "../../../components/navigation/RootNavigation";
import BottomSheet from "reanimated-bottom-sheet";
import BottomPopup from "../../../components/bottom-popup/BottomPopup";
import MenuButton from "../../../components/bottom-popup/menu-button/MenuButton";
import JourneyPageStyle from "../journey-activity/segment-control-activities/journey-page/JourneyPageStyle";

const StackTabs = createStackNavigator();
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
const JourneyTabs = () => {
  const [isOpen, setOpen] = useState(false);

  const moreOptionsRef = useRef<BottomSheet>(null);

  return (
    <View style={JourneyStyle.tabsStyle}>
      <StackTabs.Navigator>
        <StackTabs.Screen
          name="Journey"
          component={Journey}
          options={{ headerTitleAlign: "center" }}
        />
        <StackTabs.Screen name="Create Journey" component={CreateJourney} />
        <StackTabs.Screen name="Search Journey" component={SearchJourney} />
        <StackTabs.Screen
          name="Journey Page"
          options={{
            title: "Journey",
            headerTitleAlign: "center",
            headerTitleStyle: JourneyTabsStyle.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                style={JourneyTabsStyle.backButtonOpacity}
                onPress={() => {
                  navigate("Journey", {});
                }}
              >
                <Ionicons
                  name={"chevron-back-outline"}
                  size={35}
                  color={"#02A2CF"}
                />
                <View style={JourneyTabsStyle.backButtonTextView}>
                  <Text style={JourneyTabsStyle.backButtonText}>Back</Text>
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableWithoutFeedback
                onPress={() => {
                  moreOptionsRef?.current?.snapTo(isOpen ? 0 : 1);
                  setOpen(!isOpen);
                }}
              >
                <Ionicons
                  name={"ellipsis-horizontal"}
                  size={30}
                  style={JourneyTabsStyle.journeyPageIcon}
                />
              </TouchableWithoutFeedback>
            ),
          }}
        >
          {(props: any) => {
            return (
              <>
                <JourneyPage props={props}/>
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
          name="Applicant Page"
          options={{
            title: "SoftServian",
            headerTitleAlign: "center",
            headerTitleStyle: JourneyTabsStyle.applicantPage,
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
