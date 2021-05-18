import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import JourneyPageStyle from "./JourneyPageStyle";
import Journey from "../../../../../models/journey/Journey";
import { LinearTextGradient } from "react-native-text-gradient";
import { Divider } from "react-native-elements";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import StopType from "../../../../../models/stop/StopType";
import * as navigation from "../../../../components/navigation/Navigation";
import CarService from "../../../../../api-service/car-service/CarService";
import CarViewModel from "../../../../../models/car/CarViewModel";
import AsyncStorage from "@react-native-community/async-storage";
import ImageService from "../../../../../api-service/image-service/ImageService";
import {
    FIRST_ELEMENT_INDEX,
    GRADIENT_END,
    GRADIENT_START,
    INITIAL_TIME,
    JOURNEY_CONTENT_HEIGHT,
    MAX_JOURNEY_PAGE_POPUP_HEIGHT,
    MAX_POPUP_POSITION,
    MEDIUM_JOURNEY_PAGE_POPUP_HEIGHT,
    MIN_JOURNEY_PAGE_POPUP_HEIGHT,
    MIN_POPUP_POSITION, ZERO_COORDINATE
} from "../../../../constants/Constants";
import DM from "../../../../components/styles/DM";
import JourneyPageProps from "./JourneyPageProps";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import Stop from "../../../../../models/stop/Stop";

const getStopCoordinates = (stop?: Stop) => {
    return {
        longitude: stop?.address?.longitude ?? ZERO_COORDINATE,
        latitude: stop?.address?.latitude ?? ZERO_COORDINATE
    };
};

