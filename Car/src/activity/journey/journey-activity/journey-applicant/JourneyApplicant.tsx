import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import UserService from "../../../../../api-service/user-service/UserService";
import User from "../../../../../models/user/User";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import JourneyApplicantStyle from "./JourneyApplicantStyle";
import Indicator from "../../../../components/activity-indicator/Indicator";
import { SINGLE_ELEMENT_COLLECTION_LENGTH } from "../../../../constants/GeneralConstants";
import DM from "../../../../components/styles/DM";

const JourneyApplicant = (props: {route: {params: { userId: number }}}) => {
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
        <View style={[JourneyApplicantStyle.mainContainer, { backgroundColor: DM("#FFFFFF") }]}>
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
                            <Text style={[JourneyApplicantStyle.userName, { color: DM("black") }]}>
                                {user?.name + " " + user?.surname}
                            </Text>
                            <Text
                                style={[JourneyApplicantStyle.userAdditionalData, { color: DM("black") }]}
                            >
                                {user?.position}
                            </Text>
                            <Text
                                style={[JourneyApplicantStyle.userAdditionalData, { color: DM("black") }]}
                            >
                                {journeys}, 2 badges
                            </Text>
                        </View>
                    </View>
                    <View style={[JourneyApplicantStyle.separator, { backgroundColor: DM("#F2F2F2") }]} />
                    <View style={[JourneyApplicantStyle.bottomContainer, { backgroundColor: DM("#FFFFFF") }]}>
                        <Text style={[JourneyApplicantStyle.detailsText, { color: DM("black") }]}>
                            Details
                        </Text>
                        <View style={JourneyApplicantStyle.positionContainer}>
                            <Text style={[JourneyApplicantStyle.positionText, { color: DM("black") }]}>
                                Position:
                            </Text>
                            <Text style={[JourneyApplicantStyle.positionData, { color: DM("#414045") }]}>
                                {user?.position}
                            </Text>
                        </View>
                        <View style={JourneyApplicantStyle.locationContainer}>
                            <Text style={[JourneyApplicantStyle.locationText, { color: DM("black") }]}>
                                Location:
                            </Text>
                            <Text style={[JourneyApplicantStyle.locationData, { color: DM("#02A2CF") }]}>
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
