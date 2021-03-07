import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TouchableNavigationCard from "../../components/touchable-navigation-card/TouchableNavigationCard";
import MyProfileStyle from "./MyProfileStyle";

const MyProfile = (props: any) => {
    return (
        <View style={MyProfileStyle.container}>
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
                <Text style={MyProfileStyle.text}>Details</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="Preferences"
                cardName="Preferences"
                picture={
                    <Ionicons
                        name={"options-outline"}
                        size={20}
                        style={MyProfileStyle.optionIcon}
                        color="#414045"
                    />
                }
            >
                <Text style={MyProfileStyle.text}>Preferences</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="CarTabs"
                cardName="Your cars"
                picture={<Ionicons name={"car"} size={20} color="#414045" />}
            >
                <Text style={MyProfileStyle.text}>Your cars</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="AddressBookTabs"
                cardName="Address book"
                picture={
                    <Ionicons
                        name={"bookmark-outline"}
                        size={20}
                        color="#414045"
                    />
                }
            >
                <Text style={MyProfileStyle.text}>Address book</Text>
            </TouchableNavigationCard>

            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="SettingsTabs"
                cardName="Settings"
                picture={
                    <Ionicons
                        name={"settings-outline"}
                        size={20}
                        color="#414045"
                    />
                }
            >
                <Text style={MyProfileStyle.text}>Settings</Text>
            </TouchableNavigationCard>
        </View>
    );
};

export default MyProfile;
