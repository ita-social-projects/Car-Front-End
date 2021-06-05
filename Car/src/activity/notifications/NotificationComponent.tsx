import React, { useState } from "react";
import { View } from "react-native";
import JourneyNewApplicant from "../../components/journey-new-applicant/JourneyNewApplicant";
import JourneyCancellation from "../../components/notifications/journey-cancellation/JourneyCancellation";
import RideFound from "../../components/ride-found/RideFound";

const NotificationComponent = (props: any) => {
    const [isModalVisible] = useState(false);
    const componentsEnum: any = {
        1: JourneyNewApplicant,
        3: JourneyCancellation,
        11: RideFound
    };

    return (
        <View>
            {React.createElement(componentsEnum[props.item.type], {
                notificationId: props.item!.id,
                notificationData: props.item!.jsonData,
                sender: props.item!.sender,
                visible: isModalVisible,
                read: props.item!.isRead,
                date: new Date(props.item!.createdAt)
            })}
        </View>
    );
};

export default NotificationComponent;
