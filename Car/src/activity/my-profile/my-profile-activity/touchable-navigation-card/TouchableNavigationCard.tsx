import React from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import cardStyle from "./TouchableNavigationCardStyle";
import * as navigation from "../../../../components/navigation/Navigation";

const TouchableNavigationCard = (props: any) => {
    return (
        <View>
            <TouchableOpacity
                style={cardStyle.cardContainer}
                onPress={() =>
                    navigation.navigate(props?.navigationName, {
                        carId: props.carId
                    })
                }
            >
                <View style={cardStyle.cardInformationContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={cardStyle.pictureContainer}>
                            {props.picture}
                        </View>
                        <View>{props.children}</View>
                    </View>
                </View>

                <View>
                    <Ionicons
                        name={"chevron-forward-outline"}
                        size={20}
                        color={"#414045"}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableNavigationCard;
