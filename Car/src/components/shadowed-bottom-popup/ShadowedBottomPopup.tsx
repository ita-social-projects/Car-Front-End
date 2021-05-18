import React, { useState, useRef } from "react";
import { Animated } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import {
    animateOpacity,
    ANIMATION_DURATION,
    FIRST_ELEMENT_INDEX,
    HALF_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_POSITION,
    sleep,
    SLEEP_DURATION,
    ZERO_OPACITY
} from "../../constants/Constants";
import BottomPopup from "../bottom-popup/BottomPopup";
import BottomPopupProps from "../bottom-popup/BottomPopupProps";
import DM from "../styles/DM";
import HeaderStyle from "../styles/HeaderStyle";

interface ShadowedBottomPopupComponent {
    pressHandle: () => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    (props: BottomPopupProps): JSX.Element
}

const ShadowedBottomPopup : ShadowedBottomPopupComponent = (props: BottomPopupProps) => {
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);

    const layoutOpacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];

    const moreOptionsRef = useRef<BottomSheet>(null);

    const fadeIn = () => {
        setVisibility(true);

        animateOpacity(layoutOpacity, HALF_OPACITY, ANIMATION_DURATION);
    };

    const fadeOut = () => animateOpacity(layoutOpacity, ZERO_OPACITY, ANIMATION_DURATION);

    const closeHandle = () => {
        setOpen(false);
        fadeOut();
        (async () => sleep(SLEEP_DURATION))().then(() => setVisibility(false));
    };

    ShadowedBottomPopup.pressHandle = () => {
        setOpen(!isOpen);

        if (isOpen) {
            fadeOut();
        } else {
            fadeIn();
        }

        moreOptionsRef?.current?.snapTo(
            isOpen ? MAX_POPUP_POSITION : MIN_POPUP_POSITION
        );
    };

    return (
        <>
            <Animated.View style={isVisible && [HeaderStyle.layout,
                { opacity: layoutOpacity, backgroundColor: DM("#000000") }
            ]} />

            <BottomPopup
                style={props.style}
                refForChild={moreOptionsRef}
                snapPoints={props.snapPoints}
                enabledInnerScrolling={props.enabledInnerScrolling}
                onCloseEnd={() => {
                    if(props.onCloseEnd) {
                        props.onCloseEnd();
                    }
                    closeHandle();
                }}
                initialSnap={props.initialSnap}
                renderHeader={props.renderHeader}
                renderContent={props.renderContent}
            />
        </>
    );
};

ShadowedBottomPopup.pressHandle = () => console.log("Outer BottomPopup pressHandle");

export default ShadowedBottomPopup;