import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../../components/navigation/Navigation";
import TouchableJourneyStyle from "./TouchableJourneyStyle";

export default function TouchableJourney() {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Journey Page", { journeyId: 1 });
                }}
            >
                <View style={TouchableJourneyStyle.component}>
                    <View style={TouchableJourneyStyle.header}>
                        <Image
                            style={TouchableJourneyStyle.image}
                            source={require("../../../../../../../assets/images/default-user-photo.jpg")}
                        />
                        <View style={TouchableJourneyStyle.driverBlock}>
                            <Text style={TouchableJourneyStyle.driverName}>
                                Maria Kruselnytska's journey
                            </Text>
                            <Text style={TouchableJourneyStyle.driverPosition}>
                                Experience Designer
                            </Text>
                        </View>
                        <View style={TouchableJourneyStyle.rightBlock}>
                            <Text style={TouchableJourneyStyle.time}>now</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={TouchableJourneyStyle.stopsText}>
                            Location A
                        </Text>
                        <Text style={TouchableJourneyStyle.stopsText}>
                            Stop A.1
                        </Text>
                        <Text style={TouchableJourneyStyle.stopsText}>
                            Stop A.2
                        </Text>
                        <Text style={TouchableJourneyStyle.stopsText}>
                            Location B (Your Stop)
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
