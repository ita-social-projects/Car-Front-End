import {Platform, StyleSheet, View} from "react-native";
import {ProximaNova} from "../../../font-manager";

export const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
        , borderWidth: 1
        , borderColor: "rgba(151, 151, 151, 0.233556)"
        , borderStyle: "solid"
        , borderTopLeftRadius: 16
        , borderTopRightRadius: 16
        , borderBottomRightRadius: 16
        , borderBottomLeftRadius: 16
        , minHeight: '90%'
        , margin: 10
        , paddingTop: 23
        , paddingBottom: 23
        , paddingLeft: 25
        , paddingRight: 25
        , shadowColor: "#414045"
        , shadowOffset: {
            width: 0,
            height: 16,
        }
        , shadowOpacity: 0.2
        , shadowRadius: 6.27

        , elevation: 10
    }
    , row: {
        flex: 1
        , flexDirection: 'row'
        , flexWrap: 'wrap'
        , alignItems: 'flex-start'
    }
    , item50: {
        width: '50%'
    }

    , header: {
        fontFamily: ProximaNova.Bold,
        fontSize: 14,
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        letterSpacing: 0.2,
        textTransform: "uppercase",
        color: "#000000"
    }
    , snooze: {
        fontFamily: ProximaNova.Bold,
        fontSize: 14,
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        textAlign:'right',
        letterSpacing: 0.875,
        textTransform: "capitalize",
        color: "#02A2CF"
    }

});

