import LocationDropDownItem from "../components/location-drop-down-picker/LocationDropDownItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DEFAULT_LOCATION_ICON_ID } from "./AddressConstants";
import React from "react";

export const MAX_LOCATION_NAME_LENGTH = 30;
export const MAX_ADDRESS_NAME_LENGTH = 48;
export const MAX_LOCATION_NAME_LENGTH_VIEW = 20;

export function LOCATION_TYPES (isThemeDark) : LocationDropDownItem[] {
    return(
        [{
            label: "Home", value: 3,
            icon: () => <Ionicons name="home" size={25} color= { isThemeDark ? "#FFFFFF" :"#414045" }/>
        },
        {
            label: "Work", value: 4,
            icon: () => <Ionicons name="briefcase" size={25} color={ isThemeDark ? "#FFFFFF" :"#414045" }/>
        },
        {
            label: "Other", value: DEFAULT_LOCATION_ICON_ID,
            icon: () => <Ionicons name="star" size={25} color={ isThemeDark ? "#FFFFFF" :"#414045" }/>
        }]);
};