import React, { useState } from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import * as navigation from "../navigation/Navigation";
import NewNotification from "../new-notification/NewNotification";
import DM from "../styles/DM";
import RideFoundProps from "./RideFoundProps";
import RideFoundStyle from "./RideFoundStyle";

const RideFound = (props: RideFoundProps) => {
    const title = "created a ride";

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    NotificationsService.markAsRead(props.notificationId);
                    setIsModalVisible(!isModalVisible);
                }}
            >
                <NewNotification
                    user={props.user}
                    notificationTitle={title}
                    read={props.read}
                    date={props.date}
                />
            </TouchableOpacity>
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
                                onPress={() => {
                                    setIsModalVisible(false);
                                }}
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
