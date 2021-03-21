import React from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DROP_DOWN_MAX_HEIGHT } from "../../constants/Constants";
import DM from "../styles/DM";
import CarDropDownPickerStyle from "./CarDropDownPickerStyle";

const CarDropDownPicker = (props: any) => (
    <View style={props.required && { justifyContent: "center" }}>
        {props.required && (
            <Text
                style={[
                    CarDropDownPickerStyle.requiredPointer,
                    { zIndex: props.zIndex },
                    { color: DM("red") }
                ]}
            >
                    *
            </Text>
        )}
        <DropDownPicker
            zIndex={props.zIndex}
            customArrowDown={() => (
                <Ionicons name="caret-down-outline" size={14} />
            )}
            customArrowUp={() => (
                <Ionicons name="caret-up-outline" size={14} />
            )}
            items={props.items ?? []}
            searchable={true}
            searchablePlaceholder="Manual input"
            searchablePlaceholderTextColor={DM("gray")}
            searchableError={() => <Text>Not Found</Text>}
            placeholder={props.placeHolder}
            defaultValue={props.defaultValue}
            style={[
                CarDropDownPickerStyle.container,
                props.disabled && CarDropDownPickerStyle.disabledStyle,
                { borderColor: DM("black") }
            ]}
            dropDownStyle={[CarDropDownPickerStyle.dropDownStyle, { borderColor: DM("black") }]}
            containerStyle={[{ height: 48 }, props.style]}
            placeholderStyle={[
                CarDropDownPickerStyle.placeholderStyle,
                props.required && { paddingLeft: 12 },
                { color: DM("#909095") }
            ]}
            selectedLabelStyle={[
                CarDropDownPickerStyle.placeholderStyle,
                { color: DM("black") },
                props.required && { paddingLeft: 12 }
            ]}
            itemStyle={[CarDropDownPickerStyle.itemStyle, { backgroundColor: DM("#F0F0F0") }]}
            onChangeItem={
                props.selectHandle
                    ? (item) => {
                        props.selectHandle(item);
                    }
                    : () => <></>
            }
            dropDownMaxHeight={DROP_DOWN_MAX_HEIGHT}
            autoScrollToDefaultValue={true}
            disabled={props.disabled}
            controller={props.controller}
            onOpen={props.onOpen}
        />
    </View>
);

export default CarDropDownPicker;
