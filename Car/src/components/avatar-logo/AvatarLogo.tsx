import React from "react";
import { Image, Text, View } from "react-native";
import stc from "string-to-color";
import { FIRST_ELEMENT_INDEX } from "../../constants/Constants";
import AvatarLogoStyle from "./AvatarLogoStyle";

const AvatarLogo = (props: any) => {
    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        { height: props?.size, width: props?.size }
    ];

    return (
        <>
            {props.user?.imageId != null ? (
                <Image
                    source={{ uri: props.user?.imageId }}
                    style={avatarStyle}
                />
            ) : (
                <View
                    style={[
                        avatarStyle,
                        { backgroundColor: props.user == undefined ?
                            "#000000" : stc(props.user.name + " " + props.user.surname) }
                    ]}
                >
                    <Text style={AvatarLogoStyle.userAvatarText}>
                        {props.user == undefined ?
                            "" : props.user?.name[FIRST_ELEMENT_INDEX] + props.user?.surname[FIRST_ELEMENT_INDEX]}
                    </Text>
                </View>
            )}
        </>
    );
};

export default AvatarLogo;
