import { Text, TextInput } from "react-native";

const ConfigTextScaling = () => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
}

export default ConfigTextScaling;