import React, { useEffect, useRef, useState } from "react";
import { View, Modal, Animated } from "react-native";
import ModalPoupStyle from "./ModalPoupStyle";
import { useTheme } from "../theme/ThemeProvider";

const ModalPoup = ({ visible, children }) => {
    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(visible);
    let val1 = 0;
    let val2 = 200;

    const scaleValue = useRef(new Animated.Value(val1)).current;

    useEffect(() => {
        toggleModal();
    }, [visible]);

    const toggleModal = () => {
        if(visible){
            setShowModal(true);
            Animated.spring(scaleValue,
                {
                    toValue: 1,
                    useNativeDriver: true
                }).start();
        }
        else{
            setTimeout(() => setShowModal(false), val2);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    };

    return (
        <Modal transparent visible = {showModal}>
            <View style={[ModalPoupStyle.modalBackGround]}>
                <Animated.View style={[ModalPoupStyle.modalContainer, { transform:[{ scale: scaleValue }],
                    backgroundColor: colors.white }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};

export default ModalPoup;