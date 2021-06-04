import { StyleProp, ViewStyle } from "react-native";

interface SwitchSelectorProps {
    leftButtonStyle: StyleProp<ViewStyle>,
    rightButtonStyle: StyleProp<ViewStyle>,
    onLeftButtonPress: () => void,
    onRightButtonPress: () => void,
    title: string,
    leftButtonText: string,
    rightButtonText: string,
    disableLeftButton?: boolean
}

export default SwitchSelectorProps;