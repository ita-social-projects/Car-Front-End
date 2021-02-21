import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { container } from "tsyringe";
import UserService from "../../../../../../api-service/user-service/UserService";
import User from "../../../../../../models/User";
import AvatarLogo from "../../../../../components/avatar-logo/AvatarLogo";
import JourneyApplicantStyle from "./JourneyApplicantStyle";
import Indicator from "../../../../../components/activity-indicator/Indicator";

const JourneyApplicant = ({ route }: any) => {
    const { userId } = route.params;
    const userService = container.resolve(UserService);
    const [user, setUser] = useState({} as User);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        userService
            .getUser(userId)
            .then((res) => {
                setUser(res.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <ScrollView style={JourneyApplicantStyle.mainContainer}>
            {isLoading ? (
                <Indicator
                    color="#414045"
                    size="large"
                    text="Loading information..."
                />
            ) : (
                <>
                    <View style={JourneyApplicantStyle.topContainer}>
                        <AvatarLogo user={user} size={49} />
                        <View style={JourneyApplicantStyle.userInformation}>
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
                                {user?.journeyCount === 1
                                    ? "1 ride"
                                    : user?.journeyCount + " rides"}
                                , 2 badges
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
                </>
            )}
        </ScrollView>
    );
};

export default JourneyApplicant;
