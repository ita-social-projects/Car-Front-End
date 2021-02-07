import { Platform } from "react-native";

export const ProximaNova = {
    Regular: Platform.OS === "ios" ? 'Proxima Nova' : 'proxima_nova_reg',
    Bold: Platform.OS === "ios" ? 'Proxima Nova' : 'proxima_nova_bold',
    ExtraBold: Platform.OS === "ios" ? 'Proxima Nova' : 'proxima_nova_extrabold',
    Black: Platform.OS === "ios" ? 'Proxima Nova' : 'proxima_nova_black',
};

export const OpenSans = {
    Regular: Platform.OS === "ios" ? 'Open Sans' : 'open_sans_regular',
    ExtraBold: Platform.OS === "ios" ? 'Open Sans' : 'open_sans_extrabold',
    SemiBold: Platform.OS === "ios" ? 'Open Sans' : 'open_sans_semibold',
    Bold: Platform.OS === "ios" ? 'Open Sans' : 'open_sans_bold',
    Light: Platform.OS === "ios" ? 'Open Sans' : 'open_sans_light',
}
