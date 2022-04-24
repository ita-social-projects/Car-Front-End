import React, { useEffect, useRef, useState } from "react";
import { View, Modal, Animated, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import ModalBadgeInfoStyle from "./ModalBadgeInfoStyles";
import ModalProps from "./ModalProps";

const ModalBadgeInfo = (props: ModalProps) => {
    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(props.visible);
    let CLOSE_ANIMATION = 0;
    let OPEN_ANIMATION = 200;

    const scaleValue = useRef(new Animated.Value(CLOSE_ANIMATION)).current;

    useEffect(() => {
        toggleModal();
    }, [props.visible]);

    const toggleModal = () => {
        if (props.visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), OPEN_ANIMATION);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <Modal transparent visible={showModal}>
            <View style={[ModalBadgeInfoStyle.modalBackGround]}>
                <Animated.View
                    style={[
                        ModalBadgeInfoStyle.modalContainer,
                        { transform: [{ scale: scaleValue }], backgroundColor: colors.white },
                    ]}
                >
                    <TouchableOpacity
                        onPress={() => {
                            props.closeFunc();
                        }}
                    >
                        <Text style={[ModalBadgeInfoStyle.headerText, { color: colors.primary }]}>
                            {props.badgeProps.name}
                        </Text>

                        <Image
                            source={props.badgeProps.pathUnlocked}
                            resizeMode="contain"
                            style={ModalBadgeInfoStyle.image}
                        />
                        <Text style={[ModalBadgeInfoStyle.messageText, { color: colors.secondaryDark }]}>
                            {props.badgeProps.description}
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default ModalBadgeInfo;
