import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import AuthContext from "../../auth/AuthContext";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import { useTheme } from "../../theme/ThemeProvider";
import HeaderLeaveButtonStyle from "./HeaderLeaveButtonStyle";
import * as navigation from "../../../components/navigation/Navigation";

const HeaderLeaveButton = (props) => {
    const { colors } = useTheme();
    const user = useContext(AuthContext).user;
    const [LeaveRideModalIsVisible, setLeaveRideModalIsVisible] = useState(false);
    const [LeaveRideSuccessModalIsVisible, setLeaveRideSuccessModalIsVisible] = useState(false);

    return (
        <View>

            <TouchableOpacity
                style={HeaderLeaveButtonStyle.leaveButton}
                onPress={()=>setLeaveRideModalIsVisible(true)}
            >
                <View style={HeaderLeaveButtonStyle.leaveButtonTextContainer}>
                    <Text style={[HeaderLeaveButtonStyle.leaveButtonText, { color: colors.accentOrange }]}>
                        Leave
                    </Text>
                </View>
            </TouchableOpacity>

            <ConfirmModal
                visible={LeaveRideModalIsVisible}
                title={"Leave Ride"}
                confirmText={"Yes"}
                cancelText={"No"}
                onConfirm={() => {
                    setLeaveRideModalIsVisible(false);
                    JourneyService.deleteUser(
                        props.route.params.journeyId,
                        user?.id!).then;
                    setLeaveRideSuccessModalIsVisible(true);

                }}
                disableModal={() => setLeaveRideModalIsVisible(false)}
                subtitle={"Are you sure you want to leave the ride?"}
            />

            <ConfirmModal
                visible={LeaveRideSuccessModalIsVisible}
                title={"Ride leaving"}
                confirmText={"Ok"}
                hideCancelButton={true}
                onConfirm={() => {
                    setLeaveRideModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                disableModal={() => {
                    setLeaveRideModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                subtitle={"Ride was successfully left"}
            />
        </View>

    );
};

export default HeaderLeaveButton;
