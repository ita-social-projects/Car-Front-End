import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, TextInput, View, Keyboard } from "react-native";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../../models/journey/Journey";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import JourneyRequestPageStyle from "./JourneyRequestPageStyle";
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
    MAX_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
    MEDIUM_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
    MIN_JOURNEY_REQUEST_PAGE_POPUP_HEIGHT,
} from "../../../../constants/JourneyConstants";
import {
    MAX_POPUP_POSITION,
    MIN_POPUP_POSITION
} from "../../../../constants/StylesConstants";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getTimeToShow } from "../../../../utils/JourneyHelperFunctions";
import JourneyPageStyle from "../journey-page/JourneyPageStyle";

const JourneyRequestPage = (props: { route: { params: { journeyId: number } } }) => {

    const { colors } = useTheme();
    const [currentJourney, setJourney] = useState({} as Journey);
    const { user } = useContext(AuthContext);
    const { journeyId } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [isRequested, setRequested] = useState(false);

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
                journeyId: journeyId,
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
                })().then(() => navigation.goBack());
            }
        });
    };

    const Comments = () => {
        const [text, setText] = useState("");

        return (
            <TextInput
                style={[JourneyRequestPageStyle.textInput,
                    {
                        borderColor: colors.primary,
                        color: colors.primary,
                    }]}
                multiline={true}
                maxLength={100}
                numberOfLines={10}
                value={text}
                placeholder={"Any comments?"}
                placeholderTextColor={colors.secondaryDark}
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
        <View style={[JourneyRequestPageStyle.pageContainer, { backgroundColor: colors.greenGradientFrom }]}>
            <Text style={[JourneyRequestPageStyle.pageText, { color: colors.hover }]}>
                Map implementation is in progress
            </Text>

            <BottomPopup
                refForChild={ref => (moreOptionsRef.current = ref)}
                style={{ backgroundColor: colors.white }}
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
                        style={[JourneyRequestPageStyle.mainContainer, { backgroundColor: colors.white }]}
                        enableOnAndroid
                    >
                        <View style={JourneyRequestPageStyle.contentView}>

                            {/* Organizer block */}

                            <View style={JourneyRequestPageStyle.userBlock}>
                                <View style={JourneyRequestPageStyle.userImageBlock}>
                                    <AvatarLogo user={currentJourney?.organizer} size={38.5} />
                                </View>
                                <View style={JourneyRequestPageStyle.userInfoBlock}>
                                    <Text style={[JourneyRequestPageStyle.userNameText, { color: colors.primary }]}>
                                        {currentJourney?.organizer?.name}{" "}
                                        {currentJourney?.organizer?.surname}'s ride
                                    </Text>
                                    <View style={JourneyRequestPageStyle.userSecondaryInfoBlock}>
                                        <Text style={[JourneyRequestPageStyle.userRoleText,
                                            { color: colors.secondaryDark }]}>
                                            {currentJourney?.organizer?.position}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={JourneyPageStyle.journeyDetailBlock}>
                                <Text style={[JourneyPageStyle.dateText, { color: colors.accentBlue }]}>
                                    {getTimeToShow(currentJourney)}
                                </Text>
                                <Text style={[JourneyPageStyle.feeText, { color: colors.primary }]}>
                                    {currentJourney?.isFree ? "Free" : "Paid"}
                                </Text>
                            </View>

                            <View style={JourneyRequestPageStyle.driverBlockWhiteSpace} />

                            <Divider style={[JourneyRequestPageStyle.separator,
                                { backgroundColor: colors.secondaryLight }]} />

                            {/* Additional Info */}

                            <View style={JourneyRequestPageStyle.commentsContainer}>
                                <Text style={[JourneyRequestPageStyle.commentsText, { color: colors.hover }]}>
                                    Comments
                                </Text>
                                <Comments />
                                <Text style={[JourneyRequestPageStyle.hintText, { color: colors.primary }]}>
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
                                            backgroundColor: colors.white,
                                            borderColor: colors.primary
                                        },
                                        isRequested && JourneyRequestPageStyle.pressedButton]}
                                    onPress={() =>
                                        sendRequest()
                                    }
                                    disabled={isRequested}
                                >
                                    <Text style={[JourneyRequestPageStyle.confirmButtonText,
                                        { color: colors.primary }]}>
                                        {isRequested ? "Requested" : "Confirm"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[JourneyRequestPageStyle.lining, { backgroundColor: colors.white }]} />
                    </KeyboardAwareScrollView>
                }
            />
        </View>
    );
};

export default JourneyRequestPage;
