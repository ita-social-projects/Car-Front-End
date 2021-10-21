import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../theme/ThemeProvider";
import TouchableMapBarStyle from "./TouchableMapBarStyle";
import TouchableMapBarProps from "./TouchableMapBarProps";

const DEFAULT_MARGIN_HORIZONTAL = 20;

const TouchableMapBar = (props: TouchableMapBarProps) => {
    const { colors } = useTheme();
    let marginBottom = parseInt(props.marginBottom ?? "");
    let marginTop = parseInt(props.marginTop ?? "");
    let flex = parseInt(props.flex ?? "");

    return (
        <View>
            <TouchableOpacity
                disabled={props.disabled}
                onPress={props.onPress}
                style={[
                    TouchableMapBarStyle.container,
                    {
                        marginBottom: marginBottom,
                        marginTop: marginTop,
                        marginHorizontal: props.marginHorizontal ?? DEFAULT_MARGIN_HORIZONTAL,
                        backgroundColor: colors.white,
                        borderColor: props.disabled ? colors.secondaryLight : colors.primary
                    }
                ]}
            >
                <Text style={[TouchableMapBarStyle.insideText,
                    { color: colors.secondaryDark, }
                ]}>
                    {props.directionType + ":"}{" "}
                </Text>
                <Text
                    style={[TouchableMapBarStyle.directionText,
                        { flex: flex, color: props.disabled ? colors.secondaryLight : colors.primary, }]}
                >
                    {props.defaultInputValue}{" "}
                </Text>
                <TouchableOpacity disabled={!props.onIconPress} onPress={props.onIconPress}>
                    <Ionicons
                        style={[
                            TouchableMapBarStyle.barIcon,
                            { transform: [{ rotate: "0deg" }], borderColor: colors.neutralLight, color: props.disabled ? colors.secondaryLight : colors.primary }
                        ]}
                        name={props.iconName}
                        size={22}
                        color={"#414045"}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableMapBar;
