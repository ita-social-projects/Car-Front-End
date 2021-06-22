import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useRef } from "react";
import LocationDropDownPickerProps from "./LocationDropDownPickerProps";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Divider } from "react-native-elements";
import LocationDropDownPickerStyle from "./LocationDropDownPickerStyle";
import DM from "../styles/DM";

const LocationDropDownPicker = (props: LocationDropDownPickerProps) => {
    const controller = useRef<any>(null);

    return (
        <View style={LocationDropDownPickerStyle.container}>
            <Text style={[LocationDropDownPickerStyle.staticPlaceholder, { color: DM("black") }]}>
            </Text>
            <DropDownPicker
                style={[LocationDropDownPickerStyle.style,
                    {
                        borderColor: DM("black"),
                        backgroundColor: DM("white")
                    }]}
                arrowStyle={LocationDropDownPickerStyle.arrow}
                customArrowDown={() => (
                    <Ionicons name="caret-down-outline" size={18} color={DM("black")} />
                )}
                customArrowUp={() => (
                    <Ionicons name="caret-up-outline" size={18} color={DM("black")} />
                )}
                renderSeperator={() => (
                    <Divider style={{ backgroundColor: DM("gray") }} />
                )}
                dropDownStyle={[LocationDropDownPickerStyle.dropDownStyle,
                    {
                        backgroundColor: DM("white"),
                        borderColor: DM("black")
                    }]}
                selectedLabelStyle={[LocationDropDownPickerStyle.selectedLabelStyle, { color: DM("black") }]}
                itemStyle={LocationDropDownPickerStyle.itemStyle}
                items={props.items}
                placeholderStyle={[LocationDropDownPickerStyle.staticPlaceholder, { color: DM("black") }]}
                placeholder={props.placeholder}
                labelStyle={[LocationDropDownPickerStyle.labelStyle, { color: DM("black") }]}
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