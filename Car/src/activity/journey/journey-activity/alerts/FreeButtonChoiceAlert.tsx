import { Alert } from "react-native";

function FreeButtonChoiceAlert () {
    Alert.alert(
        "Free ride!",
        "Participants will be informed that your ride is totally free!",
        [
            {
                text: "OK",
                onPress: () => console.log("OK Pressed")
            }
        ],
        { cancelable: false }
    );
}

export default FreeButtonChoiceAlert;
