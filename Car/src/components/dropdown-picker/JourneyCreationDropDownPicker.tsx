import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Divider } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyCreationDropDownPickerStyle from "./JourneyCreationDropDownPickerStyle";
import JourneyCreationDropDownPickerProps from "./JourneyCreationDropDownPickerProps";
import { useTheme } from "../theme/ThemeProvider";

const JourneyCreationDropDownPicker = (props: JourneyCreationDropDownPickerProps) => {
    const { DM } = useTheme();
    const controller = useRef<any>(null);

    useEffect(() => {
        controller.current?.selectItem(props.valueId);
    }, [props.valueId]);

    return (
        <View>
            <Text style={[JourneyCreationDropDownPickerStyle.placeholderStyle, { color: DM("gray") }]}>
                {props.placeholder}
            </Text>
            <DropDownPicker
                items={props?.items}
                controller={instance => {
                    controller.current = instance;
                }}
                customArrowDown={() => (<Ionicons name="caret-down-outline" size={18} color={DM("black")}/>)}
                customArrowUp={() => (<Ionicons name="caret-up-outline" size={18} color={DM("black")}/>)}
                arrowStyle={JourneyCreationDropDownPickerStyle.arrow}
                searchable={props.searchable}
                searchablePlaceholder={"Manual input"}
                searchableStyle={JourneyCreationDropDownPickerStyle.searchable}
                renderSeperator={() => (<Divider style={JourneyCreationDropDownPickerStyle.divider} />)}
                zIndex={props.zIndex}
                placeholder={""}
                style={[JourneyCreationDropDownPickerStyle.style,
                    {
                        backgroundColor: DM("white"),
                        borderColor: DM("black")
                    }]}
                dropDownStyle={[JourneyCreationDropDownPickerStyle.dropDownStyle,
                    {
                        backgroundColor: DM("white"),
                        borderColor: DM("black"),

                    }]}
                selectedLabelStyle={[JourneyCreationDropDownPickerStyle.selectedLabelStyle,
                    {
                        paddingLeft: props.paddingLeft,
                        color: DM("black"),
                        backgroundColor: DM("white")
                    }]}
                itemStyle={{ justifyContent: "flex-start" }}
                labelStyle={{ color: DM("black") }}
                onChangeItem={props.onChangeItem}
                isVisible={props.isVisible}
                onOpen={props.onOpen}
            />
        </View>
    );
};

export default JourneyCreationDropDownPicker;
