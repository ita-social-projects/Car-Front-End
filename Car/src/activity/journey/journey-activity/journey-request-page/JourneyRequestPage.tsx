import React, { useContext, useEffect, useState } from "react";
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
import NotificationsService from "../../../../../api-service/notifications-service/NotificationsService";
import AuthContext from "../../../../components/auth/AuthContext";

const JourneyRequestPage = (props: any) => {

    const [currentJourney, setJourney] = useState({} as Journey);
    const { user } = useContext(AuthContext);
    const { journeyId } = props.route.params;
    const [isLoading, setLoading] = useState(true);

    let isLuggage = false;
    let comments = "";

    useEffect(() => {
        JourneyService.getJourney(journeyId).then((res) => {
            setJourney(res.data);
            setLoading(false);
        });
    }, []);

    const sendRequest = () => {
        NotificationsService.addNotification(
            {
                senderId: user?.id,
                receiverId: currentJourney?.organizer?.id!,
                type: 1,
                jsonData:
                "{\"title:\" \"New Applicant\", \"comments\": \"" +
                comments +
                "\", \"hasLuggage\": \"" +
                isLuggage +
                "\"}",
            }
        ).then((res) => console.log(res));
    };

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

    const AdditionalInfo = () => {

        const [text, setText] = useState("");
        const [isBaggaage, setBaggage] = useState(false);

        return (
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
                        value={text}
                        placeholder={"Any comments?"}
                        onChangeText={(text) => {
                            comments = text;
                            setText(text);
                        }}
                    />
                    <Text style={JourneyRequestPageStyle.hintText}>
                            Up to 100 symbols
                    </Text>
                </View>
                <View style={JourneyRequestPageStyle.chooseOptionContainer}>
                    <ChooseOption
                        text={"Do you have a baggage with you to transport?"}
                        value={isBaggaage}
                        onValueChanged={(value: boolean) => {
                            isLuggage = value;
                            setBaggage(value);
                        }}
                    />
                </View>
            </>
        );
    };

    const ConfirmButton = () => (
        <View style={JourneyRequestPageStyle.buttonBlock}>
            <TouchableOpacity
                style={JourneyRequestPageStyle.confirmButton}
                onPress={() =>
                    sendRequest()
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
                <View style={JourneyRequestPageStyle.loadingContainer}>
                    <Indicator
                        size="large"
                        color="#414045"
                        text="Loading information..."
                    />
                </View>
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
        <View style={JourneyRequestPageStyle.pageContainer}>
            <Text style={JourneyRequestPageStyle.pageText}>
                    Map implementation is in progress
            </Text>

            <BottomPopup
                style={JourneyRequestPageStyle.bottomPopup}
                snapPoints={[
                    400,
                    120,
                ]}
                renderContent={journeyContent}
                initialSnap={0}
                renderHeader={() => <></>}
                enabledInnerScrolling={false}
            />
        </View>
    );
};

export default JourneyRequestPage;