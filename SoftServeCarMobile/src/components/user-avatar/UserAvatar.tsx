import JourneyNewApplicantStyle, {
    item
} from "../journey-new-applicant/JourneyNewApplicantStyle";
import { ActivityIndicator, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { container } from "tsyringe";
import UserService from "../../../api-service/user-service/UserService";
import NotificationStyle from "../../activity/notifications/NotificationStyle";
import { AccentColors } from "../../common/enums/AccentColors";

export function UserAvatar(props: {
    userId: number;
    flexBox?: { width: number };
}) {
    const userService = container.resolve(UserService);
    let [userFullName, setUserFullName] = useState([" ", " "]);
    const [isImage, setIsImage] = useState(false);

    let [avatar, setAvatar] = useState(
        <ActivityIndicator
            style={NotificationStyle.headerUserAvatar}
            size="large"
            color="black"
        />
    );

    useEffect(() => {
        userService
            .getAvatar(Number(props.userId))
            .then((result) => {
                const byteOfImage = JSON.stringify(result.request._response);
                if (!result.data) {
                    setAvatar(
                        <Image
                            source={{
                                uri: "data:image/png;base64," + byteOfImage
                            }}
                            style={NotificationStyle.headerUserAvatar}
                        />
                    );
                    setIsImage(false);
                } else {
                    setAvatar(
                        <Image
                            source={require("../../../assets/images/default-user-photo.jpg")}
                            style={NotificationStyle.headerUserAvatar}
                        />
                    );
                }
            })
            .catch((e) => {
                console.log(e);
                setAvatar(
                    <Image
                        source={require("../../../assets/images/default-user-photo.jpg")}
                        style={NotificationStyle.headerUserAvatar}
                    />
                );
            });
        userService
            .getUser(props.userId)
            .then((user) =>
                setUserFullName([user.data!.name, user.data!.surname])
            );
    }, []);

    let avatarColour = (userId: number) =>
        AccentColors[Math.floor(userId % Object.keys(AccentColors).length)];

    return (
        <View style={props.flexBox == null ? {} : item(props.flexBox.width)}>
            {isImage ? (
                <View>{avatar}</View>
            ) : (
                <View
                    style={[
                        JourneyNewApplicantStyle.circle,
                        { backgroundColor: avatarColour(props.userId) }
                    ]}
                >
                    <Text style={JourneyNewApplicantStyle.icon}>
                        {userFullName[0][0] + userFullName[1][0]}
                    </Text>
                </View>
            )}
        </View>
    );
}
