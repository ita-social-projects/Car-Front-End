import { StyleSheet } from "react-native";
import Font from "../../data/fonts/Font";

const ConfirmModalStyle = StyleSheet.create({
        background: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        window: {
            width: '80%',
            height: 260,
            backgroundColor: 'white',
            opacity:1,
            alignItems: 'center',
            borderRadius: 15,
            paddingVertical: 30,
            justifyContent: 'space-between'
        },
        confirmButton: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: '#d80056',
            paddingVertical: 10,
        },
        confirmButtonText: {
            fontSize: 16,
            fontWeight: "700",
            fontFamily: Font.OpenSans.Extrabold,
            color: 'white'
        },
        cancelButtonText: {
            fontSize: 16,
            fontWeight: "700",
            fontFamily: Font.OpenSans.Extrabold
        }, 
        titleText: {
            fontSize: 16,
            fontWeight: "700",
            fontFamily: Font.OpenSans.Extrabold
        },
        subtitleText: {
            color: '#AFAEAE'
        }
    }
);

export default ConfirmModalStyle;
