import React, { useEffect, useState, useContext } from "react";
import { Text, View } from "react-native";
import NotificationProps from "../../notifications/NotificationProps";
import NotificationButtonGroup from "../../notifications/notification-buttons/NotificationButtonGroup";
import NotificationConfirmButton from "../../notifications/notification-buttons/NotificationConfirmButton";
import NotificationDeclineButton from "../../notifications/notification-buttons/NotificationDeclineButton";
import RequestComment from "../request-comments/RequestComment";
import WithLuggage from "../with-luggage/WithLuggage";
import Stop from "../../../../models/stop/Stop";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import { getStopByType, getStopCoordinates } from "../../../utils/JourneyHelperFunctions";
import StopType from "../../../../models/stop/StopType";
import { FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX } from "../../../constants/GeneralConstants";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import * as navigation from "../../../components/navigation/Navigation";
import StopsBlock from "../../../activity/journey/journey-activity/journey-page/blocks/stops-block/StopsBlock";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";
import AuthContext from "../../../components/auth/AuthContext";
import { HTTP_STATUS_OK } from "../../../constants/Constants";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import AvatarLogoTitle from "../../avatar-logo-title/AvatarLogoTitle";
import { useTheme } from "../../theme/ThemeProvider";
import JourneyNewApplicantViewStyle from "./JourneyNewApplicantViewStyle";
import NotificationRideDetails from "../../notifications/notification-ride-details/NotificationRideDetails";
import { ScrollView } from "react-native-gesture-handler";
import { DEFAULT_PASSANGERS_COUNT } from "../../../constants/JourneyConstants";
import Journey from "../../../../models/journey/Journey";

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
    const [stops, setStops] = useState<Stop[]>([]);
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>([]);
    const [journey, setJourney] = useState<Journey>();
    const { user } = useContext(AuthContext);
    const jsonData = JSON.stringify({
        hasLuggage: data?.hasLuggage,
        applicantStops: data?.applicantStops,
        passangersCount: data?.passangersCount ?? DEFAULT_PASSANGERS_COUNT
    });
    const [journeyIsFinished, setJourneyIsFinished] = useState(false);

    useEffect(() => {
        JourneyService.getJourney(params.journeyId).then(res => {
            setJourney(res.data);
            setJourneyPoints(res.data!.journeyPoints);
            setJourneyIsFinished(new Date(res.data!.departureTime) < new Date());
            setStops([
                getStopByType(res.data, StopType.Start)!,
                data?.applicantStops!.filter((stop:Stop) => stop!.userId === params.sender?.id &&
                    stop!.index === FIRST_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
                data?.applicantStops!.filter((stop:Stop) => stop!.userId === params.sender?.id &&
                    stop!.index === SECOND_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
                getStopByType(res.data, StopType.Finish)!
            ]);
        });
    }, []);

    const sendRejection = () => {

        NotificationsService.addNotification(
            {
                senderId: user?.id!,
                receiverId:params.sender?.id!,
                journeyId: params.journeyId,
                type: 12,
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
                type:2,
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
        JourneyService.addUser(
            {
                journeyUser: {
                    journeyId: params.journeyId,
                    userId: params.sender?.id!,
                    withBaggage: data?.hasLuggage,
                    passangersCount: data?.passangersCount ?? DEFAULT_PASSANGERS_COUNT
                },
                ApplicantStops: data?.applicantStops
            }
        ).then((res) => {
            if(res.status === HTTP_STATUS_OK && res.data) {
                sendApprove();
            }
            else{
                setErrorModalVisible(true);
            }
        });
    };

    const onStopPressHandler = (stop: Stop) => {
        navigation.navigate("Route View", {
            stops: stops,
            journeyPoints: journeyPoints,
            cameraCoordinates: getStopCoordinates(stop),
            notification: props.route.params.notification
        });
    };

    return (
        <>
            <View style={[JourneyNewApplicantViewStyle.background, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
                <ScrollView style = {{ backgroundColor: colors.white }}>
                    <View style={[JourneyNewApplicantViewStyle.window, { backgroundColor: colors.white }]}>
                        <View style={[JourneyNewApplicantViewStyle.headerContainer]}>
                            <View style={JourneyNewApplicantViewStyle.avatarLogo}>
                                <AvatarLogoTitle userToDisplay={params.sender} />
                            </View>
                        </View>

                        <View>
                            <RequestComment comments={data?.comments?.trim()}/>
                        </View>
                        <WithLuggage hasLuggage={data?.hasLuggage}/>

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
                            {props.route.params.notification.sender!.name +
                            " " + props.route.params.notification.sender!.surname
                            + "`s stops in your ride"}
                        </Text>
                        <View style={JourneyNewApplicantViewStyle.stopsBlock}>
                            <StopsBlock
                                stops={stops}
                                onStopPress={onStopPressHandler}
                                highlightedStops={[SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                            />
                        </View>

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
                    </View>
                </ScrollView>
            </View>
        </>);
};

export default JourneyNewApplicantView;
