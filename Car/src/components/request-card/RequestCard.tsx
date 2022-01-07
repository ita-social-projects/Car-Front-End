import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import Request from "../../../models/request/Request";
import { useTheme } from "../theme/ThemeProvider";
import { trimTheStringIfTooLong } from "../../utils/GeneralHelperFunctions";
import { JOURNEY_CARD_WITH_FEE_HEIGHT, MAX_USER_FULL_NAME_LENGTH } from "../../constants/JourneyConstants";
import JourneyCardStyle from "../journey-card/JourneyCardStyle";
import AuthContext from "../auth/AuthContext";
import AvatarLogo from "../avatar-logo/AvatarLogo";
import { getRequestTimeToShow } from "../../utils/JourneyHelperFunctions";
import { getAddressByCoordinatesAsync } from "../../utils/LocationHelperFunctions";

const RequestCard =
    (props: {
        request?: Request,
        displayFee?: boolean,
        passangersCount?: number,
        isPast: boolean
    }) => {
        const { colors } = useTheme();
        const request = props.request;
        const { user } = useContext(AuthContext);

        const fullName = `${user?.name} ${user?.surname}`;

        const GetFirstLocation = () => {
            let locationName;
            const [fetchedData, setFetchedData] = useState([]);

            useEffect(() => {
                const getData = async () => {
                    locationName = await getAddressByCoordinatesAsync(
                        {
                            latitude: request!.from.latitude,
                            longitude: request!.from.longitude
                        });
                    setFetchedData(locationName);
                };

                locationName = getData() ?? "Location A";
            }, []);

            return fetchedData;
        };

        const GetSecondLocation = () => {
            let locationName;
            const [fetchedData, setFetchedData] = useState([]);

            useEffect(() => {
                const getData = async () => {
                    locationName = await getAddressByCoordinatesAsync(
                        {
                            latitude: request!.to.latitude,
                            longitude: request!.to.longitude
                        });
                    setFetchedData(locationName);
                };

                locationName = getData() ?? "Location A";
            }, []);

            return fetchedData;
        };

        return (
            <View>
                <View style={[JourneyCardStyle.component,
                    {
                        borderColor: colors.primary,
                        height: JOURNEY_CARD_WITH_FEE_HEIGHT
                    }]}>
                    <View style={JourneyCardStyle.driverInfoBlock}>
                        <View style={[JourneyCardStyle.imageBlock, props.displayFee && { paddingBottom: 5.75 }]}>
                            <AvatarLogo user={user} size={38.5}/>
                        </View>
                        <View style={JourneyCardStyle.driverTextBlock}>
                            <View style={JourneyCardStyle.driverNameBlock}>
                                <View>
                                    <Text style={[JourneyCardStyle.driverNameText, { color: colors.primary }]}>
                                        {trimTheStringIfTooLong(fullName, MAX_USER_FULL_NAME_LENGTH)}'s ride
                                    </Text>
                                </View>
                                <View style={JourneyCardStyle.moreOptionsBlock}>
                                </View>
                            </View>
                            <View style={JourneyCardStyle.driverPositionBlock}>
                                <Text style={[JourneyCardStyle.driverPositionText,
                                    { color: colors.secondaryDark }]}>
                                    {user?.position}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={JourneyCardStyle.journeyDetailBlock}>
                        <Text style={[JourneyCardStyle.timeText, { color: colors.accentBlue }]}>
                            {getRequestTimeToShow(request)}
                        </Text>
                        {props.displayFee &&
                            <View>
                                <Text style={{ ...JourneyCardStyle.feeText, color: colors.primary }}>
                                    {request?.fee ? "Free" : "Paid"}
                                </Text>
                            </View>
                        }
                    </View>
                    <View style={JourneyCardStyle.stopsBlock}>
                        <View style={JourneyCardStyle.firstStopBlock}>
                            <View style={[JourneyCardStyle.stopCircleIcon,
                                {
                                    backgroundColor: colors.secondaryLight,
                                    borderColor: colors.white
                                }]}/>
                            <Text style={[JourneyCardStyle.stopsText, { color: colors.hover }]}>
                                {GetFirstLocation()}
                            </Text>
                        </View>
                        <View style={[JourneyCardStyle.stopStickIcon,
                            { backgroundColor: colors.secondaryLight }]}/>
                        <View style={JourneyCardStyle.lastStopBlock}>
                            <View style={[JourneyCardStyle.stopCircleIcon,
                                {
                                    backgroundColor: colors.secondaryLight,
                                    borderColor: colors.white
                                }]}/>
                            <Text style={[JourneyCardStyle.stopsText, { color: colors.hover }]}>
                                {GetSecondLocation()}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

export default RequestCard;