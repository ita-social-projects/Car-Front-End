import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DROP_DOWN_MAX_HEIGHT } from "../../constants/StylesConstants";
import CarDropDownPickerStyle from "./CarDropDownPickerStyle";
import CarDropDownPickerProps from "./CarDropDownPickerProps";
import { useTheme } from "../theme/ThemeProvider";
import CarDropDownPickerItem from "./CarDropDownItem";

const CarDropDownPicker = (props: CarDropDownPickerProps) => {
    const [customElement, setCustomElement] = useState<CarDropDownPickerItem | null>(null);
    const [items, setItems] = useState<CarDropDownPickerItem[]>([]);
    const [defaultValue, setDefaultValue] = useState<string | null>(null);
    const { colors } = useTheme();

    useEffect(() => {
        setItems(props.items ?? []);

        if(props.defaultItem?.value === "0")
            setCustomElement({ label: props.defaultItem.label, value: "0" });
        setDefaultValue(props.defaultItem?.value ?? null);
    }, [props.items]);

    return(
        <View style={props.required && { justifyContent: "center" }}>
            {props.required && (
                <Text
                    style={[
                        CarDropDownPickerStyle.requiredPointer,
                        { zIndex: props.zIndex },
                        { color: colors.accentRed }
                    ]}
                >
                    *
                </Text>
            )}
            <DropDownPicker
                zIndex={props.zIndex}
                customArrowDown={() => (
                    <Ionicons name="caret-down-outline" size={14} color={colors.primary} />
                )}
                customArrowUp={() => (
                    <Ionicons name="caret-up-outline" size={14} color={colors.primary} />
                )}
                items={customElement && !(items.map(i => i.label).includes(customElement.label))
                    ? [...items, customElement]
                    : items}
                searchable={true}
                searchablePlaceholder="Manual input"
                searchablePlaceholderTextColor={colors.secondaryDark}
                searchableError={() => <Text style={{ color: colors.primary }}>Not found</Text>}
                searchTextInputProps={{ style: { color: colors.primary } }}
                searchableStyle={{ color: colors.primary }}
                placeholder={props.placeHolder}
                defaultValue={defaultValue}
                style={[
                    CarDropDownPickerStyle.container,
                    {
                        borderColor: colors.primary,
                        backgroundColor: colors.white
                    },
                    props.disabled && { borderColor: colors.secondaryDark }
                ]}
                labelStyle={{ color: colors.primary }}
                dropDownStyle={[CarDropDownPickerStyle.dropDownStyle,
                    {
                        borderColor: colors.primary,
                        backgroundColor: colors.white,
                    }]}
                containerStyle={[{ height: 48 }, props.style]}
                placeholderStyle={[
                    CarDropDownPickerStyle.placeholderStyle,
                    props.required && { paddingLeft: 12 },
                    { color: colors.secondaryDark }
                ]}
                selectedLabelStyle={[
                    CarDropDownPickerStyle.placeholderStyle,
                    { color: colors.primary },
                    props.required && { paddingLeft: 12 }
                ]}
                itemStyle={[CarDropDownPickerStyle.itemStyle, { backgroundColor: colors.secondaryLight }]}
                onChangeItem={
                    props.selectHandle
                        ? (item) => {
                        props.selectHandle?.call(props, item);
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
};

export default CarDropDownPicker;
