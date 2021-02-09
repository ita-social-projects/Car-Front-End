import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { JourneyNewApplicant } from "../../../components/journey-new-applicant/JourneyNewApplicant";
import { navigate } from "../../../components/navigation/RootNavigation";
import Journey from "../Journey";
import CreateJourney from "../journey-activity/create-journey/CreateJourney";
import SearchJourney from "../journey-activity/search-journey/SearchJourney";
import JourneyApplicant from "../journey-activity/segment-control-activities/journey-applicant/JourneyApplicant";
import JourneyPage from "../journey-activity/segment-control-activities/journey-page/JourneyPage";
import BadSearchResult from "../journey-activity/segment-control-activities/search-results/bad-search-result/BadSearchResult";
import OkSearchResult from "../journey-activity/segment-control-activities/search-results/ok-search-result/OkSearchResult";
import JourneyStyle from "../JourneyStyle";
import JourneyTabsStyle from "./JourneyTabsStyle";

const StackTabs = createStackNavigator();

const JourneyTabs = () => {
  const [isOpen, setOpen] = useState(false);
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
                  <Text style={JourneyTabsStyle.buttonText}>Back</Text>
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableWithoutFeedback onPress={() => setOpen(!isOpen)}>
                <Ionicons
                  name={"ellipsis-horizontal"}
                  size={30}
                  style={JourneyTabsStyle.journeyPageIcon}
                />
              </TouchableWithoutFeedback>
            ),
          }}
        >
          {() => <JourneyPage isOpen={isOpen} setIsOpen={setOpen} />}
        </StackTabs.Screen>

        <StackTabs.Screen
          name="OK Search Result"
          component={OkSearchResult}
          options={{
            title: "Search result",
            headerTitleAlign: "center",
            headerTitleStyle: JourneyTabsStyle.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                style={JourneyTabsStyle.backButtonOpacity}
                onPress={() => {
                  navigate("Search Journey", {});
                }}
              >
                <Ionicons
                  name={"chevron-back-outline"}
                  size={35}
                  color={"#02A2CF"}
                />
                <View style={JourneyTabsStyle.backButtonTextView}>
                  <Text style={JourneyTabsStyle.buttonText}>Back</Text>
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={JourneyTabsStyle.requestButton} onPress={() => { navigate('Search Journey', {}) }}>
                <Text style={JourneyTabsStyle.buttonText}>
                  Request
                </Text>
              </TouchableOpacity>
            ),
          }}
        />

        <StackTabs.Screen
          name="Bad Search Result"
          component={BadSearchResult}
          options={{
            title: "Search result",
            headerTitleAlign: "center",
            headerTitleStyle: JourneyTabsStyle.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                style={JourneyTabsStyle.backButtonOpacity}
                onPress={() => {
                  navigate("Search Journey", {});
                }}
              >
                <Ionicons
                  name={"chevron-back-outline"}
                  size={35}
                  color={"#02A2CF"}
                />
                <View style={JourneyTabsStyle.backButtonTextView}>
                  <Text style={JourneyTabsStyle.buttonText}>Back</Text>
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={JourneyTabsStyle.requestButton} onPress={() => { navigate('Search Journey', {}) }}>
                <Text style={JourneyTabsStyle.buttonText}>
                  Request
                </Text>
              </TouchableOpacity>
            ),
          }}
        />

        <StackTabs.Screen
          name="Applicant Page"
          options={{
            title: "SoftServian",
            headerTitleAlign: "center",
            headerTitleStyle: JourneyTabsStyle.headerTitleStyle,
            headerLeft: () => (
              <TouchableOpacity
                style={JourneyTabsStyle.backButtonOpacity}
                onPress={() => {
                  navigate("Journey Page", {});
                }}
              >
                <Ionicons
                  name={"chevron-back-outline"}
                  size={35}
                  color={"#02A2CF"}
                  style={JourneyTabsStyle.blackButtonText}
                />
                <View style={JourneyTabsStyle.backButtonTextView}>
                  <Text style={[JourneyTabsStyle.buttonText, JourneyTabsStyle.blackButtonText]}>Back</Text>
                </View>
              </TouchableOpacity>
            ),
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
