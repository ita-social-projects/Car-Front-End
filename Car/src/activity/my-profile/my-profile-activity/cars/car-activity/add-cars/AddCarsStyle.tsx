import { StyleSheet } from "react-native";
import DM from "../../../../../../components/styles/DM";

const AddCarsStyle = StyleSheet.create({
    wrapper: {
        backgroundColor: DM("white"),
        flex: 1
    },

    carAvatarContainer: {
        backgroundColor: DM("#C4C4C4"),
        alignItems: "flex-end",
        justifyContent: "flex-end",
        height: "40%"
    },

    carButtonUpload: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: DM("#FFFFFF"),
        alignItems: "center",
        borderWidth: 2,
        borderColor: DM("#000000"),
        marginRight: 24,
        marginBottom: 19
    },

    carButtonUploadText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: DM("black"),
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
        backgroundColor: DM("#000000"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    carButtonSaveText: {
        color: DM("white"),
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
