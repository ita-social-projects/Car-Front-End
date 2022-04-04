import React from "react";
import NotificationButtonGroup from "../../../notification-buttons/NotificationButtonGroup";
import NotificationHeader from "../../../notification-header/NotificationHeader";
import NotificationProps from "../../../NotificationProps";
import NotificationConfirmButton from "../../../notification-buttons/NotificationConfirmButton";
import * as navigation from "../../../../navigation/Navigation";
import NotificationDeclineButton from "../../../notification-buttons/NotificationDeclineButton";
import { Text, View } from "react-native";
import PassengerWithdrawalViewStyle from "../withdrawn-view/PassengerWithdrawalViewStyle";
import JourneyDetailsUpdateViewStyle from "./JourneyDetailsUpdateViewStyle";
import { useTheme } from "../../../../theme/ThemeProvider";

interface InvitationViewProps {
    route: {
        params: {
            notification: NotificationProps
        }
    }
}

const JourneyDetailsUpdateView = (props: InvitationViewProps) => {
    const params = props.route.params.notification;
    const { colors } = useTheme();

    return (
        <>
            <View style={[
                PassengerWithdrawalViewStyle.window,
            ]}>
                <NotificationHeader
                    title="RIDE DETAILS ARE UPDATED"
                    sender={params.sender}
                />
                <View style={[JourneyDetailsUpdateViewStyle.messageContainer, {
                    borderTopColor: colors.disableBack,
                    borderBottomColor: colors.disableBack,
                }]}>
                    <Text style={[JourneyDetailsUpdateViewStyle.message, { color: colors.primary }]}>
                        {`The details of the ${params.sender?.name}'s ride have been updated!`}
                    </Text>
                </View>
                <View style={[
                    JourneyDetailsUpdateViewStyle.buttonContainer,
                ]}>
                </View>
                <NotificationButtonGroup>
                    <NotificationConfirmButton
                        confirmText={"VIEW"}
                        onConfirm={() => {
                            navigation.navigate("Journey Page", {
                                journeyId: params.journeyId,
                                isDriver: false,
                                isPassenger: true
                            });
                        }}
                    />
                    <NotificationDeclineButton
                        declineText={"Skip"}
                        onDecline={() => navigation.goBack()}
                    />
                </NotificationButtonGroup>
            </View>
        </>
    );
};

export default JourneyDetailsUpdateView;