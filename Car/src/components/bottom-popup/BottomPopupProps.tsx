import { MutableRefObject, ReactNode } from "react";

interface BottomPopupProps {
    refForChild?: MutableRefObject<any>,
    snapPoints?: (string | number)[],
    renderContent?: ReactNode,
    renderHeader?: ReactNode,
    initialSnap?: number,
    enabledInnerScrolling?: boolean,
    onCloseEnd?: () => void,
    style?: object
}

export default BottomPopupProps;
