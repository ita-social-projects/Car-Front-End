import {Platform} from "react-native";

export const ProximaNova = {
    Regular: Platform.OS === "ios" ? 'Proxima Nova' : 'proxima_nova_reg'
    , Bold: Platform.OS === "ios" ? 'Proxima Nova Bold' : 'proxima_nova_bold'
};
