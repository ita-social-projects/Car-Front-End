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
import * as navigation from "../../../../components/navigation/Navigation";
import AsyncStorage from "@react-native-community/async-storage";
import {
    HTTP_STATUS_OK,
    MAX_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
    MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT
} from "../../../../constants/Constants";

const JourneyRequestPage = (props: any) => {

    const [currentJourney, setJourney] = useState({} as Journey);
    const { user } = useContext(AuthContext);
    const { journeyId } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [isRequested, setRequested] = useState(true);

    const { Popup } = require("popup-ui");

    let isLuggage = false;
    let comments = "";

    useEffect(() => {
        JourneyService.getJourney(journeyId).then((res) => {
            setJourney(res.data);
            (async () => AsyncStorage.getItem("journeyId" + journeyId))().then((isReq) => {
                setRequested(isReq == "1");
                setLoading(false);
            });
        });
    }, []);

    const sendRequest = () => {
        NotificationsService.addNotification(
            {
                senderId: user?.id,
                receiverId: currentJourney?.organizer?.id!,
                type: 1,
                jsonData:
                "{\"title\": \"New Applicant\", \"comments\": \"" +
                comments +
                "\", \"hasLuggage\": \"" +
                isLuggage +
                "\"}",
            }
        ).then((res) => {
            if (res.status == HTTP_STATUS_OK) {
                setRequested(true);
                (async () => {
                    await AsyncStorage.setItem(
                        "journeyId" + currentJourney?.id,
                        "1"
                    );
                })().then(() => showCongratulations());
            }
        });
    };

    const showCongratulations = () => {
        Popup.show({
            type: "Success",
            title: "Complete!",
            button: true,
            textBody: "Your request has been sent to the driver",
            buttonText: "Ok",
            callback: () => {
                Popup.hide();
                navigation.goBack();
            }
        });
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
                        onChangeText={(fromInput) => {
                            comments = fromInput;
                            setText(fromInput);
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
                style={[JourneyRequestPageStyle.confirmButton, isRequested && JourneyRequestPageStyle.pressedButton]}
                onPress={() =>
                    sendRequest()
                }
                disabled={isRequested}
            >
                <Text style={JourneyRequestPageStyle.confirmButtonText}>
                    {isRequested ? "Requested" : "Confirm"}
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
                    MAX_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
                    MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
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