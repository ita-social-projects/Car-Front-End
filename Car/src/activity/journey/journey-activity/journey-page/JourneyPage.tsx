import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import JourneyPageStyle from "./JourneyPageStyle";
import Journey from "../../../../../models/journey/Journey";
import StopType from "../../../../../models/stop/StopType";
import CarService from "../../../../../api-service/car-service/CarService";
import CarViewModel from "../../../../../models/car/CarViewModel";
import AsyncStorage from "@react-native-community/async-storage";
import {
    MAX_JOURNEY_PAGE_POPUP_HEIGHT,
    MEDIUM_JOURNEY_PAGE_POPUP_HEIGHT,
    MIN_JOURNEY_PAGE_POPUP_HEIGHT,
} from "../../../../constants/JourneyConstants";
import { MAX_POPUP_POSITION, MIN_POPUP_POSITION, ZERO_COORDINATE } from "../../../../constants/StylesConstants";
import DM from "../../../../components/styles/DM";
import JourneyPageProps from "./JourneyPageProps";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../map-address/SearchJourneyMapStyle";
import Stop from "../../../../../models/stop/Stop";
import CarBlock from "./CarBlock/CarBlock";
import StopsBlock from "./StopsBlock/StopsBlock";
import ParticipantsBlock from "./ParticipantsBlock/ParticipantsBlock";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import DriverBlock from "./DriverBlock/DriverBlock";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import * as navigation from "../../../../components/navigation/Navigation";
import { Portal } from "react-native-portalize";
import JourneyDetailsPageProps from "../journey-details-page/JourneyDetailsPageProps";
import { getStopByType, mapStopToWayPoint } from "../../../../utils/JourneyHelperFunctions";
import { ZERO_ID } from "../../../../constants/GeneralConstants";

const getStopCoordinates = (stop?: Stop) => {
    return {
        longitude: stop?.address?.longitude ?? ZERO_COORDINATE,
        latitude: stop?.address?.latitude ?? ZERO_COORDINATE
    };
};

interface JourneyPageComponent {
    showCancelRidePopup: () => void,
    editJourneyDetails: () => void,
    editJourneyRoute: () => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    ({ props }: {props: JourneyPageProps}): JSX.Element
}

