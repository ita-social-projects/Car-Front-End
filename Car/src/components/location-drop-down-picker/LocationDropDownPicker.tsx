import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useRef } from "react";
import LocationDropDownPickerProps from "./LocationDropDownPickerProps";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Divider } from "react-native-elements";
import LocationDropDownPickerStyle from "./LocationDropDownPickerStyle";

const LocationDropDownPicker = (props: LocationDropDownPickerProps) => {
    const controller = useRef<any>(null);

    return (
        <View style={LocationDropDownPickerStyle.container}>
            <Text style={[LocationDropDownPickerStyle.staticPlaceholder]}>
            </Text>
            <DropDownPicker
                style={LocationDropDownPickerStyle.style}
                arrowStyle={LocationDropDownPickerStyle.arrow}
                customArrowDown={() => (
                    <Ionicons name="caret-down-outline" size={18} />
                )}
                customArrowUp={() => (
                    <Ionicons name="caret-up-outline" size={18} />
                )}
                renderSeperator={() => (
                    <Divider style={LocationDropDownPickerStyle.divider} />
                )}
                dropDownStyle={LocationDropDownPickerStyle.dropDownStyle}
                selectedLabelStyle={LocationDropDownPickerStyle.selectedLabelStyle}
                itemStyle={LocationDropDownPickerStyle.itemStyle}
                items={props.items}
                placeholderStyle={LocationDropDownPickerStyle.staticPlaceholder}
                placeholder={props.placeholder}
                labelStyle={LocationDropDownPickerStyle.labelStyle}
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