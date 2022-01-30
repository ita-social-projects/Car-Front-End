import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import ModalPoup from "../../../../ErrorModal/ModalPoup";
import ModalPoupStyle from "../../../../ErrorModal/ModalPoupStyle";
import PopupStyles from "./PopupStyles";

class Popup extends Component {
	static popupInstance

	static show ({ ...config }) {
	    this.popupInstance.start(config);
	}

	static hide () {
	    this.popupInstance.hidePopup();
	}

	state = {
	}

	start ({ ...config }) {
	    this.setState({
	        textBody: config.textBody,
	        callback: config.callback !== undefined ? config.callback : this.defaultCallback(),
	        background: config.background || "rgba(0, 0, 0, 0.5)",
	        isShowing: config.isShowing
	    });
	}

	hidePopup () {
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
               		 <Text style = {PopupStyles.headerText}>OOPS!</Text>
           		</View>
	            <View style={{ alignItems: "center" }}>
	                <Image source={require("../../../../../../assets/images/surprised-car2.png")}
	                    style={PopupStyles.image}/>
	            </View>
	            <Text style={PopupStyles.bodyText}>Something went wrong.</Text>
	            <Text style={PopupStyles.bodyText}>Please, try again.</Text>

	            <View style={{ alignItems: "center", marginTop: 45 }}>
	                <View style={ModalPoupStyle.header}>
	                    <TouchableOpacity
	                        style={PopupStyles.button}
	                        onPress={callback}
	                    >
	                        <Text style={PopupStyles.buttonText}>Try again</Text>
	                    </TouchableOpacity>
	                </View>
	            </View>
	        </ModalPoup>
	    );
	}
}

export default Popup;
