import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";
import { Animated, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import ModalPoupStyle from "../../ErrorModal/ModalPoupStyle";
import PopupProps from "./PopupProps";
import PopupStyles from "./PopupStyles";

const Popup = (props: PopupProps) => {
    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(props.visible);
    let CLOSE_ANIMATION = 0;
    let OPEN_ANIMATION = 200;

    const scaleValue = useRef(new Animated.Value(CLOSE_ANIMATION)).current;

    useEffect(() => {
        toggleModal();
    }, [props.visible]);

    const toggleModal = () => {
        if(props.visible){
            setShowModal(true);
            Animated.spring(scaleValue,
                {
                    toValue: 1,
                    useNativeDriver: true
                }).start();
        }
        else{
            setTimeout(() => setShowModal(false), OPEN_ANIMATION);
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
                    <View style={{ marginTop:32 }}>
               		 <Text style = {PopupStyles.headerText}>OOPS!</Text>
           		</View>
	            <View style={{ alignItems: "center" }}>
	                <Image source={require("../../../../assets/images/surprised-car2.png")}
	                    style={PopupStyles.image}/>
	            </View>
	            <Text style={PopupStyles.bodyText}>Something went wrong.</Text>
	            <Text style={PopupStyles.bodyText}>Please, try again.</Text>

	            <View style={{ alignItems: "center", marginTop: 45 }}>
	                <View style={ModalPoupStyle.header}>
	                    <TouchableOpacity
	                        style={PopupStyles.button}
	                        onPress={props.func}
	                    >
	                        <Text style={PopupStyles.buttonText}>Try again</Text>
	                    </TouchableOpacity>
	                </View>
	            </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default Popup;