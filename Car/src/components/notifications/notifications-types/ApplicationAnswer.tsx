import React, { useContext, useState } from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationProps from "../NotificationProps";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../notification-buttons/NotificationDeclineButton";
import { onStopPressHandler } from "./StopNavigationFunction/StopNavigationFunction";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import AuthContext from "../../auth/AuthContext";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import { HTTP_STATUS_OK } from "../../../constants/Constants";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import Stop from "../../../../models/stop/Stop";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import { Text, View } from "react-native";
import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import { SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../constants/GeneralConstants";
import { getJourneyStops } from "../../../utils/JourneyHelperFunctions";
import JourneyNewApplicantViewStyle
    from "../../journey-new-applicant/journey-new-applicant-view/JourneyNewApplicantViewStyle";
import Journey from "../../../../models/journey/Journey";

interface ApplicationAnswerProps {
    notification: NotificationProps,
    notificationTittle: string,
    notificationHeaderTittle: string,
    notificationHeaderMessage: string,
    withWithdraw?: boolean,
    IsDetailsTitleVisible?: boolean,
    IsDepartureTimeVisible?: boolean,
    IsFeeVisible?: boolean,
    IsAvailableSeatsVisible?: boolean,
    IsBaggageVisible?: boolean,
    IsStopsTitleVisible?: boolean,
    journey?: Journey
}

const ApplicationAnswer = (props: ApplicationAnswerProps) => {
    const [notificationModalVisible, setNotificationModalVisible] = useState(props.notification.visible);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
    const user = useContext(AuthContext).user;
    const [stops] = useState<Stop[]>(
        (props?.notification.journey ? getJourneyStops(props.notification.journey) : []) as Stop[]);

    const onStopPress = (stop:Stop, stops:Stop[], journeyPoints: JourneyPoint[], notification: NotificationProps) =>
    {
        setNotificationModalVisible(false);
        onStopPressHandler(stop,stops,journeyPoints, notification);
    };

    const sendWithdraw = () => {
        JourneyService.deleteUser(
            props.notification.journeyId!,
            user?.id!
        ).then((res) => {
            if(res.status === HTTP_STATUS_OK) {
                setWithdrawModalVisible(true);
                NotificationsService.deleteNotification(props.notification.notificationId);
            }
        });
    };
    const closeAndDelete = () => {
        setWithdrawModalVisible(false);
        setNotificationModalVisible(false);
        if(props.notification.onDelete)
            props.notification.onDelete(props.notification.notificationId);
    };

    return (
        <>
            <MinimizedNotification
                notificationId={props.notification.notificationId}
                user={props.notification.sender}
                notificationTitle={props.notificationTittle}
                read={props.notification.read}
                date={props.notification.date}
                openModal={() => setNotificationModalVisible(true)}
            />

            <NotificationModalBase isVisible={notificationModalVisible!} styles={[{}]}>
                <NotificationHeader
                    title={props.notificationHeaderTittle}
                    message={props.notificationHeaderMessage}
                    sender={props.notification.sender}
                    disableModal={() => setNotificationModalVisible(false)}
                />

                <NotificationRideDetails
                    journeyId={props.notification.journeyId!}
                    userId={user?.id!}
                    IsAvailableSeatsVisible={props.IsAvailableSeatsVisible}
                    IsBaggageVisible={props.IsBaggageVisible}
                    IsDepartureTimeVisible={props.IsDepartureTimeVisible}
                    IsDetailsTitleVisible={props.IsDetailsTitleVisible}
                    IsFeeVisible={props.IsFeeVisible}/>
                <Text style={JourneyNewApplicantViewStyle.applicantStopsText}>
                    {props.notification.sender!.name} {props.notification.sender!.surname}`s stops in your ride
                </Text>
                <View>
                    <StopsBlock
                        stops={stops}
                        onStopPress={() => onStopPress}
                        highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                    />
                </View>

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setNotificationModalVisible(false)} />
                    {props.withWithdraw &&
                    <NotificationDeclineButton
                        declineText={"Withdraw"}
                        onDecline={() => setConfirmationModalVisible(true)}
                    />
                    }
                </NotificationButtonGroup>
            </NotificationModalBase>
            {props.withWithdraw &&
            <>
                <ConfirmModal
                    visible={confirmationModalVisible}
                    title="ARE YOU SURE?"
                    subtitle="Are you sure you want to withdraw the ride?"
                    confirmText="Yes, withdraw"
                    cancelText="No, come back"
                    disableModal={() => setConfirmationModalVisible(false)}
                    onConfirm={() => {
                        setConfirmationModalVisible(false);
                        sendWithdraw();
                    }}
                />
                <ConfirmModal
                    visible={withdrawModalVisible}
                    title="Ride is withdrawn"
                    subtitle="Your withdrawal was successfully sent to the driver"
                    confirmText="Ok"
                    hideCancelButton={true}
                    disableModal={closeAndDelete}
                    onConfirm={closeAndDelete}
                />
            </>
            }
        </>
    );
};

export default ApplicationAnswer;
