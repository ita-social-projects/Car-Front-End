import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { AvatarLogoTitleStyle } from "./AvatarLogoTitleStyle";
import "reflect-metadata";
import { container } from "tsyringe";
import UserService from "../../../../../api-service/user-service/UserService";
import { AuthContext } from "../../../auth/AuthProvider";

function AvatarLogoTitle(props: any) {
    const userService = container.resolve(UserService);
    const { user } = useContext(AuthContext);
    const [avatar, setAvatar] = useState(
        <ActivityIndicator
            style={AvatarLogoTitleStyle.headerUserAvatar}
            size="large"
            color="black"
        />
    );

    useEffect(() => {
        userService
            .getAvatar(Number(user?.id))
            .then((result) => {
                const byteOfImage = JSON.stringify(result.request._response);
                if (Object.entries(props.user).length) {
                    setAvatar(
                        <Image
                            source={{
                                uri: "data:image/png;base64," + byteOfImage
                            }}
                            style={AvatarLogoTitleStyle.headerUserAvatar}
                        />
                    );
                } else {
                    setAvatar(
                        <Image
                            source={require("../../../../../assets/images/default-user-photo.jpg")}
                            style={AvatarLogoTitleStyle.headerUserAvatar}
                        />
                    );
                }
            })
            .catch((e) => {
                console.log(e);
                setAvatar(
                    <Image
                        source={require("../../../../../assets/images/default-user-photo.jpg")}
                        style={AvatarLogoTitleStyle.headerUserAvatar}
                    />
                );
            });
    }, []);

    return (
        <View style={AvatarLogoTitleStyle.headerContainer}>
            {avatar}
            <View style={AvatarLogoTitleStyle.headerUserInformation}>
                <Text style={AvatarLogoTitleStyle.headerUserName}>
                    {Object.entries(props.user).length
                        ? props.user.name + " " + props.user.surname
                        : null}
                </Text>
                <Text style={AvatarLogoTitleStyle.headerUserAdditionalData}>
                    {Object.entries(props.user).length
                        ? props.user.position
                        : null}
                </Text>
                <Text style={AvatarLogoTitleStyle.headerUserAdditionalData}>
                    123 rides, 2 badges
                </Text>
            </View>
        </View>
    );
}

export default AvatarLogoTitle;
