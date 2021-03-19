import React from "react";
import { Image, Text, View } from "react-native";
import stc from "string-to-color";
import ImageService from "../../../api-service/image-service/ImageService";
import {
    AVATAR_LOGO_SIZE_TO_PADDING_RATIO,
    AVATAR_LOGO_SIZE_TO_TEXT_RATIO,
    FIRST_ELEMENT_INDEX
} from "../../constants/Constants";
import AvatarLogoStyle from "./AvatarLogoStyle";

const AvatarLogo = (props: any) => {

    const userAvatarText = props.user ?
        props.user?.name[FIRST_ELEMENT_INDEX] + props.user?.surname[FIRST_ELEMENT_INDEX] : "";

    const backgroundColor = props.user ?
        stc(props.user.name + " " + props.user.surname): "#000000";

    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        {
            height: props?.size,
            width: props?.size,
            backgroundColor: backgroundColor
        }
    ];

    const avatarTextStyle = [AvatarLogoStyle.userAvatarText, {
        fontSize: props?.size / AVATAR_LOGO_SIZE_TO_TEXT_RATIO,
        lineHeight: props?.size / AVATAR_LOGO_SIZE_TO_TEXT_RATIO,
        paddingTop: props?.size / AVATAR_LOGO_SIZE_TO_PADDING_RATIO
    }];

    return (
        props.user?.imageId ? (
            <Image
                source={{ uri: ImageService.getImageById(props.user?.imageId) }}
                style={avatarStyle}
            />
        ) : (
            <View
                style={avatarStyle}
            >
                <Text style={avatarTextStyle}>
                    {userAvatarText}
                </Text>
            </View>
        ));
};

export default AvatarLogo;
