import { StyleSheet } from "react-native";

const ModalPoupStyle = StyleSheet.create ({
    modalBackGround: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        width: 344,
        height: 374,
        paddingHorizontal: 20,
        borderRadius: 16,
        elevation: 20
    },

    header: {
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },

});

export default ModalPoupStyle;