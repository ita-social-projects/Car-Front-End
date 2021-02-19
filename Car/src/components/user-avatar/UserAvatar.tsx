import JourneyNewApplicantStyle, {
    item
} from "../journey-new-applicant/JourneyNewApplicantStyle";
import { Image, Text, View } from "react-native";
import React from "react";
import { AccentColors } from "../../common/enums/AccentColors";
import {User} from "../../../models/User";
import {UserAvatarStyle} from "./UserAvatarStyle";

export function UserAvatar(props: {
    user: User;
    flexBox?: { width: number };
}) {

    let avatarColour = (userId: number) => AccentColors[Math.floor(userId % (Object.keys(AccentColors).length/2))];


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
                        {props.user!.name[0] + props.user!.surname[0]}
                    </Text>
                </View>
            )}
        </View>
    );
}
