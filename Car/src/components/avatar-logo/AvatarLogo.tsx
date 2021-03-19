import React from "react";
import { Image, Text, View } from "react-native";
import stc from "string-to-color";
import ImageService from "../../../api-service/image-service/ImageService";
import { FIRST_ELEMENT_INDEX } from "../../constants/Constants";
import AvatarLogoStyle from "./AvatarLogoStyle";

const AvatarLogo = (props: any) => {
    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        { height: props?.size, width: props?.size }
    ];

    const userAvatarText = props.user ?
        props.user?.name[FIRST_ELEMENT_INDEX] + props.user?.surname[FIRST_ELEMENT_INDEX] : "";

    const backgroundColor = props.user ?
        stc(props.user.name + " " + props.user.surname): "#000000";

    const userAvatar = props.user?.imageId ? (
        <Image
            source={{ uri: ImageService.getImageById(props.user?.imageId) }}
            style={avatarStyle}
        />
    ) : (
        <View
            style={[
                avatarStyle,
                { backgroundColor }
            ]}
        >
            <Text style={AvatarLogoStyle.userAvatarText}>
                {userAvatarText}
            </Text>
        </View>
    );

    return (userAvatar);
};

export default AvatarLogo;
