import { StyleSheet } from "react-native";
import DM from "../../../../components/styles/DM";

const AddressBookStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DM("white")
    },

    loading: {
        flex: 1
    },

    locationContainer: {
        alignSelf: "stretch",
        justifyContent: "center",
        padding: 8
    },

    name: {
        fontWeight: "bold",
        color: DM("black")
    },

    address: {
        fontWeight: "bold",
        fontSize: 11,
        lineHeight: 16,
        color: DM("#414045")
    },

    message: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        fontSize: 15,
        color: DM("#414045")
    },

    carAvatar: {
        width: 38.5,
        height: 38.5,
        borderRadius: 38.5,
        borderWidth: 3,
        borderColor: DM("#EEEEEE")
    }
});

export default AddressBookStyle;
