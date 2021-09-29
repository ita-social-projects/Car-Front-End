import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Stop from "../../../models/stop/Stop";
import * as navigation from "../navigation/Navigation";
import NotificationProps from "../notifications/NotificationProps";
import MinimizedNotification from "../minimized-notification/MinimizedNotification";
import ConfirmModal from "../confirm-modal/ConfirmModal";

const RideFound = (props: NotificationProps) => {
    const title = "created a ride";

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [applicantStops, setApplicantStops] = useState<Array<Stop>>();
    const data = JSON.parse(props.notificationData);

    useEffect(() => {
        let stops: Array<Stop> = data
            .applicantStops;

        setApplicantStops(stops);
    }, []);

    return (
        <View>
            <MinimizedNotification
                notificationId={props.notificationId}
                user={props.sender}
                notificationTitle={title}
                read={props.read}
                date={props.date}
                openModal={() => setIsModalVisible(true)}
            />
            <ConfirmModal
                visible={isModalVisible}
                title="RIDE IS CREATED"
                subtitle="The ride has been created according to your
                        requirements!"
                confirmText="View"
                cancelText="Skip"
                disableModal={() => setIsModalVisible(false)}
                onConfirm={() => {
                    setIsModalVisible(false);
                    navigation.navigate("JourneyTabs", {
                        screen: "Journey Page",
                        params: {
                            journeyId: props.journeyId,
                            applicantStops: applicantStops,
                            isDriver: false,
                            isPassenger: false,
                            passangersCount: data?.passangersCount

                        },
                    });
                }}

            />
        </View>
    );
};

export default RideFound;
