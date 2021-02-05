import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SearchJouneyStyle } from "./SearchJouneyStyle";
import TouchableCard from "../segment-control-activities/touchable/card/TouchableCard";
import TouchableMapBar from "../segment-control-activities/touchable/map-bar/TouchableMapBar";

function SearchJourney() {
    return (
        <ScrollView style={SearchJouneyStyle.container}>
            <View style={SearchJouneyStyle.topInputContainer}>
                <TouchableMapBar
                    directionType="From"
                    iconName="disc-outline"
                    defaultInputValue="Your Location"
                    marB="5"
                    marT="23"
                />
                <TouchableMapBar
                    directionType="To"
                    iconName="map"
                    defaultInputValue=""
                    marB="10"
                    marT="10"
                />
            </View>
            <TouchableCard
                cardName="Map"
                iconName="location"
                angle="0"
                address="Choose starting point on the map"
                addressFontColor="black"
            />
            <TouchableCard
                cardName="Home"
                iconName="home-outline"
                angle="0"
                address="Trifon Kunev 26, Sofia"
                addressFontColor="#909095"
            />
            <TouchableCard
                cardName="Work"
                iconName="briefcase-outline"
                angle="0"
                address="SoftServe, Bld. 'Bulgaria' 49"
                addressFontColor="#909095"
            />
            <Text style={SearchJouneyStyle.recentJourneyText}>
                Recent Journeys
            </Text>
            <TouchableCard
                cardName="Bld. 'Bulgaria' 49"
                iconName="ios-time-outline"
                angle="0"
                address="Trifon Kunev 26, Sofia"
                addressFontColor="#909095"
            />
            <TouchableCard
                cardName="Bld. 'Bulgaria' 49"
                iconName="ios-time-outline"
                angle="0"
                address="Trifon Kunev 26, Sofia"
                addressFontColor="#909095"
            />
            <TouchableCard
                cardName="Bld. 'Bulgaria' 49"
                iconName="ios-time-outline"
                angle="0"
                address="Trifon Kunev 26, Sofia"
                addressFontColor="#909095"
            />
            <TouchableCard
                cardName="Bld. 'Bulgaria' 49"
                iconName="ios-time-outline"
                angle="0"
                address="Trifon Kunev 26, Sofia"
                addressFontColor="#909095"
            />
        </ScrollView>
    );
}

export default SearchJourney;
