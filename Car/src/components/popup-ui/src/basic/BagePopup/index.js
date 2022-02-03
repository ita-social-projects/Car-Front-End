import React, { Component, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import ModalPoup from "../../../../ErrorModal/ModalPoup";
import ModalPoupStyle from "../../../../ErrorModal/ModalPoupStyle";
import BadgePopupStyles from "./PopupStyles";

class BadgePopup extends Component {
	static popupInstance;

	static show ({ ...config }) {
	    this.popupInstance.start(config);
	}

	static hide () {
	    this.popupInstance.hidePopup();
	}

	state = {
	};

	start ({ ...config }) {
	    this.setState({
	        textBody: config.textBody,
	        callback: config.callback !== undefined ? config.callback : this.defaultCallback(),
	        background: config.background || "rgba(0, 0, 0, 0.5)",
	        isShowing: config.isShowing
	    });
	}

	hidePopup () {
		this.setState({
			isShowing:false
		})
	}

	defaultCallback () {
	    return Alert.alert(
	        "Callback!",
	        "Callback complete!",
	        [
	            { text: "Ok", onPress: () => this.hidePopup() }
	        ]
	    );
	}

	render () {
	    const { callback, isShowing } = this.state;

	    return (
	        <ModalPoup visible={isShowing}>
	            <View style={{ marginTop:32 }}>
               		 <Text style = {BadgePopupStyles.headerText}>OOPS!</Text>
           		</View>
	            <View style={{ alignItems: "center" }}>
				
	            </View>
	            <Text style={BadgePopupStyles.bodyText}>Something went wrong.</Text>
	            <Text style={BadgePopupStyles.bodyText}>Please, try again.</Text>

	            <View style={{ alignItems: "center", marginTop: 45 }}>
	                <View style={ModalPoupStyle.header}>
	                    <TouchableOpacity
	                        style={BadgePopupStyles.button}
	                        onPress={callback}
	                    >
	                        <Text style={BadgePopupStyles.buttonText}>Try again</Text>
	                    </TouchableOpacity>
	                </View>
	            </View>
	        </ModalPoup>
	    );
	}
}

export default BadgePopup;
