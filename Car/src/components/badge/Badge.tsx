import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import ModalBadgeInfo from "../badge-popup-info/ModalBadgeInfo";
import BadgeProps from "./BadgeProps";

const Badge = (props: BadgeProps) => {
    const [showModal, setShowModal] = useState(false);

    const closePopup = () => {
        setShowModal(false);
    };

    const checkReached = () => {
        if (props.isReached) {
            setShowModal(true);
        }
    };

    return (
        <View style={[{ transform: [{ scale: props.scale }] }]}>
            <TouchableOpacity onPress={checkReached}>
                <Image source={props.isReached ? props.pathUnlocked : props.pathLocked} />
            </TouchableOpacity>
            <ModalBadgeInfo badgeProps={props} visible={showModal} closeFunc={closePopup} />
        </View>
    );
};

export default Badge;
