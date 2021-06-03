import { ReactNode } from "react";

interface BottomPopupProps {
    refForChild?: any,
    snapPoints?: (string | number)[],
    renderContent?: ReactNode,
    renderHeader?: ReactNode,
    initialSnap?: number,
    enabledInnerScrolling?: boolean,
    enabledGestureInteraction?: boolean,
    onCloseEnd?: () => void,
    style?: object
}

export default BottomPopupProps;
