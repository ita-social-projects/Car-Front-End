import React, { useEffect, useState } from "react";
import { Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import UserService from "../../../../../api-service/user-service/UserService";
import User from "../../../../../models/user/User";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import JourneyApplicantStyle from "./JourneyApplicantStyle";
import Indicator from "../../../../components/activity-indicator/Indicator";
import { SINGLE_ELEMENT_COLLECTION_LENGTH } from "../../../../constants/GeneralConstants";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import Clipboard from "@react-native-community/clipboard";

const JourneyApplicant = (props: {route: {params: { userId: number }}}) => {
    const { DM } = useTheme();
    const { userId } = props.route.params;
    const [user, setUser] = useState({} as User);
    const [isLoading, setLoading] = useState(true);
    const [isCallingButtonVisible, setCallingButtonVisible] = useState(false);

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
                                Location: {user?.location}
                            </Text>
                            <Text style={[JourneyApplicantStyle.locationData, { color: DM("#02A2CF") }]}>
                                {user?.location}
                            </Text>
                        </View>
                        <View style={[JourneyApplicantStyle.mobileContainer, { marginTop: 10 }]}>
                            <Text style={[JourneyApplicantStyle.mobileText, { color: DM("black") }]}>

                            </Text>
                            <TouchableOpacity onPress={() => setCallingButtonVisible(!isCallingButtonVisible)}>
                                <Text style={[JourneyApplicantStyle.mobileData, { color: DM("#02A2CF") }]}>

                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={JourneyApplicantStyle.whitespaceBlock} />
                </ScrollView>
            )}
            <ConfirmModal
                confirmText={"Call " + user?.name}
                disableModal={() => {
                    setCallingButtonVisible(false);
                    Clipboard.setString(user?.phoneNumber != null ? user?.phoneNumber.toString() : " ");}}
                onConfirm={() => {Linking.openURL(`tel:${user?.phoneNumber}`);}}
                title={user?.name + " " + user?.surname}
                visible={isCallingButtonVisible}
                cancelText={"Copy number"}
                confirmColor={"#d80056"}
                hideCancelButton={false}
                subtitle={user?.phoneNumber != null ? user?.phoneNumber.toString() : undefined}/>
        </View>
    );
};

export default JourneyApplicant;
