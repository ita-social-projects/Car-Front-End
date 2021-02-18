import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { container } from "tsyringe";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import { Journey } from "../../../../../models/Journey";
import TouchableCard from "../segment-control-activities/touchable/card/TouchableCard";
import TouchableMapBar from "../segment-control-activities/touchable/map-bar/TouchableMapBar";
import SearchJouneyStyle from "./SearchJouneyStyle";
import * as navigation from "../../../../components/navigation/Navigation";

function SearchJourney() {
    const [journeys, setJourneys] = useState<Array<Journey>>([]);

    const journeyService = container.resolve(JourneyService);

    useEffect(() => {
        journeyService
            .getJourney(1)
            .then((res1) => {
                setJourneys([
                    res1.data,
                    res1.data,
                    res1.data,
                    res1.data,
                    res1.data,
                    res1.data
                ]);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <View style={SearchJouneyStyle.container}>
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

            <ScrollView>
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
                <View style={SearchJouneyStyle.buttonsContainer}>
                    <View style={SearchJouneyStyle.button}>
                        <Button
                            color="#000000"
                            title="OK"
                            onPress={() => {
                                navigation.navigate("OK Search Result", {
                                    journeys: journeys
                                });
                            }}
                        />
                    </View>
                    <View style={SearchJouneyStyle.button}>
                        <Button
                            color="#000000"
                            title="BAD"
                            onPress={() => {
                                navigation.navigate("Bad Search Result", {});
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SearchJourney;