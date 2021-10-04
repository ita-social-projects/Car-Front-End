import React, { useState, useRef } from "react";
import { Animated } from "react-native";
import {
    HALF_OPACITY,
    MAX_POPUP_POSITION,
    MIN_POPUP_POSITION,
    ZERO_OPACITY
} from "../../constants/StylesConstants";
import {
    sleep,
    animateOpacity,
    ANIMATION_DURATION,
    SLEEP_DURATION
} from "../../constants/AnimationConstants";
import { FIRST_ELEMENT_INDEX } from "../../constants/GeneralConstants";
import BottomPopup from "../bottom-popup/BottomPopup";
import BottomPopupProps from "../bottom-popup/BottomPopupProps";
import { useTheme } from "../theme/ThemeProvider";
import HeaderStyle from "../styles/HeaderStyle";

interface ShadowedBottomPopupComponent {
    pressHandle: () => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    (props: BottomPopupProps): JSX.Element
}

const ShadowedBottomPopup : ShadowedBottomPopupComponent = (props: BottomPopupProps) => {
    const { DM } = useTheme();
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setVisibility] = useState(false);

    const layoutOpacity = useState(new Animated.Value(ZERO_OPACITY))[FIRST_ELEMENT_INDEX];

    const moreOptionsRef = useRef<any>(null);

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
                refForChild={ref => (moreOptionsRef.current = ref)}
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