import React from "react";
import { Image, Text, View, ActivityIndicator } from "react-native";
import ImageService from "../../../api-service/image-service/ImageService";
import {
    AVATAR_LOGO_SIZE_TO_PADDING_RATIO,
    AVATAR_LOGO_SIZE_TO_SPINER_RATIO,
    AVATAR_LOGO_SIZE_TO_TEXT_RATIO
} from "../../constants/StylesConstants";
import { FIRST_ELEMENT_INDEX } from "../../constants/GeneralConstants";
import { useTheme } from "../theme/ThemeProvider";
import AvatarLogoStyle from "./AvatarLogoStyle";
import AvatarLogoProps from "./AvatarLogoProps";

const GetBackgroundColor = (username: string) => {
    const usernameFirstCharPos = 0;
    const charCodeOfFirstAlpha = 65;
    const hueSectionRange = 13;
    const hue =
        (username.charCodeAt(usernameFirstCharPos) - charCodeOfFirstAlpha) * hueSectionRange;

    return `hsl(${hue}, 80%, 45%)`;
};

const AvatarLogo = (props: AvatarLogoProps) => {
    const { colors } = useTheme();
    const userAvatarText = props.user ?
        props.user?.name[FIRST_ELEMENT_INDEX] + props.user?.surname[FIRST_ELEMENT_INDEX] : "";

    const backgroundColor = props.user ?
        GetBackgroundColor(props.user.name + " " + props.user.surname) : colors.primary;

    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        {
            height: props?.size,
            width: props?.size,
            backgroundColor: props.user?.imageId ? "transparent" : backgroundColor,
            marginTop: props.marginTop,
            marginLeft: props.marginLeft
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
            <View
                style={avatarStyle}
            >
                <ActivityIndicator
                    style={AvatarLogoStyle.spinner}
                    size={size / AVATAR_LOGO_SIZE_TO_SPINER_RATIO}
                    color={colors.hover}
                />
                <Image
                    source={{ uri: ImageService.getImageById(props.user?.imageId) }}
                    style={avatarStyle}
                />
            </View>
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
