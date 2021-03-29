import { Alert } from "react-native";

function PaidButtonChoiceAlert () {
    Alert.alert(
        "Paid journey!",
        "Participants will be informed that they'll need to partially pay for a fuel.",
        [
            {
                text: "OK",
                onPress: () => console.log("OK Pressed")
            }
        ],
        { cancelable: false }
    );
}

export default PaidButtonChoiceAlert;