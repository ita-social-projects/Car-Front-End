import React, { useState, useEffect } from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationProps from "../NotificationProps";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import * as navigation from "../../navigation/Navigation";
import JourneyService from "../../../../api-service/journey-service/JourneyService";

const JourneyDetailsUpdate = (props: NotificationProps) => {
    const [isRideCanceled, setIsRideCanceled] = useState<boolean>(true);
    const [modalVisible, setModalVisible] = useState(props.visible);

    useEffect(() => {
        JourneyService.isJourneyCanceled(props.journeyId!).then(res => {
            setIsRideCanceled(res.data);
        });
    }, []);

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"Ride details have been updated"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />
            <NotificationModalBase isVisible={modalVisible!}>
                <NotificationHeader
                    title="RIDE DETAILS ARE UPDATED"
                    message={`The details of the ${props.sender?.name}'s ride have been updated!`}
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationButtonGroup>
                    <NotificationConfirmButton
                        confirmText={isRideCanceled? "OK" : "VIEW"}
                        onConfirm={() => {
                            setModalVisible(false);
                            if(!isRideCanceled){
                                navigation.navigate("Journey Page", {
                                    journeyId: props.journeyId,
                                    isDriver: false,
                                    isPassenger: true
                                });
                            }
                        }}
                    />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default JourneyDetailsUpdate;