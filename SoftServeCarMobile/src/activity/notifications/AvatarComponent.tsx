import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import "reflect-metadata";
import { container } from "tsyringe";
import UserService from "../../../api-service/user-service/UserService";
import AvatarInitials from "./AvatarInitials";
import NotificationStyle from "./NotificationStyle";

const AvatarComponent = (props: any) => {
    const userService = container.resolve(UserService);
    const [isImage, setIsImage] = useState(false);

    const [avatar, setAvatar] = useState(
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
    }, []);

    return (
        <View>
            {isImage ? (
                <View>{avatar}</View>
            ) : (
                <AvatarInitials
                    userName={props.userName}
                    userColor={props.userColor}
                ></AvatarInitials>
            )}
        </View>
    );
};

export default AvatarComponent;