const JourneyPage: JourneyPageComponent = ({ props }: { props: JourneyPageProps }) => {

    const [currentJourney, setJourney] = useState<Journey>(null);
    const { journeyId } = props.route.params;
    const { isDriver } = props.route.params;
    const { isPassenger } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [car, setCar] = useState<CarViewModel>(null);
    const [isRequested, setRequested] = useState(false);
    const [cancelRideModalIsVisible, setCancelRideModalIsVisible] = useState(false);
    const [cancelRideSuccessModalIsVisible, setCancelRideSuccessModalIsVisible] = useState(false);
    const [cancelRideErrorModalIsVisible, setCancelRideErrorModalIsVisible] = useState(false);
    const mapRef = useRef<MapView | null>(null);

    const onFocusHandler = () => {
        JourneyService.getJourney(journeyId).then((res) => {
            setJourney(res.data);
            mapRef.current?.fitToCoordinates(res.data?.journeyPoints,
                { edgePadding: { top: 20, right: 20, left: 20, bottom: 800 } });

            if (res.data?.car?.id === ZERO_ID) {
                endLoading();

                return;
            }

            CarService.getById(res.data?.car?.id!).then((carRes) => {
                setCar(carRes.data);
                endLoading();
            });
        });
    };

    const endLoading = () => {
        setLoading(false);
        moreOptionsRef?.current?.snapTo(MAX_POPUP_POSITION);
    };

    useEffect(() => {
        !isDriver && props.navigation?.setOptions({ headerRight: () => <View /> });
        !isDriver && !isPassenger && props.navigation?.setOptions({ headerTitle: "Request to Driver" });

        (async () => AsyncStorage.getItem("journeyId" + journeyId))().then((isReq) => {
            if (isReq == "1") {
                setRequested(true);
                (async () => (isDriver || isPassenger) && AsyncStorage.removeItem("journeyId" + journeyId))();
            }
        });

        const unsubscribeFromFocus = props.navigation?.addListener("focus", onFocusHandler);
        const unsubscribeFromBlur = props.navigation?.addListener(
            "blur", () => {
                console.log("blur");
                props.closeMoreOptionsPopup();
            });

        return () => {
            unsubscribeFromFocus!();
            unsubscribeFromBlur!();
        };
    }, []);

    JourneyPage.showCancelRidePopup = () => setCancelRideModalIsVisible(true);

    JourneyPage.editJourneyDetails = () => {
        if (!currentJourney) return;

        const properties: JourneyDetailsPageProps = {
            route: {
                params: {
                    journey: currentJourney,
                    from: mapStopToWayPoint(getStopByType(currentJourney, StopType.Start)),
                    to: mapStopToWayPoint(getStopByType(currentJourney, StopType.Finish)),
                    stops: currentJourney?.stops.filter(stop =>
                        stop?.type === StopType.Intermediate).map(mapStopToWayPoint),
                    duration:  currentJourney.duration,
                    routeDistance: currentJourney.routeDistance,
                    routePoints: currentJourney.journeyPoints,
                }
            }
        };

        navigation.navigate("Journey Details", properties.route.params);
    };

    JourneyPage.editJourneyRoute = () => {
        navigation.navigate("Create Journey", { journey: currentJourney });
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
                                title={getStopByType(currentJourney, StopType.Start)?.address?.name}
                                coordinate={getStopCoordinates(getStopByType(currentJourney, StopType.Start))}
                                image={require("../../../../../assets/images/maps-markers/From.png")}
                            />

                            <Marker
                                title={getStopByType(currentJourney, StopType.Finish)?.address?.name}
                                coordinate={getStopCoordinates(getStopByType(currentJourney, StopType.Finish))}
                                image={require("../../../../../assets/images/maps-markers/To.png")}
                            />

                            {currentJourney.stops.filter(stop =>
                                stop?.type === StopType.Intermediate).map(stop => (
                                <Marker
                                    key={stop?.index}
                                    title={stop?.address?.name}
                                    coordinate={getStopCoordinates(stop)}
                                    image={require("../../../../../assets/images/maps-markers/Stop.png")}
                                />))}

                            {props.route.params.applicantStops?.map(stop => (
                                <Marker
                                    key={stop?.index}
                                    title={stop?.address?.name}
                                    coordinate={getStopCoordinates(stop)}
                                    image={require("../../../../../assets/images/maps-markers/Stop.png")}
                                />))}
                        </>)}
                </MapView>
            </View>

            {!props.moreOptionsPopupIsOpen &&
                <Portal>
                    <BottomPopup
                        refForChild={(ref: any) => (moreOptionsRef.current = ref)}
                        style={{ backgroundColor: DM("white") }}
                        snapPoints={[
                            MAX_JOURNEY_PAGE_POPUP_HEIGHT,
                            isLoading ? MIN_JOURNEY_PAGE_POPUP_HEIGHT : MEDIUM_JOURNEY_PAGE_POPUP_HEIGHT,
                        ]}
                        initialSnap={MIN_POPUP_POSITION}
                        enabledGestureInteraction={true}
                        enabledInnerScrolling={true}
                        renderContent={
                            <View style={{ backgroundColor: DM("#FFFFFF"), width: "100%", height: "100%" }}>

                                <View style={JourneyPageStyle.detailsBlock}>
                                    <ScrollView
                                        nestedScrollEnabled={true}
                                        style={[JourneyPageStyle.contentView, { backgroundColor: DM("#FFFFFF") }]}
                                    >
                                        <CarBlock car={car} isOnOwnCar={Boolean(currentJourney?.isOnOwnCar)}/>

                                        <StopsBlock stops={currentJourney?.stops ?? []}/>

                                        {
                                            currentJourney?.comments ?
                                                (
                                                    <Text style={JourneyPageStyle.commentsBlock}>
                                                        <Text style={JourneyPageStyle.commentsLabel}>Comments: </Text>
                                                        <Text>{currentJourney.comments}</Text>
                                                    </Text>
                                                ) :
                                                (<></>)
                                        }

                                        <ParticipantsBlock journey={currentJourney} />
                                    </ScrollView>
                                </View>

                                <ButtonBlock
                                    isDriver={isDriver}
                                    isPassenger={isPassenger}
                                    isRequested={isRequested}
                                    journey={currentJourney}
                                    applicantStops={props.route.params.applicantStops}
                                />

                            </View>
                        }
                        renderHeader={<DriverBlock journey={currentJourney}/>}
                    />
                </Portal>
            }

            <ConfirmModal
                visible={cancelRideModalIsVisible}
                title={"Ride canceling"}
                confirmText={"Yes, cancel it"}
                cancelText={"No, keep it"}
                onConfirm={() => {
                    setCancelRideModalIsVisible(false);
                    JourneyService.delete(props.route.params.journeyId)
                        .then(() => setCancelRideSuccessModalIsVisible(true));
                }}
                disableModal={() => setCancelRideModalIsVisible(false)}
                subtitle={"Are you sure you want to cancel the ride?"}
            />

            <ConfirmModal
                visible={cancelRideSuccessModalIsVisible}
                title={"Ride canceling"}
                confirmText={"Ok"}
                hideCancelButton={true}
                onConfirm={() => {
                    setCancelRideSuccessModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                disableModal={() => {
                    setCancelRideSuccessModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                subtitle={"Ride was successfully canceled"}
            />

            <ConfirmModal
                visible={cancelRideErrorModalIsVisible}
                title={"Ride canceling"}
                confirmText={"Ok"}
                hideCancelButton={true}
                onConfirm={() => setCancelRideErrorModalIsVisible(false)}
                disableModal={() => setCancelRideErrorModalIsVisible(false)}
                subtitle={"Ride canceling is failed"}
            />
        </>
    );
};

JourneyPage.showCancelRidePopup = () => console.log("Outer cancelRide()");
JourneyPage.editJourneyDetails = () => console.log("Outer editJourneyDetails()");
JourneyPage.editJourneyRoute = () => console.log("Outer editJourneyRoute()");

export default JourneyPage;