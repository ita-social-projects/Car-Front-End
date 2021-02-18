import JourneyNewApplicantStyle from "../journey-new-applicant/JourneyNewApplicantStyle";
import { ActivityIndicator, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { container } from "tsyringe";
import UserService from "../../../api-service/user-service/UserService";
import AccentColors from "../../common/enums/AccentColors";
import Item from "../styles/flex/Item";

export const UserAvatar = (props: {
    userId: number;
    flexBox?: { width: number };
}) => {
    const userService = container.resolve(UserService);
    let [userFullName, setUserFullName] = useState([" ", " "]);
    const [isImage, setIsImage] = useState(false);

    let [avatar, setAvatar] = useState(
        <ActivityIndicator size="large" color="black" />
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
                        />
                    );
                    setIsImage(false);
                } else {
                    setAvatar(
                        <Image
                            source={require("../../../assets/images/default-user-photo.jpg")}
                        />
                    );
                }
            })
            .catch((e) => {
                console.log(e);
                setAvatar(
                    <Image
                        source={require("../../../assets/images/default-user-photo.jpg")}
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
        <View style={props.flexBox == null ? {} : Item(props.flexBox.width)}>
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
};

export default UserAvatar;
