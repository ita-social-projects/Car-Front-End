import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Divider } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyCreationDropDownPickerStyle from "./JourneyCreationDropDownPickerStyle";
import JourneyCreationDropDownPickerProps from "./JourneyCreationDropDownPickerProps";
import { useTheme } from "../theme/ThemeProvider";

const JourneyCreationDropDownPicker = (props: JourneyCreationDropDownPickerProps) => {
    const { colors } = useTheme();
    const controller = useRef<any>(null);

    useEffect(() => {
        controller.current?.selectItem(props.valueId);
    }, [props.valueId]);

    return (
        <View>
            <View style={{ zIndex: 1 }}>
                <Text style={[JourneyCreationDropDownPickerStyle.placeholderStyle, { color: colors.secondaryDark }]}>
                    {props.placeholder}
                </Text>
            </View>
            <View>
                <DropDownPicker
                    items={props?.items}
                    controller={instance => {
                        controller.current = instance;
                    }}
                    customArrowDown={() => (<Ionicons name="caret-down-outline" size={18} color={colors.primary} />)}
                    customArrowUp={() => (<Ionicons name="caret-up-outline" size={18} color={colors.primary} />)}
                    arrowStyle={JourneyCreationDropDownPickerStyle.arrow}
                    searchable={props.searchable}
                    searchablePlaceholder={"Manual input"}
                    searchableStyle={{ ...JourneyCreationDropDownPickerStyle.searchable, color: colors.primary }}
                    renderSeperator={() => (<Divider style={JourneyCreationDropDownPickerStyle.divider} />)}
                    zIndex={props.zIndex}
                    placeholder={""}
                    style={[JourneyCreationDropDownPickerStyle.style,
                        {
                            backgroundColor: colors.white,
                            borderColor: colors.primary
                        }]}
                    dropDownStyle={[JourneyCreationDropDownPickerStyle.dropDownStyle,
                        {
                            backgroundColor: colors.white,
                            borderColor: colors.primary,

                        }]}
                    selectedLabelStyle={[JourneyCreationDropDownPickerStyle.selectedLabelStyle,
                        {
                            paddingLeft: props.paddingLeft,
                            color: colors.primary,
                            backgroundColor: colors.white
                        }]}
                    itemStyle={{ justifyContent: "flex-start" }}
                    labelStyle={{ color: colors.primary }}
                    onChangeItem={props.onChangeItem}
                    isVisible={props.isVisible}
                    onOpen={props.onOpen}
                />
            </View>
        </View>
    );
};

export default JourneyCreationDropDownPicker;
