import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import Stop from "../../../models/stop/Stop";
import * as navigation from "../navigation/Navigation";
import DM from "../styles/DM";
import RideFoundStyle from "./RideFoundStyle";
import NotificationProps from "../notifications/NotificationProps";
import MinimizedNotification from "../minimized-notification/MinimizedNotification";

const RideFound = (props: NotificationProps) => {
    const title = "created a ride";

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [applicantStops, setApplicantStops] = useState<Array<Stop>>();

    useEffect(() => {
        let stops: Array<Stop> = JSON
            .parse(props.notificationData.toLowerCase())
            .applicantstops;

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
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
            >
                <View
                    style={[RideFoundStyle.body, {
                        backgroundColor: DM("rgba(0, 0, 0, 0.5)")
                    }]}
                >
                    <View style={[RideFoundStyle.container, {
                        shadowColor: DM("#414045"),
                        backgroundColor: DM("#FFFFFF"),
                        borderColor: DM("rgba(151, 151, 151, 0.233556)"),
                    }]}>
                        <View style={RideFoundStyle.headerContainer}>
                            <Text style={RideFoundStyle.headerText}>RIDE IS CREATED</Text>
                        </View>
                        <View style={RideFoundStyle.messageContainer}>
                            <Text style={RideFoundStyle.messageText}>
                                The ride has been created according to your
                                requirements!
                            </Text>
                        </View>

                        <View style={RideFoundStyle.buttonsContainer}>
                            <TouchableOpacity
                                onPress={() => {
                                    setIsModalVisible(false);
                                    navigation.navigate("JourneyTabs", {
                                        screen: "Journey Page",
                                        params: {
                                            journeyId: JSON.parse(
                                                props.notificationData
                                            ).journeyId,
                                            applicantStops: applicantStops,
                                            isDriver: false,
                                            isPassenger: false,
                                        },
                                    });
                                }}
                                style={[RideFoundStyle.button,
                                    { backgroundColor: "#D80056" }]}
                            >
                                <Text style={RideFoundStyle.viewButtonText}>View</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setIsModalVisible(false)}
                                style={[RideFoundStyle.button]}
                            >
                                <Text style={RideFoundStyle.skipButtonText}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default RideFound;
