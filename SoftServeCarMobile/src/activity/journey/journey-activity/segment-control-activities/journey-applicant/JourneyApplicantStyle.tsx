import { Platform, StyleSheet } from "react-native";

export const JourneyApplicantStyle = StyleSheet.create({

    headerContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    headerUserAvatar: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#EEEEEE'
    },

    headerUserInformation: {
        marginLeft: 15,
        fontFamily: Platform.OS === "ios" ? 'Proxima Nova' : 'Proxima-Nova-Reg.ttf',
        fontWeight: 'bold'
    },

    headerUserName: {
        lineHeight: 21,
        fontFamily: Platform.OS === "ios" ? 'Proxima Nova' : 'Proxima-Nova-Reg.ttf',
        fontSize: 18,
        marginBottom: 8,
        fontWeight: 'bold'
    },

    headerUserAdditionalData: {
        lineHeight: 14,
        fontSize: 14,
        opacity: 0.5,
        fontFamily: Platform.OS === "ios" ? 'Proxima Nova' : 'Proxima-Nova-Reg.ttf',
        marginBottom: 8
    },

    buttonContainer: {
        top: 90,
        height:51,
        left:-10, 
        width:150,
        borderColor: "#000000",
        borderWidth: 4,
        borderStyle: "solid",
    },

    buttonText: {
        fontFamily: Platform.OS === "ios" ? 'Proxima Nova' : 'Proxima-Nova-Reg.ttf',
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'black',
    },

    footerContainer: {
        color:200,
        padding:50, 
        height:600, 
        left:0, 
        width:300,
        lineHeight: 14,
        fontSize: 14,
        opacity: 1,
        marginBottom: 8,
        fontFamily: Platform.OS === "ios" ? 'Open Sans' : 'OpenSans-Resular.ttf',
    }
});

