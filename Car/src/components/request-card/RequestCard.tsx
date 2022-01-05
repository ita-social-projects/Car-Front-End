import React, {useContext, useEffect, useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Request from "../../../models/request/Request";
import * as navigation from "../navigation/Navigation";
import { useTheme } from "../theme/ThemeProvider";
import { trimTheStringIfTooLong } from "../../utils/GeneralHelperFunctions";
import { JOURNEY_CARD_WITH_FEE_HEIGHT, MAX_USER_FULL_NAME_LENGTH } from "../../constants/JourneyConstants";
import RequestCardStyle from "./RequestCardStyle";
import JourneyCardStyle from "../journey-card/JourneyCardStyle";
import Stop from "../../../models/stop/Stop";
import AuthContext from "../auth/AuthContext";
import {FIRST_ELEMENT_INDEX, LAST_INDEX_CORRECTION} from "../../constants/GeneralConstants";
import StopType from "../../../models/stop/StopType";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import {getTimeToShow} from "../../utils/JourneyHelperFunctions";
import {MAX_ADDRESS_NAME_LENGTH} from "../../constants/AddressConstants";

const RequestCard =
    (props: {
        request?: Request,
        displayFee?: boolean,
        applicantStops?: Stop[],
        passangersCount?: number,
        isPast: boolean
    }) => {
        const { colors } = useTheme();
        const request = props.request;
        const { user } = useContext(AuthContext);
        const [isDriver, setIsDriver] = useState(false);
        const [isPassenger, setIsPassenger] = useState(false);

        useEffect (() => {
            setIsDriver(request?.organizer?.id == user?.id);
        }, []);
        
        const fullName = `${request?.organizer?.name} ${request?.organizer?.surname}`;

        
        
        return (
            <View>
                <TouchableOpacity>
                    <View style={[RequestCardStyle.component,
                        { borderColor: colors.primary,
                            height: JOURNEY_CARD_WITH_FEE_HEIGHT }]}>
                        <View style={RequestCardStyle.driverInfoBlock}>
                            <View style={[RequestCardStyle.imageBlock, props.displayFee && { paddingBottom: 5.75 }]}>
                                <AvatarLogo user={request?.organizer} size={38.5} />
                            </View>
                            <View style={RequestCardStyle.driverTextBlock}>
                                <View style={RequestCardStyle.driverNameBlock}>
                                    <View>
                                        <Text style={[RequestCardStyle.driverNameText, { color: colors.primary }]} >
                                            {trimTheStringIfTooLong(fullName, MAX_USER_FULL_NAME_LENGTH)}'s ride
                                        </Text>
                                    </View>
                                    <View style={RequestCardStyle.moreOptionsBlock}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigation.navigate(
                                                    "Applicant Page",
                                                    {
                                                        userId:
                                                        request?.userId
                                                    }
                                                );
                                            }}
                                        >
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={RequestCardStyle.driverPositionBlock}>
                                    <Text style={[RequestCardStyle.driverPositionText,
                                        { color: colors.secondaryDark }]} >
                                        {request?.organizer?.position}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={RequestCardStyle.journeyDetailBlock}>
                            <Text style={[RequestCardStyle.timeText, { color: colors.accentBlue }]}>
                                "1234"
                            </Text>
                            {props.displayFee &&
                                <View>
                                    <Text style={{ ...RequestCardStyle.feeText, color: colors.primary }}>
                                        {request?.fee ? "Free" : "Paid"}
                                    </Text>
                                </View>
                            }
                        </View>
                        <View style={RequestCardStyle.stopsBlock}>
                            <View style={RequestCardStyle.firstStopBlock}>
                                <View style={[RequestCardStyle.stopCircleIcon,
                                    {
                                        backgroundColor: colors.secondaryLight,
                                        borderColor: colors.white
                                    }]} />
                                <Text style={[RequestCardStyle.stopsText, { color: colors.hover }]}>
                                    "123"
                                </Text>
                            </View>
                            <View style={[RequestCardStyle.stopStickIcon,
                                { backgroundColor: colors.secondaryLight }]} />
                            <View style={RequestCardStyle.lastStopBlock}>
                                <View style={[RequestCardStyle.stopCircleIcon,
                                    {
                                        backgroundColor: colors.secondaryLight,
                                        borderColor: colors.white
                                    }]} />
                                <Text style={[RequestCardStyle.stopsText, { color: colors.hover }]}>
                                    "123"
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

export default RequestCard;