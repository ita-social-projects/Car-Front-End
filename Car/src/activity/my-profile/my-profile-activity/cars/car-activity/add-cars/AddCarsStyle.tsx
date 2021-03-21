import { StyleSheet } from "react-native";

const AddCarsStyle = StyleSheet.create({
    wrapper: {
        flex: 1
    },

    carAvatarContainer: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
        height: "40%"
    },

    carButtonUpload: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        alignItems: "center",
        borderWidth: 2,
        marginRight: 24,
        marginBottom: 19
    },

    carButtonUploadText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    },

    inputsContainer: {
        height: "600%",
    },

    dropDownContainer: {
        marginVertical: 24,
        marginRight: 24,
        marginLeft: 24,
    },

    dropDownPicker: {
        marginBottom: 16
    },

    saveButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 0,
        marginBottom: 15,
        marginRight: 24,
        marginLeft: 24,
    },

    carButtonSave: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    carButtonSaveText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20
    },

    carAvatar: {
        borderWidth: 2,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: "absolute"
    },

    spinner: {
        marginLeft: 5
    }
});

export default AddCarsStyle;
