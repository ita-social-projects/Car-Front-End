import { StyleSheet } from "react-native";
import DM from "../../../../../../components/styles/DM";

const EditCarsStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: DM("white")
    },

    carAvatarContainer: {
        height: 200,
        backgroundColor: DM("#C4C4C4"),
        alignItems: "flex-end",
        justifyContent: "flex-end"
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
        marginRight: 24,
        marginLeft: 24
    },

    dropDownContainer: {
        marginVertical: 24
    },

    dropDownPicker: {
        marginBottom: 16
    },

    saveButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
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
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderWidth: 2,
        position: "absolute"
    },

    spinner: {
        marginLeft: 5
    }
});

export default EditCarsStyle;
