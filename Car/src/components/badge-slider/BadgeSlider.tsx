import React, { useEffect, useRef } from "react";
import Carousel from "react-native-snap-carousel";
import Badge from "../badge/Badge";
import BadgeSliderProps from "./BadgeSliderProps";

const BadgeSlider = React.memo((props:BadgeSliderProps) => {
    const state = useRef(Carousel.prototype);
    const leftBorder = 0;
    const singleIndent = 1;
    const doubleIndent = 2;
    let negativeBadges = Array;

    useEffect(() => {
        negativeBadges = createNegativeArray(props.badges);
    }, []);

    const createNegativeArray = (array) => {
        return new Proxy(array, {
            get (target, prop, receiver) {
                if (typeof prop === "string" && Number(prop) < leftBorder) {
                    prop = target.length + Number(prop);
                }

                return Reflect.get(target, prop, receiver);
            },
        });
    };

    const calculateRightPosition = (current: number, indent: number) : number => {
        const length = props.badges.length;

        return current >= length - indent ? (current+indent) % length : current + indent;
    };

    const onScroll = () => {
        const current = state.current.currentIndex;
        const beforePrevious = current - doubleIndent;
        const previous = current - singleIndent;
        const next = calculateRightPosition(current, singleIndent);
        const afterNext = calculateRightPosition(current, doubleIndent);

        negativeBadges[beforePrevious].scale = 0.5;
        negativeBadges[previous].scale = 0.9;
        props.badges[current].scale = 1;
        props.badges[next].scale = 0.9;
        props.badges[afterNext].scale = 0.5;

        state.current.forceUpdate();
    };

    const renderItem = ({ item }) => {
        return (
            <Badge
                key = {item.name}
                name = {item.name}
                scale = {item.scale}
                description = {item.description}
                points = {item.points}
                isReached = {item.isReached}
                pathUnlocked = {item.pathUnlocked}
                pathLocked = {item.pathLocked}
                type = {item.type}
            />
        );
    };

    return (
        <Carousel
            ref = {state}
            data = {props.badges}
            activeSlideAlignment = {"center"}
            horizontal = {true}
            enableSnap = {true}
            enableMomentum = {true}
            showsHorizontalScrollIndicator = {false}
            loop = {true}
            loopClonesPerSide = {8}
            snapToInterval = {80}
            firstItem = {0}
            sliderWidth = {400}
            itemWidth = {80}
            windowSize = {16}
            scrollEventThrottle = {20}
            inactiveSlideScale = {0.7}
            inactiveSlideOpacity = {0.6}
            renderItem = {renderItem }
            onScroll = {onScroll}
            maxToRenderPerBatch = {100}
        />
    );
});

export default BadgeSlider;
