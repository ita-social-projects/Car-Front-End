import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useRef } from "react";
import LocationDropDownPickerProps from "./LocationDropDownPickerProps";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Divider } from "react-native-elements";
import LocationDropDownPickerStyle from "./LocationDropDownPickerStyle";
import { useTheme } from "../theme/ThemeProvider";

const LocationDropDownPicker = (props: LocationDropDownPickerProps) => {
    const { colors } = useTheme();
    const controller = useRef<any>(null);

    return (
        <View style={LocationDropDownPickerStyle.container}>
            <Text style={[LocationDropDownPickerStyle.staticPlaceholder, { color: colors.primary }]}>
            </Text>
            <DropDownPicker
                style={[LocationDropDownPickerStyle.style,
                    {
                        borderColor: colors.primary,
                        backgroundColor: colors.white
                    }]}
                arrowStyle={LocationDropDownPickerStyle.arrow}
                customArrowDown={() => (
                    <Ionicons name="caret-down-outline" size={18} color={colors.primary} />
                )}
                customArrowUp={() => (
                    <Ionicons name="caret-up-outline" size={18} color={colors.primary} />
                )}
                renderSeperator={() => (
                    <Divider style={{ backgroundColor: colors.secondaryDark }} />
                )}
                dropDownStyle={[LocationDropDownPickerStyle.dropDownStyle,
                    {
                        backgroundColor: colors.white,
                        borderColor: colors.primary
                    }]}
                selectedLabelStyle={[LocationDropDownPickerStyle.selectedLabelStyle, { color: colors.primary }]}
                itemStyle={LocationDropDownPickerStyle.itemStyle}
                items={props.items}
                placeholderStyle={[LocationDropDownPickerStyle.staticPlaceholder, { color: colors.primary }]}
                placeholder={props.placeholder}
                labelStyle={[LocationDropDownPickerStyle.labelStyle, { color: colors.primary }]}
                onChangeItem={props.onChangeItem}
                isVisible={props.isVisible}
                onOpen={props.onOpen}
                defaultValue={props.defaultValue}

                controller={instance => {
                    controller.current = instance;
                }}

            />
        </View>
    );
};

export default LocationDropDownPicker;