import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import NotificationProps from "../../notifications/NotificationProps";
import NotificationButtonGroup from "../../notifications/notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../notifications/notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../../notifications/notification-buttons/NotificationDeclineButton";
import RequestComment from "../request-comments/RequestComment";
import Stop from "../../../../models/stop/Stop";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import {
    getApplicantStops,
    getHighlightedStops,
    getStopCoordinates,
} from "../../../utils/JourneyHelperFunctions";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import * as navigation from "../../../components/navigation/Navigation";
import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import AuthContext from "../../../components/auth/AuthContext";
import { HTTP_STATUS_OK } from "../../../constants/Constants";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import { useTheme } from "../../theme/ThemeProvider";
import JourneyNewApplicantViewStyle from "./JourneyNewApplicantViewStyle";
import NotificationRideDetails from "../../notifications/notification-ride-details/NotificationRideDetails";
import { ScrollView } from "react-native-gesture-handler";
import { DEFAULT_PASSANGERS_COUNT } from "../../../constants/JourneyConstants";
import Journey from "../../../../models/journey/Journey";
import NotificationHeader from "../../notifications/notification-header/NotificationHeader";
import NotificationType from "../../../../models/notification/NotificationType";

interface JourneyNewApplicantViewProps {
    route: {
        params: {
            notification: NotificationProps
        }
    }
}

const JourneyNewApplicantView = (props: JourneyNewApplicantViewProps) => {
    const { colors } = useTheme();
    const params = props.route.params.notification;
    const [approveModalVisible,setApproveModalVisible] = useState(false);
    const [declineModalVisible,setDeclineModalVisible] = useState(false);
    const [confirmationModalVisible,setConfirmationModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const data = JSON.parse(params.notificationData);
    const stops: Stop[] = data?.stopsRepresentation ?? [];
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const [journey, setJourney] = useState<Journey>();
    const { user } = useContext(AuthContext);
    const jsonData = JSON.stringify({
        hasLuggage: data?.hasLuggage,
        stopsRepresentation: data?.stopsRepresentation,
        passangersCount: data?.passangersCount ?? DEFAULT_PASSANGERS_COUNT
    });
    const [journeyIsFinished, setJourneyIsFinished] = useState(false);

    useEffect(() => {
        JourneyService.getJourney(params.journeyId).then(res => {
            setJourney(res.data);
            setJourneyPoints(res.data!.journeyPoints);
            setJourneyIsFinished(new Date(res.data!.departureTime) < new Date());
        });
    }, []);

    const sendRejection = () => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId:params.sender?.id!,
                journeyId: params.journeyId,
                type: NotificationType.ApplicationRejection,
                jsonData: jsonData,
            }
        ).then((res)=> {
            if(res.status == HTTP_STATUS_OK) {
                setDeclineModalVisible(true);
                NotificationsService.deleteNotification(params.notificationId);
            }
        });
    };

    const sendApprove = () => {
        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId:params.sender?.id!,
                journeyId: params.journeyId,
                type: NotificationType.ApplicationApproval,
                jsonData: jsonData,
            }
        ).then((res)=> {
            if(res.status == HTTP_STATUS_OK) {
                setApproveModalVisible(true);
                NotificationsService.deleteNotification(params.notificationId);
                if(props.route.params.notification.onDelete)
                    props.route.params.notification.onDelete(props.route.params.notification.notificationId);
            }

        });
    };
    const approveUser = () => {
        const applicantStops = getApplicantStops(stops, params.sender!.id);

        JourneyService.addUser(
            {
                journeyUser: {
                    journeyId: params.journeyId,
                    userId: params.sender!.id,
                    withBaggage: data?.hasLuggage,
                    passangersCount: data?.passangersCount ?? DEFAULT_PASSANGERS_COUNT
                },
                applicantStops: applicantStops
            }
        )
            .then((res) => {
                if(res.status === HTTP_STATUS_OK && res.data) {
                    sendApprove();
                }
                else
                {
                    setErrorModalVisible(true);
                }
            })
            .catch(() => setErrorModalVisible(true));
    };

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Route View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props.route.params.notification,
            currentStop: Number(stops.findIndex((stp: Stop) => stp?.address?.name == stop?.address?.name)),
            user: props.route.params.notification.sender
        });
    };

    return (
        <>
            <ScrollView style = {{ flexGrow: 1 }}>

                <View style={[JourneyNewApplicantViewStyle.window, { backgroundColor: colors.white }]}>
                    <NotificationHeader
                        sender={params.sender}
                    />

                    <RequestComment comments={data?.comments}/>

                    <NotificationRideDetails
                        journeyId = {params.journeyId}
                        userId = {params.sender!.id}
                        IsBaggageVisible={false}
                        passangersCount = {data?.passangersCount}
                        withPassangers
                        journey = {journey!}
                        journeyUser= {{
                            journeyId: params.journeyId,
                            userId: params.sender?.id!,
                            withBaggage: data?.hasLuggage,
                            passangersCount: data?.passangersCount ?? DEFAULT_PASSANGERS_COUNT
                        }}
                    />

                    <Text style={{ ...JourneyNewApplicantViewStyle.applicantStopsText, color: colors.primary }}>
                        {props.route.params.notification.sender!.name + "`s stops"}
                    </Text>

                    <StopsBlock
                        stops={stops}
                        onStopPress={onStopPressHandler}
                        highlightedStops={getHighlightedStops(stops, params!.sender!.id)}
                    />

                    <NotificationButtonGroup>
                        <NotificationConfirmButton
                            disabled={journeyIsFinished}
                            confirmText={"ACCEPT"}
                            onConfirm={approveUser}
                        />

                        <NotificationDeclineButton
                            disabled={journeyIsFinished}
                            declineText={"Decline"}
                            onDecline={() => setConfirmationModalVisible(true)}
                        />
                    </NotificationButtonGroup>

                    <>
                        <ConfirmModal
                            visible={approveModalVisible}
                            title="Request is approved"
                            subtitle="Your approvement was successfully sent to the applicant!"
                            confirmText="Ok"
                            hideCancelButton={true}
                            disableModal={() => {
                                setApproveModalVisible(false);
                                navigation.goBack();
                            }}
                            onConfirm={() => {
                                setApproveModalVisible(false);
                                navigation.goBack();
                            }}
                        />

                        <ConfirmModal
                            visible={declineModalVisible}
                            title="Request is declined"
                            subtitle="Your rejection was successfully sent to the applicant!"
                            confirmText="Ok"
                            hideCancelButton={true}
                            disableModal={() => {
                                setDeclineModalVisible(false);
                                navigation.goBack();
                            }}
                            onConfirm={() => {
                                setDeclineModalVisible(false);
                                navigation.goBack();
                            }}
                        />

                        <ConfirmModal
                            visible={confirmationModalVisible}
                            title="ARE YOU SURE?"
                            subtitle="Are you sure you want to decline passanger's request?"
                            confirmText="Yes, decline"
                            cancelText="No, keep it"
                            disableModal={() => setConfirmationModalVisible(false)}
                            onConfirm={() => {
                                setConfirmationModalVisible(false);
                                sendRejection();
                            }}
                        />

                        <ConfirmModal
                            visible={errorModalVisible}
                            title="Error"
                            subtitle="Failed to add the user to the ride!"
                            confirmText="Ok"
                            hideCancelButton={true}
                            disableModal={() => {
                                setErrorModalVisible(false);
                            }}
                            onConfirm={() => {
                                setErrorModalVisible(false);
                            }}
                        />
                    </>

                </View>

            </ScrollView>
        </>
    );
};

export default JourneyNewApplicantView;
