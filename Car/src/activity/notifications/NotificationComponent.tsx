import React, { useState } from "react";
import { View } from "react-native";
import "reflect-metadata";
import { JourneyNewApplicant } from "../../components/journey-new-applicant/JourneyNewApplicant";
import { ComponentsEnum } from "../../common/interfaces/ComponentsEnum";
import { NotificationProps } from "../../common/interfaces/NotificationProps";

const NotificationComponent = (props: any) => {
    const [isModalVisible] = useState(false);
    let componentsEnum: ComponentsEnum<NotificationProps> = {
        1: JourneyNewApplicant
    };
    return (
        <View>
            {React.createElement(componentsEnum[props.item.notificationType], {
                notificationId: props.item!.id,
                notificationData: props.item!.notificationData,
                user: props.item!.user,
                visible: isModalVisible,
                read: props.item!.isRead,
                date: new Date(props.item!.createAt)
            })}
        </View>
    );
};

export default NotificationComponent;
