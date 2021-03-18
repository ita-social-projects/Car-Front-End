import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import UserService from "../../../../../api-service/user-service/UserService";
import User from "../../../../../models/user/User";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import JourneyApplicantStyle from "./JourneyApplicantStyle";
import Indicator from "../../../../components/activity-indicator/Indicator";
import { SINGLE_ELEMENT_COLLECTION_LENGTH } from "../../../../constants/Constants";

const JourneyApplicant = (props: any) => {
    const { userId } = props.route.params;
    const [user, setUser] = useState({} as User);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        UserService.getUser(userId).then((res) =>
            (async () => setUser(res.data))().then(() => setLoading(false))
        );
    }, []);

    const journeys =
        user?.journeyCount == SINGLE_ELEMENT_COLLECTION_LENGTH ? "1 ride" : user?.journeyCount + " rides";

    return (
        <View style={JourneyApplicantStyle.mainContainer}>
            {isLoading ? (
                <Indicator
                    color="#414045"
                    size="large"
                    text="Loading information..."
                />
            ) : (
                <ScrollView>
                    <View style={JourneyApplicantStyle.avatarContainer}>
                        <AvatarLogo user={user} size={105} />
                    </View>
                    <View style={JourneyApplicantStyle.topContainer}>
                        <View >
                            <Text style={JourneyApplicantStyle.userName}>
                                {user?.name + " " + user?.surname}
                            </Text>
                            <Text
                                style={JourneyApplicantStyle.userAdditionalData}
                            >
                                {user?.position}
                            </Text>
                            <Text
                                style={JourneyApplicantStyle.userAdditionalData}
                            >
                                {journeys}, 2 badges
                            </Text>
                        </View>
                    </View>
                    <View style={JourneyApplicantStyle.separator} />
                    <View style={JourneyApplicantStyle.bottomContainer}>
                        <Text style={JourneyApplicantStyle.detailsText}>
                            Details
                        </Text>
                        <View style={JourneyApplicantStyle.positionContainer}>
                            <Text style={JourneyApplicantStyle.positionText}>
                                Position:
                            </Text>
                            <Text style={JourneyApplicantStyle.positionData}>
                                {user?.position}
                            </Text>
                        </View>
                        <View style={JourneyApplicantStyle.locationContainer}>
                            <Text style={JourneyApplicantStyle.locationText}>
                                Location:
                            </Text>
                            <Text style={JourneyApplicantStyle.locationData}>
                                {user?.location}
                            </Text>
                        </View>
                    </View>
                    <View style={JourneyApplicantStyle.whitespaceBlock} />
                </ScrollView>
            )}

        </View>
    );
};

export default JourneyApplicant;
