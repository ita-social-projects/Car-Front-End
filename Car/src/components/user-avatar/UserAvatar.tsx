import JourneyNewApplicantStyle, {
    item
} from "../journey-new-applicant/JourneyNewApplicantStyle";
import { ActivityIndicator, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { container } from "tsyringe";
import UserService from "../../../api-service/user-service/UserService";
import { AccentColors } from "../../common/enums/AccentColors";
import {User} from "../../../models/User";
import {UserAvatarStyle} from "./UserAvatarStyle";

export function UserAvatar(props: {
    user: User;
    flexBox?: { width: number };
}) {

    let avatarColour = (userId: number) =>
        AccentColors[Math.floor(userId % Object.keys(AccentColors).length)];

    return (
        <View style={props.flexBox != null ? item(props.flexBox.width) : {}}>
            {props.user!.avatarUrl != null ? (
                <View>
                    <Image source={{uri: props.user!.avatarUrl}}/>
                </View>
            ) : (
                <View
                    style={[
                        UserAvatarStyle(avatarColour(props.user!.id)).circle
                    ]}
                >
                    <Text style={JourneyNewApplicantStyle.icon}>
                        {props.user!.name[0][0] + props.user!.surname[1][0]}
                    </Text>
                </View>
            )}
        </View>
    );
}
