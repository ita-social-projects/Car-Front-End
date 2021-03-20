import { StyleSheet } from "react-native";
import DM from "../../components/styles/DM";

const MyProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DM("white")
    },

    optionIcon: {
        transform: [{ rotate: "90deg" }]
    },

    text: {
        color: DM("black"),
        fontWeight: "bold"
    }
});

export default MyProfileStyle;
