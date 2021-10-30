import { ReactNode, RefObject } from "react";

interface BottomPopupProps {
    //
    refForChild?: (ref: RefObject<any>) => void,
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
