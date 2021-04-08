import { Alert } from "react-native";

function FreeButtonChoiceAlert () {
    Alert.alert(
        "Free journey!",
        "Participants will be informed that your journey is totally free!",
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
