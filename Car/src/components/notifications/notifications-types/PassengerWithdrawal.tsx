import React, { useEffect, useState } from "react";
import MinimizedNotification from "../../minimized-notification/MinimizedNotification";
import NotificationRideDetails from "../notification-ride-details/NotificationRideDetails";
import NotificationButtonGroup from "../notification-buttons/NotificationButtonGroup";
import NotificationHeader from "../notification-header/NotificationHeader";
import NotificationModalBase from "../notification-modal-base/NotificationModalBase";
import NotificationProps from "../NotificationProps";
import NotificationConfirmButton from "../notification-buttons/NotificationConfirmButton";
import NotificationRideStops from "../notification-ride-stops/NotificationRideStops";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../models/journey/Journey";

const PassengerWithdrawal = (props: NotificationProps) => {
    const [modalVisible, setModalVisible] = useState(props.visible);
    const [journey, setJourney] = useState<Journey>();
    const data = JSON.parse(props.notificationData);

    useEffect(() => {
        JourneyService.getJourney(props.journeyId!, true).then(res => {
            setJourney(res.data);
        });
    }, []);

    return (
        <>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={"The passenger has withdrawn your ride!"}
                read={props.read}
                date={props.date}
                openModal={() => setModalVisible(true)}
            />
            <NotificationModalBase isVisible={modalVisible!} styles={[{ height: "90%" }]}>
                <NotificationHeader
                    title="WITHDRAWAL"
                    message="The passenger has withdrawn your ride!"
                    sender={props.sender}
                    disableModal={() => setModalVisible(false)}
                />

                <NotificationRideDetails
                    departureTime={data.departureTime}
                    availableSeats={data.availableSeats}
                    isFree={data.isFree}
                    withBaggage={data.withBaggage}
                />

                <NotificationRideStops
                    title={"Your route"}
                    stops={journey?.stops!}
                    stopsOwner={props.sender}
                />

                <NotificationButtonGroup>
                    <NotificationConfirmButton onConfirm={() => setModalVisible(false)} />
                </NotificationButtonGroup>
            </NotificationModalBase>
        </>
    );
};

export default PassengerWithdrawal;