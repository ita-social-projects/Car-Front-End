import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import AuthContext from "../../auth/AuthContext";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import { useTheme } from "../../theme/ThemeProvider";
import HeaderLeaveButtonStyle from "./HeaderLeaveButtonStyle";
import * as navigation from "../../../components/navigation/Navigation";
import { HTTP_STATUS_OK } from "../../../constants/Constants";

const HeaderLeaveButton = (props) => {
    const { colors } = useTheme();
    const user = useContext(AuthContext).user;
    const [LeaveRideModalIsVisible, setLeaveRideModalIsVisible] = useState(false);
    const [LeaveRideSuccessModalIsVisible, setLeaveRideSuccessModalIsVisible] = useState(false);

    return (
        <View >

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
                title={"ARE YOU SURE?"}
                confirmText={"Yes, leave"}
                cancelText={"No, stay"}
                onConfirm={() => {
                    setLeaveRideModalIsVisible(false);
                    JourneyService.deleteUser(
                        props.route.params.journey.id,
                        user!.id!
                    )
                        .then((res) => {
                            if(res.status === HTTP_STATUS_OK) {
                                setLeaveRideSuccessModalIsVisible(true);
                            }
                        });
                }}
                disableModal={() => setLeaveRideModalIsVisible(false)}
                subtitle={"Do you really want to leave the journey?"}
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
