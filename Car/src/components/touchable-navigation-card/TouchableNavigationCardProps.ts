import { ReactNode } from "react";

interface TouchableNavigationCardProps {
    navigation?: any,
    navigationName: string,
    carId?: number,
    cardName?: string,
    angle?: string
    picture?: ReactNode,
    children?: ReactNode
}

export default TouchableNavigationCardProps;
