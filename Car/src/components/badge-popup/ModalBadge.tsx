import React, { useEffect, useRef, useState } from "react";
import { View, Modal, Animated, Text, Image, TouchableOpacity } from "react-native";
import { navigate } from "../navigation/Navigation";
import { useTheme } from "../theme/ThemeProvider";
import BadgePopupStyles from "./BadgePopupStyles";

const ModalBadge = ({ visible, image, closeFunc }) => {

    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(visible);
    let CLOSE_ANIMATION = 0;
    let OPEN_ANIMATION = 200;

    const scaleValue = useRef(new Animated.Value(CLOSE_ANIMATION)).current;

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
            <View style={[BadgePopupStyles.modalBackGround]}>
                <Animated.View style={[BadgePopupStyles.modalContainer, { transform:[{ scale: scaleValue }],
                    backgroundColor: colors.white }]}>

                    <View style={{ marginTop:32 }}>
               		 <Text style = {[BadgePopupStyles.headerText, { color: colors.primary }]}>CONGRATULATIONS!</Text>
           		</View>
	            <View style={{ alignItems: "center" }}>
	                <Image
	                    source={image}
	                    resizeMode = "contain"
	                    style = {BadgePopupStyles.image}
	                />
	            </View>
	            <View style={{ alignItems: "center", marginTop: 166 }}>
	                <Text style = {[BadgePopupStyles.messageText, { color: colors.secondaryDark }]}>
						You have a new badge!
	                </Text>
	                	<View style={[BadgePopupStyles.header, { marginTop:50 }]}>
	                   		 <TouchableOpacity
	                      		  style={[BadgePopupStyles.button]}
	                        	  onPress={()=>{
                                    closeFunc();
                                    navigate("MyProfileTabs", { screen: "Badges", initial: false, });
                                }}
	                         >
	                     		<Text style={BadgePopupStyles.buttonText}>See more</Text>
	                         </TouchableOpacity>
							 <TouchableOpacity
	                      		  style={[BadgePopupStyles.button, { backgroundColor: colors.white, marginTop: 5 }]}
	                        	  onPress={closeFunc}
	                         >
	                     		<Text style={[BadgePopupStyles.buttonText, { color: colors.primary }]}>Close</Text>
	                         </TouchableOpacity>
	                </View>
	            </View>

                </Animated.View>
            </View>
        </Modal>
    );
};

export default ModalBadge;