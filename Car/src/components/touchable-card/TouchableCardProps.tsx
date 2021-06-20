import { ColorValue } from "react-native";

interface TouchableCardProps {
    onPress?: () => void,
    iconName: string,
    size?: number,
    iconColor: string,
    cardName?: string,
    addressFontColor?: ColorValue,
    address?: string,
    angle?: string
}

export default TouchableCardProps;
