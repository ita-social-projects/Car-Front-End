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
            {React.createElement(componentsEnum[props.item.type], {
                notificationId: props.item!.id,
                notificationData: props.item!.jsonData,
                user: props.item!.sender,
                visible: isModalVisible,
                read: props.item!.isRead,
                date: new Date(props.item!.createdAt)
            })}
        </View>
    );
};

export default NotificationComponent;