const JourneyPage = ({ props }: { props: JourneyPageProps }) => {

    const [currentJourney, setJourney] = useState<Journey>(null);
    const { journeyId } = props.route.params;
    const { isDriver } = props.route.params;
    const { isPassenger } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [car, setCar] = useState<CarViewModel>(null);
    const [isRequested, setRequested] = useState(false);
    const mapRef = useRef<MapView | null>(null);

    useEffect(() => {
        !isDriver && props.navigation?.setOptions({ headerRight: () => <View /> });
        !isDriver && !isPassenger && props.navigation?.setOptions({ headerTitle: "Request to Driver" });

        (async () => AsyncStorage.getItem("journeyId" + journeyId))().then((isReq) => {
            if (isReq == "1") {
                setRequested(true);
                (async () => (isDriver || isPassenger) && AsyncStorage.removeItem("journeyId" + journeyId))();
            }
        });

        JourneyService.getJourney(journeyId).then((res) => {
            setJourney(res.data);
            mapRef.current?.fitToCoordinates(res.data?.journeyPoints,
                { edgePadding: { top: 20, right: 20, left: 20, bottom: 800 } });
            CarService.getById(res.data?.car?.id!).then((carRes) => {
                setCar(carRes.data);
                setLoading(false);
                moreOptionsRef?.current?.snapTo(MAX_POPUP_POSITION);
            });
        });
    }, []);

    const getStopByType = (stopType: StopType) => {
        return currentJourney?.stops.filter(stop => stop?.type === stopType)[FIRST_ELEMENT_INDEX];
    };

    const moreOptionsRef = useRef<any>(null);

    return (
        <>
            <View style={[JourneyPageStyle.pageContainer, { backgroundColor: DM("#88FF88") }]}>
                <MapView
                    ref={ref => {
                        mapRef.current = ref;
                    }}
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    customMapStyle={mapStyle}
                    showsCompass={false}
                    showsMyLocationButton={false}
                >
                    {currentJourney && (
                        <>
                            <Polyline
                                coordinates={currentJourney.journeyPoints}
                                strokeWidth={5}
                                strokeColor={"#027ebd"}
                            />

                            <Marker
                                title={getStopByType(StopType.Start)?.address?.name}
                                coordinate={getStopCoordinates(getStopByType(StopType.Start))}
                                image={require("../../../../../assets/images/maps-markers/From.png")}
                            />

                            <Marker
                                title={getStopByType(StopType.Finish)?.address?.name}
                                coordinate={getStopCoordinates(getStopByType(StopType.Finish))}
                                image={require("../../../../../assets/images/maps-markers/To.png")}
                            />

                            {currentJourney.stops.filter(stop =>
                                stop?.type === StopType.Intermediate).map(stop => (
                                <Marker
                                    key={stop?.id}
                                    title={stop?.address?.name}
                                    coordinate={getStopCoordinates(stop)}
                                    image={require("../../../../../assets/images/maps-markers/Stop.png")}
                                />))}
                        </>)}
                </MapView>
            </View>

            <BottomPopup
                refForChild={moreOptionsRef}
                style={{ backgroundColor: DM("white") }}
                snapPoints={[
                    MAX_JOURNEY_PAGE_POPUP_HEIGHT,
                    isLoading ? MIN_JOURNEY_PAGE_POPUP_HEIGHT : MEDIUM_JOURNEY_PAGE_POPUP_HEIGHT,
                ]}
                initialSnap={MIN_POPUP_POSITION}
                enabledGestureInteraction={true}
                enabledInnerScrolling={true}
                renderContent={
                    <View style={{ backgroundColor: DM("#FFFFFF"),
                        height: "100%", width: "100%" }}>

                        <View style={{ height: 300 }}>
                            <View style={{ height: "170%" }}>

                                <ScrollView
                                    style={[JourneyPageStyle.contentView, { backgroundColor: DM("#FFFFFF") }]}
                                >
                                    {/* Car block */}

                                    <View style={JourneyPageStyle.carContainer}>
                                        <View style={JourneyPageStyle.carAvatarContainer}>
                                            {car?.imageId ? (
                                                <Image
                                                    source={{
                                                        uri: ImageService.getImageById(car?.imageId)
                                                    }}
                                                    style={JourneyPageStyle.carAvatar}
                                                />
                                            ) : (
                                                <Ionicons
                                                    name={"car"}
                                                    size={20}
                                                    color="#414045"
                                                />
                                            )}
                                        </View>
                                        <View style={JourneyPageStyle.carInfoContainer}>
                                            <Text style={[JourneyPageStyle.carName, { color: DM("#000000") }]}>
                                                {car?.model?.brand?.name} {car?.model?.name}
                                            </Text>
                                            <Text style={[JourneyPageStyle.carPlateNumber, { color: DM("#414045") }]}>
                                                {car?.plateNumber}
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Stops block */}

                                    <View style={JourneyPageStyle.stopsBlock}>
                                        {currentJourney?.stops.length ? currentJourney?.stops.map((item) =>
                                            <View key={item?.id} style={JourneyPageStyle.stopListItem}>
                                                <View style={JourneyPageStyle.stopListItemRow}>
                                                    <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                                                    {item?.type !== StopType.Finish && (
                                                        <View style={[JourneyPageStyle.stopCustomLineIcon,
                                                            { backgroundColor: DM("#AAA9AE") }
                                                        ]} />
                                                    )}
                                                </View>
                                                <Text style={{ color: DM("black") }}>
                                                    {item?.address?.name}
                                                </Text>
                                            </View>
                                        ) : (
                                            <>
                                                <View style={JourneyPageStyle.stopListItem}>
                                                    <View style={JourneyPageStyle.stopListItemRow}>
                                                        <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                                                        <View style={[JourneyPageStyle.stopCustomLineIcon,
                                                            { backgroundColor: DM("#AAA9AE") }]}
                                                        />
                                                    </View>
                                                    <Text style={{ color: DM("black") }}>
                                                        Location A
                                                    </Text>
                                                </View>
                                                <View style={JourneyPageStyle.stopListItem}>
                                                    <View style={JourneyPageStyle.stopListItemRow}>
                                                        <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                                                    </View>
                                                    <Text style={{ color: DM("black") }}>
                                                        Location B
                                                    </Text>
                                                </View>
                                            </>
                                        )}
                                    </View>

                                    {/* Participants block */}

                                    <Text style={[JourneyPageStyle.applicantsHeader, { color: DM("black") }]}>
                                    SoftServians {currentJourney?.participants?.length}/
                                        {currentJourney?.countOfSeats}
                                    </Text>
                                    {currentJourney?.participants.map((item, index) => (
                                        <View key={index}>
                                            <TouchableOpacity
                                                style={JourneyPageStyle.applicant}
                                                onPress={() =>
                                                    navigation.navigate("Applicant Page", {
                                                        userId: item?.id
                                                    })
                                                }
                                            >
                                                <View style={JourneyPageStyle.userImageBlock}>
                                                    <AvatarLogo user={item} size={38.5} />
                                                </View>
                                                <View style={JourneyPageStyle.userInfoBlock}>
                                                    <LinearTextGradient
                                                        locations={[GRADIENT_START, GRADIENT_END]}
                                                        colors={["#00A3CF", "#5552A0"]}
                                                        start={{ x: 0, y: 0 }}
                                                        end={{ x: 1, y: 0 }}
                                                    >
                                                        <Text style={[JourneyPageStyle.applicantNameText,
                                                            { color: DM("#00A3CF") }
                                                        ]}>
                                                            {item?.name} {item?.surname}
                                                        </Text>
                                                    </LinearTextGradient>
                                                    <View style={JourneyPageStyle.userSecondaryInfoBlock}>
                                                        <Text style={[JourneyPageStyle.userRoleText,
                                                            { color: DM("#909095") }]}>
                                                            {item?.position}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>

                                            <Divider style={[JourneyPageStyle.separator,
                                                { backgroundColor: DM("#C1C1C5") }]} />
                                        </View>
                                    ))}

                                    <View style={{ height: JOURNEY_CONTENT_HEIGHT }}/>
                                </ScrollView>
                            </View>
                        </View>

                        {/* Buttons block */}

                        <View style={[
                            JourneyPageStyle.buttons,
                            { backgroundColor: DM("#FFFFFF") }
                        ]}>
                            <Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />
                            <View style={JourneyPageStyle.buttonsBlock}>
                                {(isDriver || isPassenger) && (
                                    <TouchableOpacity
                                        style={[JourneyPageStyle.messageAllButton, {
                                            backgroundColor: DM("white"),
                                            borderColor: DM("black") }
                                        ]}
                                        onPress={() =>
                                            navigation.navigate("MessagesTabs", {
                                                screen: "Chat",
                                                params: {
                                                    chatId: currentJourney?.id,
                                                    header:
                                                        currentJourney?.organizer?.name +
                                                        " " +
                                                        currentJourney?.organizer?.surname +
                                                        "'s ride"
                                                }
                                            })
                                        }
                                    >
                                        <Text style={[JourneyPageStyle.messageAllButtonText, { color: DM("black") }]}>
                                            Message to all
                                        </Text>
                                    </TouchableOpacity>
                                )}
                                {!isDriver && !isPassenger && (
                                    <TouchableOpacity
                                        style={[
                                            JourneyPageStyle.requestButton,
                                            { backgroundColor: DM("black") },
                                            isRequested && { backgroundColor: DM("#00000033") }]}
                                        onPress={() => navigation.navigate("Journey Request Page", {
                                            journeyId: currentJourney?.id
                                        })}
                                        disabled={isRequested}
                                    >
                                        <Text style={[JourneyPageStyle.requestButtonText, { color: DM("white") }]}>
                                            {isRequested ? "Requested" : "Send request"}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                            <Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />
                            <Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />
                        </View>
                    </View>
                }
                renderHeader={

                    <View style={[JourneyPageStyle.contentView, { backgroundColor: DM("white") }]}>

                        {/* Driver block */}

                        <TouchableOpacity
                            style={JourneyPageStyle.userBlock}
                            onPress={() =>
                                navigation.navigate("Applicant Page", {
                                    userId: currentJourney?.organizer?.id
                                })
                            }
                        >
                            <View style={JourneyPageStyle.userImageBlock}>
                                <AvatarLogo user={currentJourney?.organizer} size={38.5} />
                            </View>
                            <View style={JourneyPageStyle.userInfoBlock}>
                                <Text style={[JourneyPageStyle.userNameText, { color: DM("black") }]}>
                                    {currentJourney?.organizer?.name}{" "}
                                    {currentJourney?.organizer?.surname}'s ride
                                </Text>
                                <View style={JourneyPageStyle.userSecondaryInfoBlock}>
                                    <Text style={[JourneyPageStyle.userRoleText, { color: DM("#909095") }]}>
                                        {currentJourney?.organizer?.position}
                                    </Text>
                                    <Text style={[JourneyPageStyle.dateText, { color: DM("#02A2CF") }]}>
                                        {moment(new Date(currentJourney?.departureTime ?? INITIAL_TIME)).calendar()}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={JourneyPageStyle.driverBlockWhiteSpace} />
                        <Divider style={[JourneyPageStyle.separator, { backgroundColor: DM("#C1C1C5") }]} />
                    </View>
                }
            />
        </>
    );
};

export default JourneyPage;
