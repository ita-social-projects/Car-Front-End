import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TouchableNavigationCard from "./my-profile-activity/touchable-navigation-card/TouchableNavigationCard";

function MyProfile(props: any) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Details"
                cardName="Details"
                picture={
                    <Ionicons
                        name={"person-circle-outline"}
                        size={20}
                        color="#414045"
                    />
                }
            >
                <Text style={{ fontWeight: "bold" }}>Details</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Preferences"
                cardName="Preferences"
                picture={
                    <Ionicons
                        name={"options-outline"}
                        size={20}
                        style={{ transform: [{ rotate: "90deg" }] }}
                        color="#414045"
                    />
                }
            >
                <Text style={{ fontWeight: "bold" }}>Preferences</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="CarTabs"
                cardName="Your cars"
                picture={<Ionicons name={"car"} size={20} color="#414045" />}
            >
                <Text style={{ fontWeight: "bold" }}>Your cars</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="AddressBook"
                cardName="Address book"
                picture={
                    <Ionicons
                        name={"bookmark-outline"}
                        size={20}
                        color="#414045"
                    />
                }
            >
                <Text style={{ fontWeight: "bold" }}>Address book</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Settings"
                cardName="Settings"
                picture={
                    <Ionicons
                        name={"settings-outline"}
                        size={20}
                        color="#414045"
                    />
                }
            >
                <Text style={{ fontWeight: "bold" }}>Settings</Text>
            </TouchableNavigationCard>
        </View>
    );
}
export default MyProfile;
