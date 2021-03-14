import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../models/Journey";
import Indicator from "../../../../components/activity-indicator/Indicator";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import JourneyRequestPageStyle from "./JourneyRequestPageStyle";
import Moment from "moment";
import { Divider } from "react-native-elements";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import ChooseOption from "../../../../components/choose-opton/ChooseOption";
import * as navigation from "../../../../components/navigation/Navigation";

const JourneyRequestPage = (props: any) => {

    const [currentJourney, setJourney] = useState({} as Journey);
    const { journeyId } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [isBaggaage, setBaggage] = useState(false);
    const [comments, setComments] = useState("");

    useEffect(() => {
        JourneyService.getJourney(journeyId).then((res) => {
            setJourney(res.data);
            setLoading(false);
        });
    }, []);

    const Separator = () => <Divider style={JourneyRequestPageStyle.separator} />;

    const Organizer = () => (
        <View style={JourneyRequestPageStyle.userBlock}>
            <View style={JourneyRequestPageStyle.userImageBlock}>
                <AvatarLogo user={currentJourney?.organizer} size={38.5} />
            </View>
            <View style={JourneyRequestPageStyle.userInfoBlock}>
                <Text style={JourneyRequestPageStyle.userNameText}>
                    {currentJourney?.organizer?.name}{" "}
                    {currentJourney?.organizer?.surname}'s journey
                </Text>
                <View style={JourneyRequestPageStyle.userSecondaryInfoBlock}>
                    <Text style={JourneyRequestPageStyle.userRoleText}>
                        {currentJourney?.organizer?.position}
                    </Text>
                    <Text style={JourneyRequestPageStyle.dateText}>
                        {Moment(currentJourney?.departureTime).calendar()}
                    </Text>
                </View>
            </View>
        </View>
    );

    const AdditionalInfo = () => (
        <>
            <View style={JourneyRequestPageStyle.commentsContainer}>
                <Text style={JourneyRequestPageStyle.commentsText}>
                            Comments
                </Text>
                <TextInput
                    style={JourneyRequestPageStyle.TextInput}
                    multiline={true}
                    maxLength={100}
                    numberOfLines={10}
                    value={comments}
                    placeholder={"Any comments?"}
                    onChangeText={(text) => setComments(text)}
                />
                <Text style={JourneyRequestPageStyle.hintText}>
                            Up to 100 symbols
                </Text>
            </View>
            <View style={JourneyRequestPageStyle.chooseOptionContainer}>
                <ChooseOption
                    text={"Do you have a baggage with you to transport?"}
                    value={isBaggaage}
                    onValueChanged={(value: any) => setBaggage(value)}
                />
            </View>
        </>
    );

    const ConfirmButton = () => (
        <View style={JourneyRequestPageStyle.buttonBlock}>
            <TouchableOpacity
                style={JourneyRequestPageStyle.confirmButton}
                onPress={() =>
                    navigation.navigate("Journey Page", {
                        journeyId: currentJourney?.id
                    })
                }
            >
                <Text style={JourneyRequestPageStyle.confirmButtonText}>
                        Confirm
                </Text>
            </TouchableOpacity>
        </View>
    );

    const journeyContent = () => (
        <View style={JourneyRequestPageStyle.mainContainer}>
            {isLoading ? (
                <Indicator
                    size="large"
                    color="#414045"
                    text="Loading information..."
                />
            ) : (
                <View style={JourneyRequestPageStyle.contentView}>
                    <Organizer />
                    <Separator />
                    <AdditionalInfo />
                    <ConfirmButton />
                </View>
            )}
        </View>
    );

    return (
        <>
            <BottomPopup
                style={JourneyRequestPageStyle.bottomPopup}
                snapPoints={[
                    120,
                    400
                ]}
                renderContent={journeyContent}
                initialSnap={0}
                renderHeader={() => {}}
                enabledInnerScrolling={false}
            />
        </>
    );
};

export default JourneyRequestPage;