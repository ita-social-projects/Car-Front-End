import { Animated } from "react-native";

export const ANIMATION_DURATION = 500;
export const SLEEP_DURATION = 700;
export const MODAL_SLEEP_DURATION = 100;
export const REFRESHER_TIMEOUT = 500;
export const MINUTES_OFFSET = 10;

export const animateOpacity = (layout: Animated.Value, opacity: number, duration: number) : void => {
    Animated.timing(layout, {
        toValue: opacity,
        duration: duration,
        useNativeDriver: true
    }).start();
};

export const sleep = (milliseconds: number) =>
    new Promise(resolve => setTimeout(resolve, milliseconds));