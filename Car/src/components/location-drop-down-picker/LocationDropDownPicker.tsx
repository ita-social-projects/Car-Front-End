import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useEffect, useRef } from "react";
import LocationDropDownPickerProps from "./LocationDropDownPickerProps";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Divider } from "react-native-elements";
import LocationDropDownPickerStyle from "./LocationDropDownPickerStyle";

const LocationDropDownPicker = (props: LocationDropDownPickerProps) => {
    const controller = useRef<any>(null);

    useEffect(() => {
    controller.current?.selectItem(props.valueId);
    }, [props.valueId]);

    return (
        <View style={LocationDropDownPickerStyle.container}>
            <Text style={[LocationDropDownPickerStyle.staticPlaceholder]}>

            </Text>
            <DropDownPicker
                style={LocationDropDownPickerStyle.style}
                arrowStyle={LocationDropDownPickerStyle.arrow}
                dropDownStyle={LocationDropDownPickerStyle.dropDownStyle}
                selectedLabelStyle={LocationDropDownPickerStyle.selectedLabelStyle}
                itemStyle={LocationDropDownPickerStyle.itemStyle}
                placeholderStyle={LocationDropDownPickerStyle.staticPlaceholder}
                labelStyle={LocationDropDownPickerStyle.labelStyle}

                placeholder={props.placeholder}
                onChangeItem={props.onChangeItem}
                isVisible={props.isVisible}
                onOpen={props.onOpen}
                items={props.items}
                controller={instance => {
                    controller.current = instance;
                }}
                customArrowDown={() => (<Ionicons name="caret-down-outline" size={18} />)}
                customArrowUp={() => (<Ionicons name="caret-up-outline" size={18} />)}
                renderSeperator={() => (<Divider style={LocationDropDownPickerStyle.divider} />)}
                zIndex={props.zIndex}
            />
        </View>
    );
};

export default LocationDropDownPicker;