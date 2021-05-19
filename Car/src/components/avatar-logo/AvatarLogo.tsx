import React from "react";
import { Image, Text, View } from "react-native";
import stc from "string-to-color";
import ImageService from "../../../api-service/image-service/ImageService";
import {
    AVATAR_LOGO_SIZE_TO_PADDING_RATIO,
    AVATAR_LOGO_SIZE_TO_TEXT_RATIO
} from "../../constants/StylesConstants";
import { FIRST_ELEMENT_INDEX } from "../../constants/GeneralConstants";
import DM from "../styles/DM";
import AvatarLogoStyle from "./AvatarLogoStyle";
import AvatarLogoProps from "./AvatarLogoProps";

const AvatarLogo = (props: AvatarLogoProps) => {

    const userAvatarText = props.user ?
        props.user?.name[FIRST_ELEMENT_INDEX] + props.user?.surname[FIRST_ELEMENT_INDEX] : "";

    const backgroundColor = props.user ?
        stc(props.user.name + " " + props.user.surname): DM("#000000");

    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        {
            height: props?.size,
            width: props?.size,
            backgroundColor: backgroundColor
        }
    ];

    const size = props.size ?? NaN;
    const avatarTextStyle = [AvatarLogoStyle.userAvatarText, {
        fontSize: size / AVATAR_LOGO_SIZE_TO_TEXT_RATIO,
        lineHeight: size / AVATAR_LOGO_SIZE_TO_TEXT_RATIO,
        paddingTop: size / AVATAR_LOGO_SIZE_TO_PADDING_RATIO,
        color: "#FFFFFF"
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
