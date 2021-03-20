import React from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TouchableNavigationCardStyle from "./TouchableNavigationCardStyle";
import * as navigation from "../navigation/Navigation";
import DM from "../styles/DM";

const TouchableNavigationCard = (props: any) => {
    return (
        <View>
            <TouchableOpacity
                style={TouchableNavigationCardStyle.cardContainer}
                onPress={() =>
                    navigation.navigate(props?.navigationName, {
                        carId: props.carId
                    })
                }
            >
                <View style={TouchableNavigationCardStyle.cardInformationContainer}>
                    <View style={{ flexDirection: "row" }}>
                        {props.picture != undefined ? (
                            <View style={TouchableNavigationCardStyle.pictureContainer}>
                                {props.picture}
                            </View>
                        ) : (
                            <View />
                        )}
                        <View>{props.children}</View>
                    </View>
                </View>

                <View>
                    <Ionicons
                        name={"chevron-forward-outline"}
                        size={20}
                        color={DM("#414045")}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableNavigationCard;
