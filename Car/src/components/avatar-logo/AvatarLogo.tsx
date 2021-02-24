import React, { useEffect, useState } from "react";
import { Image, Platform, Text, View } from "react-native";
import UserService from "../../../api-service/user-service/UserService";
import AvatarLogoStyle from "./AvatarLogoStyle";
import stc from "string-to-color";

const AvatarLogo = (props: any) => {
    const user = props?.user;

    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        { height: props?.size, width: props?.size }
    ];

    const [avatar, setAvatar] = useState(
        <View
            style={[
                avatarStyle,
                {
                    backgroundColor: stc(user?.name + " " + user?.surname)
                }
            ]}
        >
            <Text style={AvatarLogoStyle.userAvatarText}>
                {user?.name[0] + user?.surname[0]}
            </Text>
        </View>
    );

    if (user?.id !== undefined)
        useEffect(() => {
            UserService.getAvatar(Number(user?.id)).then((result) => {
                const byteOfImage = JSON.stringify(result.request._response);
                if (byteOfImage !== '""' && Platform.OS !== "ios") {
                    setAvatar(
                        <Image
                            source={{
                                uri: "data:image/png;base64," + byteOfImage
                            }}
                            style={avatarStyle}
                        />
                    );
                }
            });
        }, []);

    return <View>{avatar}</View>;
};

export default AvatarLogo;
