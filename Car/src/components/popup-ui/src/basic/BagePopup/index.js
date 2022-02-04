import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { navigate } from "../../../../navigation/Navigation";
import ModalBadge from "./ModalBadge";
import BadgePopupStyles from "./BadgePopupStyles";

class BadgePopup extends Component {
	static popupInstance;

	static show ({ ...config }) {
	    this.popupInstance.start(config);
	}

	static close () {
	    this.popupInstance.closePopup();
	}

	static hide () {
	    this.popupInstance.hidePopup();
	}

	state = {
	};

	start ({ ...config }) {
	    this.setState({
	        textBody: config.textBody,
	        callback: config.callback !== undefined ? config.callback : this.hidePopup,
	        close: config.close !== undefined ? config.close : this.closePopup,
	        background: config.background || "rgba(0, 0, 0, 0.5)",
	        isShowing: config.isShowing,
	        ThemeColorWhite: config.ThemeColorWhite,
	        ThemeColorDark: config.ThemeColorDark,
	        ThemeColorPrimary: config.ThemeColorPrimary
	    });
	}

	closePopup () {
	    this.setState({ isShowing:false });
	}

	hidePopup () {
	    this.setState({
	        isShowing:false
	    });
	    navigate("MyProfileTabs", { screen: "AddressBookTabs" });
	    navigate("AddressBookTabs");
	}

	render () {
	    const { isShowing, callback, close, ThemeColorWhite, ThemeColorDark, ThemeColorPrimary } = this.state;

	    return (
	        <ModalBadge visible={isShowing}>
	            <View style={{ marginTop:32 }}>
               		 <Text style = {[BadgePopupStyles.headerText, { color: ThemeColorPrimary }]}>CONGRATULATIONS!</Text>
           		</View>
	            <View style={{ alignItems: "center" }}>

	            </View>
	            <View style={{ alignItems: "center", marginTop: 166 }}>
	                <Text style = {[BadgePopupStyles.messageText, { color: ThemeColorDark }]}>
						You have a new badge!
	                </Text>
	                	<View style={[BadgePopupStyles.header, { marginTop:50 }]}>
	                   		 <TouchableOpacity
	                      		  style={[BadgePopupStyles.button]}
	                        	  onPress={callback}
	                         >
	                     		<Text style={BadgePopupStyles.buttonText}>See more</Text>
	                         </TouchableOpacity>
							 <TouchableOpacity
	                      		  style={[BadgePopupStyles.button, { backgroundColor: ThemeColorWhite, marginTop: 5 }]}
	                        	  onPress={close}
	                         >
	                     		<Text style={[BadgePopupStyles.buttonText, { color: ThemeColorPrimary }]}>Close</Text>
	                         </TouchableOpacity>
	                </View>
	            </View>
	        </ModalBadge>
	    );
	}
}

export default BadgePopup;
