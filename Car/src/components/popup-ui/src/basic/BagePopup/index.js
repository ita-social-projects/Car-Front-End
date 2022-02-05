import React, { Component } from "react";
import { navigate } from "../../../../navigation/Navigation";
import ModalBadge from "./ModalBadge";

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
	        badge: config.badge,
	        isShowing: config.isShowing,
	    });
	}

	closePopup () {
	    this.setState({ isShowing:false });
	}

	hidePopup () {
	    this.setState({
	        isShowing:false
	    });

	    navigate("MyProfileTabs", { screen: "Badges" });
	    navigate("MyProfileTabs");
	}

	get Image () {
	    switch (this.state.badge) {
	        case "beginner_0_1":
	            return require("../../../../../../assets/Badges/Unlocked/beginner_0_1.png");
	        case "beginner_1_1":
	            return require("../../../../../../assets/Badges/Unlocked/beginner_1_1.png");
	        case "elusiveJoe_2_10":
	            return require("../../../../../../assets/Badges/Unlocked/elusiveJoe_2_10.png");
	        case "freelancer_0_5":
	            return require("../../../../../../assets/Badges/Unlocked/freelancer_0_5.png");
	        case "freelancer_1_5":
	            return require("../../../../../../assets/Badges/Unlocked/freelancer_1_5.png");
	        case "frogtraveler_0_50":
	            return require("../../../../../../assets/Badges/Unlocked/frogtraveler_0_50.png");
	        case "jetdriver_1_100":
	            return require("../../../../../../assets/Badges/Unlocked/jetdriver_1_100.png");
	        case "marathondriver_2_100":
	            return require("../../../../../../assets/Badges/Unlocked/marathondriver_2_100.png");
	        case "RideBuddy_0_20":
	            return require("../../../../../../assets/Badges/Unlocked/RideBuddy_0_20.png");
	        case "ridoholic_1_10":
	            return require("../../../../../../assets/Badges/Unlocked/ridoholic_1_10.png");
	        case "sachem_1_20":
	            return require("../../../../../../assets/Badges/Unlocked/sachem_1_20.png");
	        case "Santa_2_500":
	            return require("../../../../../../assets/Badges/Unlocked/Santa_2_500.png");
	        case "scorcher_2 _200":
	            return require("../../../../../../assets/Badges/Unlocked/scorcher_2 _200.png");
	        case "SpaceXdriver_1_200":
	            return require("../../../../../../assets/Badges/Unlocked/SpaceXdriver_1_200.png");
	        case "sprinter_2_50":
	            return require("../../../../../../assets/Badges/Unlocked/sprinter_2_50.png");
	        case "superdriver_1_50":
	            return require("../../../../../../assets/Badges/Unlocked/superdriver_1_50.png");
	        case "travelguru_0 _100":
	            return require("../../../../../../assets/Badges/Unlocked/travelguru_0 _100.png");
	        case "turist_0_10":
	            return require("../../../../../../assets/Badges/Unlocked/turist_0_10.png");
	        case "007_2_300":
	            return require("../../../../../../assets/Badges/Unlocked/007_2_300.png");
	        default:
	            return require("../../../../../../assets/images/surprised-car.png");
	    }
	}

	render () {
	    const { isShowing } = this.state;

	    return (
	        <ModalBadge
	            visible={isShowing}
	            image={this.Image}
	            callbackFunc={() => {BadgePopup.hide();}}
	            closeFunc={() => {BadgePopup.close();}}
	        />
	    );
	}
}

export default BadgePopup;
