import React from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TouchableNavigationCardStyle from "./TouchableNavigationCardStyle";
import * as navigation from "../navigation/Navigation";
import { useTheme } from "../theme/ThemeProvider";
import TouchableNavigationCardProps from "./TouchableNavigationCardProps";

const TouchableNavigationCard = (props: TouchableNavigationCardProps) => {
    const { colors, isThemeDark } = useTheme();

    return (
        <View>
            <TouchableOpacity
                style={[
                    TouchableNavigationCardStyle.cardContainer,
                    { borderBottomColor: !isThemeDark ? colors.secondaryLight : colors.neutralLight, }]}
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
                        color={colors.hover}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableNavigationCard;
