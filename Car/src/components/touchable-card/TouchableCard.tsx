import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../theme/ThemeProvider";
import TouchableCardStyle from "./TouchableCardStyle";
import TouchableCardProps from "./TouchableCardProps";

const TouchableCard = (props: TouchableCardProps) => {
    const { colors } = useTheme();

    return (
        <View style={{ backgroundColor: colors.white }}>
            <TouchableOpacity
                style={[TouchableCardStyle.cardContainer,
                    { borderBottomColor: colors.secondaryLight,
                        borderTopColor: colors.secondaryLight, }
                ]}
                onPress={props.onPress}
            >
                <View style={TouchableCardStyle.cardInformationContainer}>
                    <Ionicons
                        style={[TouchableCardStyle.cardIcon]}
                        name={props?.iconName}
                        size={props?.size}
                        color={props?.iconColor}
                    />
                    <View style={TouchableCardStyle.cardTextContainer}>
                        <Text style={[TouchableCardStyle.cardName,
                            { color: colors.primary }]}>
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
