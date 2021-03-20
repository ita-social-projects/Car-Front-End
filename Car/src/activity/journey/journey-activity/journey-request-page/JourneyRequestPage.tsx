import React, { useContext, useEffect, useRef, useState } from "react";
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
    MAX_POPUP_POSITION,
    MEDIUM_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
    MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
    MIN_POPUP_POSITION
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
                moreOptionsRef?.current?.snapTo(MAX_POPUP_POSITION);
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
                `{"title": "New Applicant", "comments": "${comments}", "hasLuggage": "${isLuggage}"}`,
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

    const Comments = () => {
        const [text, setText] = useState("");

        return (
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
        );
    };

    const Luggage = () => {

        const [isBaggaage, setBaggage] = useState(false);

        return (
            <ChooseOption
                text={"Do you have a baggage with you to transport?"}
                value={isBaggaage}
                onValueChanged={(value: boolean) => {
                    isLuggage = value;
                    setBaggage(value);
                }}
            />
        );
    };

    const moreOptionsRef = useRef<any>(null);

    return (
        <View style={JourneyRequestPageStyle.pageContainer}>
            <Text style={JourneyRequestPageStyle.pageText}>
                    Map implementation is in progress
            </Text>

            <BottomPopup
                refForChild={moreOptionsRef}
                style={JourneyRequestPageStyle.bottomPopup}
                snapPoints={[
                    MAX_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
                    isLoading ? MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT : MEDIUM_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
                ]}
                initialSnap={MIN_POPUP_POSITION}
                enabledInnerScrolling={false}
                renderHeader={<></>}
                renderContent={
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

                                {/* Organizer block */}

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

                                <Divider style={JourneyRequestPageStyle.separator} />

                                {/* Additional Info */}

                                <View style={JourneyRequestPageStyle.commentsContainer}>
                                    <Text style={JourneyRequestPageStyle.commentsText}>
                                        Comments
                                    </Text>
                                    <Comments />
                                    <Text style={JourneyRequestPageStyle.hintText}>
                                        Up to 100 symbols
                                    </Text>
                                </View>
                                <View style={JourneyRequestPageStyle.chooseOptionContainer}>
                                    <Luggage />
                                </View>

                                {/* Confirm button */}

                                <View style={JourneyRequestPageStyle.buttonBlock}>
                                    <TouchableOpacity
                                        style={[
                                            JourneyRequestPageStyle.confirmButton,
                                            isRequested && JourneyRequestPageStyle.pressedButton]}
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
                            </View>
                        )}
                    </View>
                }
            />
        </View>
    );
};

export default JourneyRequestPage;