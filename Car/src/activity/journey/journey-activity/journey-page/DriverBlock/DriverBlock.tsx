import JourneyPageStyle from "../JourneyPageStyle";
import DM from "../../../../../components/styles/DM";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as navigation from "../../../../../components/navigation/Navigation";
import { Text, View } from "react-native";
import AvatarLogo from "../../../../../components/avatar-logo/AvatarLogo";
import moment from "moment";
import { INITIAL_TIME } from "../../../../../constants/JourneyConstants";
import { Divider } from "react-native-elements";
import React from "react";
import Journey from "../../../../../../models/journey/Journey";

const DriverBlock = ({ journey } : {journey: Journey}) => {
    return (
        <View style={[JourneyPageStyle.contentView, { backgroundColor: DM("white") }]}>

            <TouchableOpacity
                style={JourneyPageStyle.userBlock}
                onPress={() =>
                    navigation.navigate("Applicant Page", {
                        userId: journey?.organizer?.id
                    })
                }
            >
                <View style={JourneyPageStyle.userImageBlock}>
                    <AvatarLogo user={journey?.organizer} size={38.5} />
                </View>
                <View style={JourneyPageStyle.userInfoBlock}>
                    <Text style={[JourneyPageStyle.userNameText, { color: DM("black") }]}>
                        {journey?.organizer?.name}{" "}
                        {journey?.organizer?.surname}'s ride
                    </Text>
                    <View style={JourneyPageStyle.userSecondaryInfoBlock}>
                        <Text style={[JourneyPageStyle.userRoleText, { color: DM("#909095") }]}>
                            {journey?.organizer?.position}
                        </Text>
                        <Text style={[JourneyPageStyle.dateText, { color: DM("#02A2CF") }]}>
                            {moment(new Date(journey?.departureTime ?? INITIAL_TIME)).calendar()}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={JourneyPageStyle.driverBlockWhiteSpace} />
            <Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />
        </View>
    );
};

export default DriverBlock;