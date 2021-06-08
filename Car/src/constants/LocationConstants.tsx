import LocationDropDownItem from "../components/location-drop-down-picker/LocationDropDownItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DEFAULT_LOCATION_ICON_ID } from "./AddressConstants";
import React from "react";

export const MAX_LOCATION_NAME_LENGTH = 30;
export const MAX_ADDRESS_NAME_LENGTH = 48;

export const LOCATION_TYPES : LocationDropDownItem[] = [{
    label: "Home", value: 3,
    icon: () => <Ionicons name="home-outline" size={25} color="#414045"/>
},
{
    label: "Work", value: 4,
    icon: () => <Ionicons name="ios-briefcase-outline" size={25} color="#414045"/>
},
{
    label: "Food", value: 5,
    icon: () => <Ionicons name="fast-food-outline" size={25} color="#414045"/>
},
{
    label: "Airport", value: 6,
    icon: () => <Ionicons name="airplane-outline" size={25} color="#414045"/>
},
{
    label: "Hospital", value: 7,
    icon: () => <Ionicons name="bandage-outline" size={25} color="#414045"/>
},
{
    label: "Cinema", value: 8,
    icon: () => <Ionicons name="film-outline" size={25} color="#414045"/>
},
{
    label: "Other", value: DEFAULT_LOCATION_ICON_ID,
    icon: () => <Ionicons name="star-outline" size={25} color="#414045"/>
}];