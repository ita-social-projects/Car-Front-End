import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DM from "../styles/DM";
import TouchableCardStyle from "./TouchableCardStyle";

const TouchableCard = (props: any) => {
    return (
        <View style={{ backgroundColor: DM("white") }}>
            <TouchableOpacity
                style={[TouchableCardStyle.cardContainer,
                    { borderBottomColor: DM("#C1C1C5"),
                        borderTopColor: DM("#C1C1C5"), }
                ]}
                onPress={props.onPress}
            >
                <View style={TouchableCardStyle.cardInformationContainer}>
                    <Ionicons
                        style={[TouchableCardStyle.cardIcon]}
                        name={props?.iconName}
                        size={props?.size}
                        color={DM(props?.iconColor)}
                    />
                    <View style={TouchableCardStyle.cardTextContainer}>
                        <Text style={[TouchableCardStyle.cardName,
                            { color: DM("black") }]}>
                            {props.cardName}
                        </Text>
                        <Text
                            style={[
                                TouchableCardStyle.cardAddress,
                                { color: props?.addressFontColor }
                            ]}
                        >
                            {props.address}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableCard;
