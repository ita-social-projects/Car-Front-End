import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, TextInput, View, Keyboard } from "react-native";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../models/journey/Journey";
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
    HTTP_STATUS_OK
} from "../../../../constants/Constants";
import {
    INITIAL_TIME,
    MAX_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
    MEDIUM_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
    MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
} from "../../../../constants/JourneyConstants";
import {
    MAX_POPUP_POSITION,
    MIN_POPUP_POSITION
} from "../../../../constants/StylesConstants";
import DM from "../../../../components/styles/DM";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const JourneyRequestPage = (props: {route: {params: { journeyId: number }}}) => {

    const [currentJourney, setJourney] = useState({} as Journey);
    const { user } = useContext(AuthContext);
    const { journeyId } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [isRequested, setRequested] = useState(false);

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
                senderId: user?.id!,
                receiverId: currentJourney?.organizer?.id!,
                type: 0,
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
                style={[JourneyRequestPageStyle.textInput,
                    {
                        borderColor: DM("black"),
                        color: DM("#000000"),
                    }]}
                multiline={true}
                maxLength={100}
                numberOfLines={10}
                value={text}
                placeholder={"Any comments?"}
                placeholderTextColor={DM("#888888")}
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
                text={"Have you got any luggage with you?"}
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
        <View style={[JourneyRequestPageStyle.pageContainer, { backgroundColor: DM("#88FF88") }]}>
            <Text style={[JourneyRequestPageStyle.pageText, { color: DM("#222222") }]}>
                    Map implementation is in progress
            </Text>

            <BottomPopup
                refForChild={ref => (moreOptionsRef.current = ref)}
                style={{ backgroundColor: DM("white") }}
                snapPoints={[
                    MAX_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
                    isLoading ? MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT : MEDIUM_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
                ]}
                initialSnap={MIN_POPUP_POSITION}
                enabledInnerScrolling={false}
                renderHeader={<></>}
                onCloseEnd={Keyboard.dismiss}
                renderContent={
                    <KeyboardAwareScrollView
                        style={[JourneyRequestPageStyle.mainContainer, { backgroundColor: DM("white") }]}
                        enableOnAndroid
                    >
                        <View style={JourneyRequestPageStyle.contentView}>

                            {/* Organizer block */}

                            <View style={JourneyRequestPageStyle.userBlock}>
                                <View style={JourneyRequestPageStyle.userImageBlock}>
                                    <AvatarLogo user={currentJourney?.organizer} size={38.5} />
                                </View>
                                <View style={JourneyRequestPageStyle.userInfoBlock}>
                                    <Text style={[JourneyRequestPageStyle.userNameText, { color: DM("black") }]}>
                                        {currentJourney?.organizer?.name}{" "}
                                        {currentJourney?.organizer?.surname}'s ride
                                    </Text>
                                    <View style={JourneyRequestPageStyle.userSecondaryInfoBlock}>
                                        <Text style={[JourneyRequestPageStyle.userRoleText, { color: DM("#909095") }]}>
                                            {currentJourney?.organizer?.position}
                                        </Text>
                                        <Text style={[JourneyRequestPageStyle.dateText, { color: DM("#02A2CF") }]}>
                                            {Moment(currentJourney?.departureTime ?? INITIAL_TIME).calendar()}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={JourneyRequestPageStyle.driverBlockWhiteSpace} />

                            <Divider style={[JourneyRequestPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />

                            {/* Additional Info */}

                            <View style={JourneyRequestPageStyle.commentsContainer}>
                                <Text style={[JourneyRequestPageStyle.commentsText, { color: DM("#414045") }]}>
                                    Comments
                                </Text>
                                <Comments />
                                <Text style={[JourneyRequestPageStyle.hintText, { color: DM("#000000") }]}>
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
                                        {
                                            backgroundColor: DM("white"),
                                            borderColor: DM("black")
                                        },
                                        isRequested && JourneyRequestPageStyle.pressedButton]}
                                    onPress={() =>
                                        sendRequest()
                                    }
                                    disabled={isRequested}
                                >
                                    <Text style={[JourneyRequestPageStyle.confirmButtonText, { color: DM("black") }]}>
                                        {isRequested ? "Requested" : "Confirm"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[JourneyRequestPageStyle.lining, { backgroundColor: DM("white") }]} />
                    </KeyboardAwareScrollView>
                }
            />
        </View>
    );
};

export default JourneyRequestPage;
