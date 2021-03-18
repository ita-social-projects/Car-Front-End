import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import stc from "string-to-color";
import UserService from "../../../api-service/user-service/UserService";
import { FIRST_ELEMENT_INDEX } from "../../constants/Constants";
import AvatarLogoStyle from "./AvatarLogoStyle";

const AvatarLogo = (props: any) => {
    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        { height: props?.size, width: props?.size }
    ];

    const [user, setUser] = useState(props.user);

    useEffect(() => {
        UserService.getUser(user.id).then((res) => setUser(res.data));
    }, []);

    return (
        <>
            {user?.imageId != null ? (
                <Image
                    source={{ uri: user?.imageId }}
                    style={avatarStyle}
                />
            ) : (
                <View
                    style={[
                        avatarStyle,
                        { backgroundColor: stc(user.name + " " + user.surname) }
                    ]}
                >
                    <Text style={AvatarLogoStyle.userAvatarText}>
                        {user?.name[FIRST_ELEMENT_INDEX] + user?.surname[FIRST_ELEMENT_INDEX]}
                    </Text>
                </View>
            )}
        </>
    );
};

export default AvatarLogo;
