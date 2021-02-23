import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../models/Journey";
import TouchableCard from "../segment-control-activities/touchable/card/TouchableCard";
import TouchableMapBar from "../segment-control-activities/touchable/map-bar/TouchableMapBar";
import SearchJouneyStyle from "./SearchJouneyStyle";
import * as navigation from "../../../../components/navigation/Navigation";

function SearchJourney() {
    const [journeys, setJourneys] = useState<Array<Journey>>([]);
    const [isLoading, setLoading] = useState(true);

    console.log(journeys);

    useEffect(() => {
        JourneyService.getJourney(1)
            .then((res1) => {
                JourneyService.getJourney(5).then((res2) => {
                    JourneyService.getJourney(7).then((res3) => {
                        JourneyService.getJourney(8).then((res4) => {
                            JourneyService.getJourney(9).then((res5) => {
                                JourneyService.getJourney(11).then((res6) => {
                                    setJourneys([
                                        res1.data,
                                        res2.data,
                                        res3.data,
                                        res4.data,
                                        res5.data,
                                        res6.data,
                                        res1.data,
                                        res2.data,
                                        res3.data,
                                        res4.data,
                                        res5.data,
                                    ]);
                                    setLoading(false);
                                });
                            });
                        });
                    });
                });
            })
            .catch((e) => console.log(e));
    }, []);

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

            <View>
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
                            disabled={isLoading}
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
            </View>
        </ScrollView>
    );
}

export default SearchJourney;
