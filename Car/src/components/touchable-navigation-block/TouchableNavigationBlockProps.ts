import { ImageSourcePropType } from "react-native";

interface TouchableNavigationBlockProps {
    navigation?: any,
    from: string,
    to: string,
    reverse?: boolean,
    blockName?: string,
    width?: number,
    height?: number,
    blockImage: ImageSourcePropType,
    navigationName?: string
}

export default TouchableNavigationBlockProps;
