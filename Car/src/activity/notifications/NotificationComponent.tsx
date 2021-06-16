import React, { useState } from "react";
import { View } from "react-native";
import JourneyNewApplicant from "../../components/journey-new-applicant/JourneyNewApplicant";
import JourneyCancellation from "../../components/notifications/notifications-types/JourneyCancellation";
import JourneyDetailsUpdate from "../../components/notifications/notifications-types/JourneyDetailsUpdate";
import RideFound from "../../components/ride-found/RideFound";
import PassengerWithdrawal from "../../components/notifications/notifications-types/PassengerWithdrawal";
import ApplicationApproval from "../../components/notifications/notifications-types/ApplicationApproval";
import JourneyInvitation from "../../components/notifications/notifications-types/JourneyInvitation";
import AcceptedInvitation from "../../components/notifications/notifications-types/AcceptedInvitation";
import RejectedInvitation from "../../components/notifications/notifications-types/RejectedInvitation";
import HRMarketingMessage from "../../components/notifications/notifications-types/HRMarketingMessage";
import HRMarketingSurvey from "../../components/notifications/notifications-types/HRMarketingSurvey";

const NotificationComponent = (props: any) => {
    const [isModalVisible] = useState(false);
    const componentsEnum: any = {
        1: JourneyNewApplicant,
        2: ApplicationApproval,
        3: JourneyCancellation,
        4: JourneyDetailsUpdate,
        5: JourneyInvitation,
        6: AcceptedInvitation,
        7: RejectedInvitation,
        8: PassengerWithdrawal,
        9: HRMarketingMessage,
        10: HRMarketingSurvey,
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
                date: new Date(props.item!.createdAt),
                journeyId: props.item!.journeyId
            })}
        </View>
    );
};

export default NotificationComponent;
