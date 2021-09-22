import React, { useContext, useEffect, useRef, useState } from "react";
import { View } from "react-native";
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
import { MAX_POPUP_POSITION, MIN_POPUP_POSITION } from "../../../../constants/StylesConstants";
import DM from "../../../../components/styles/DM";
import JourneyPageProps from "./JourneyPageProps";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../search-journey-map/SearchJourneyMapStyle";
import ButtonBlock from "./blocks/button-block/ButtonBlock";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import * as navigation from "../../../../components/navigation/Navigation";
import { Portal } from "react-native-portalize";
import JourneyDetailsPageProps from "../journey-details-page/JourneyDetailsPageProps";
import {
    getStopByType,
    getStopCoordinates,
    mapStopToMarker,
    mapStopToWayPoint
} from "../../../../utils/JourneyHelperFunctions";
import {
    FIRST_ELEMENT_INDEX,
    SECOND_ELEMENT_INDEX,
    THIRD_ELEMENT_INDEX,
    ZERO_ID
} from "../../../../constants/GeneralConstants";
import NotificationsService from "../../../../../api-service/notifications-service/NotificationsService";
import { HTTP_STATUS_OK } from "../../../../constants/Constants";
import AuthContext from "../../../../components/auth/AuthContext";
import NotificationType from "../../../../../models/notification/NotificationType";
import ConfirmModalProps from "../../../../components/confirm-modal/ConfirmModalProps";
import {
    requestSendingFailedModal,
    rideCancelingErrorModal
} from "../../../../components/modals/JourneyPageModals";
import Stop from "../../../../../models/stop/Stop";
import { initialCamera } from "../../../../constants/AddressConstants";
import { isDarkMode } from "../../../../components/theme/ThemeProvider";
import { darkMapStyle } from "../../../../constants/DarkMapStyleConstant";
import CarBlock from "./blocks/car-block/CarBlock";
import CommentsBlock from "./blocks/comments-block/CommentsBlock";
import DriverBlock from "./blocks/driver-block/DriverBlock";
import ParticipantsBlock from "./blocks/participants-block/ParticipantsBlock";
import SendRequestModal from "./blocks/send-request-modal/SendRequestModal";
import StopsBlock from "./blocks/stops-block/StopsBlock";

interface JourneyPageComponent {
    showCancelRidePopup: () => void,
    editJourneyDetails: () => void,
    editJourneyRoute: () => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    ({ props }: { props: JourneyPageProps }): JSX.Element
}

const JourneyPage: JourneyPageComponent = ({ props }: { props: JourneyPageProps }) => {
    const { user } = useContext(AuthContext);
    const [currentJourney, setJourney] = useState<Journey>(null);
    const { journeyId } = props.route.params;
    const { isDriver } = props.route.params;
    const { isPassenger } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [car, setCar] = useState<CarViewModel>(null);
    const [isRequested, setRequested] = useState(false);
    const [requestModalIsVisible, setRequestModalIsVisible] = useState(false);
    const [cancelRideModalIsVisible, setCancelRideModalIsVisible] = useState(false);
    const [cancelRideSuccessModalIsVisible, setCancelRideSuccessModalIsVisible] = useState(false);
    const [requestSuccessfullySentModalIsVisible, setRequestSuccessfullySentModalIsVisible] = useState(false);

    const [modal, setModal] = useState<ConfirmModalProps>({ ...rideCancelingErrorModal, visible: false });
    const disableModal = () => setModal(prevState => ({ ...prevState, visible: false }));

    const mapRef = useRef<MapView | null>(null);

    const [withLuggage, setWithLuggage] = useState(false);
    const [requestComments, setRequestComments] = useState("");

    const applicantStops = props.route.params.applicantStops;

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
        !isDriver && props.navigation?.setOptions({ headerRight: () => <View/> });
        !isDriver && !isPassenger && props.navigation?.setOptions({ headerTitle: "Request to Driver" });

        applicantStops?.forEach((stop) => (stop!.address!.name =
            `${user!.name} ${user!.surname}'s ${stop!.index === FIRST_ELEMENT_INDEX ? "Start" : "Finish"}`));

        (async () => AsyncStorage.getItem("journeyId" + journeyId))().then((isReq) => {
            if (isReq == "1") {
                setRequested(true);
                (async () => (isDriver || isPassenger) && AsyncStorage.removeItem("journeyId" + journeyId))();
            }
        });

        const unsubscribeFromFocus = props.navigation!.addListener("focus", onFocusHandler);
        const unsubscribeFromBlur = props.navigation!.addListener(
            "blur", () => props.closeMoreOptionsPopup());

        return () => {
            unsubscribeFromFocus();
            unsubscribeFromBlur();
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
                    duration: currentJourney.duration,
                    routeDistance: currentJourney.routeDistance,
                    routePoints: currentJourney.journeyPoints,
                }
            }
        };

        navigation.navigate("Journey Details", properties.route.params);
    };

    JourneyPage.editJourneyRoute = () =>
        navigation.navigate("Create Journey", { journey: currentJourney });

    const sendRequest = () => {
        const jsonData = JSON.stringify({
            comments: requestComments,
            hasLuggage: withLuggage,
            applicantStops: applicantStops
        });

        NotificationsService.addNotification({
            senderId: user!.id,
            receiverId: currentJourney?.organizer?.id!,
            type: NotificationType.PassengerApply,
            jsonData: jsonData,
            journeyId: currentJourney?.id!
        }).then((res) => {
            if (res.status == HTTP_STATUS_OK) {
                setRequested(true);
                (async () => {
                    await AsyncStorage.setItem("journeyId" + currentJourney?.id, "1");
                })().then(() => {
                    setRequestSuccessfullySentModalIsVisible(true);
                    setRequestModalIsVisible(false);
                });
            }
        }).catch(() => setModal(requestSendingFailedModal));
    };

    const moreOptionsRef = useRef<any>(null);

    const getStopsForBottomPopup: () => Stop[] = () => {
        if (!currentJourney) return [];

        if (isDriver) {
            return currentJourney.stops.filter(stop => stop!.userId === user!.id);
        }

        const stopsSource = isPassenger ? currentJourney.stops : applicantStops;

        return [
            getStopByType(currentJourney, StopType.Start)!,
            stopsSource!.filter(stop => stop!.userId === user!.id &&
                stop!.index === FIRST_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
            stopsSource!.filter(stop => stop!.userId === user!.id &&
                stop!.index === SECOND_ELEMENT_INDEX)[FIRST_ELEMENT_INDEX],
            getStopByType(currentJourney, StopType.Finish)!
        ];
    };

    const onStopPressHandler = (stop: Stop) => {
        moreOptionsRef.current?.snapTo(SECOND_ELEMENT_INDEX);

        mapRef.current?.animateCamera({
            ...initialCamera,
            center: { latitude: stop!.address!.latitude, longitude: stop!.address!.longitude }
        }, { duration: 1000 });
    };

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
                    customMapStyle={isDarkMode ? darkMapStyle : mapStyle}
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

                            {currentJourney.stops.filter(stop => stop?.type === StopType.Intermediate)
                                .map(mapStopToMarker)}

                            {!isDriver && applicantStops?.map(mapStopToMarker)}
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
                    renderHeader={<DriverBlock journey={currentJourney}/>}
                    renderContent={
                        <View style={{ backgroundColor: DM("#FFFFFF"), width: "100%", height: "100%" }}>

                            <View style={JourneyPageStyle.detailsBlock}>
                                <ScrollView
                                    nestedScrollEnabled={true}
                                    style={[JourneyPageStyle.contentView, { backgroundColor: DM("#FFFFFF") }]}
                                >
                                    <CarBlock car={car} isOnOwnCar={Boolean(currentJourney?.isOnOwnCar)}/>
                                    <StopsBlock
                                        stops={getStopsForBottomPopup() ?? []}
                                        onStopPress={onStopPressHandler}
                                        highlightedStops={isDriver ?
                                            [...Array(currentJourney?.stops.length).keys()] :
                                            [SECOND_ELEMENT_INDEX, THIRD_ELEMENT_INDEX]}
                                    />
                                    <CommentsBlock comments={currentJourney?.comments} />
                                    <ParticipantsBlock journey={currentJourney}/>
                                </ScrollView>
                            </View>

                            <ButtonBlock
                                isDriver={isDriver}
                                isPassenger={isPassenger}
                                isRequested={isRequested}
                                journey={currentJourney}
                                applicantStops={applicantStops}
                                onSendRequestPress={() => setRequestModalIsVisible(true)}
                            />

                        </View>
                    }
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
                    JourneyService.cancel(props.route.params.journeyId)
                        .then(() => setCancelRideSuccessModalIsVisible(true))
                        .catch(() => setModal(rideCancelingErrorModal));
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
                    setCancelRideModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                disableModal={() => {
                    setCancelRideModalIsVisible(false);
                    navigation.navigate("Journey");
                }}
                subtitle={"Ride was successfully canceled"}
            />

            <ConfirmModal
                visible={requestSuccessfullySentModalIsVisible}
                title={"Request sending"}
                confirmText={"Ok"}
                hideCancelButton={true}
                onConfirm={() => {
                    setRequestSuccessfullySentModalIsVisible(false);
                    navigation.goBack();
                }}
                disableModal={() => {
                    setRequestSuccessfullySentModalIsVisible(false);
                    navigation.goBack();
                }}
                subtitle={"Your request was successfully sent to the driver"}
            />

            <ConfirmModal
                {...modal}
                onConfirm={disableModal}
                disableModal={disableModal}
            />

            <SendRequestModal
                comments={requestComments}
                onCommentsChange={text => setRequestComments(text)}
                visible={requestModalIsVisible}
                disableNodal={() => setRequestModalIsVisible(false)}
                withLuggage={withLuggage}
                onWithLuggageChange={value => setWithLuggage(value)}
                onConfirmPress={sendRequest}
            />
        </>
    );
};

JourneyPage.showCancelRidePopup = () => console.log("Outer cancelRide()");
JourneyPage.editJourneyDetails = () => console.log("Outer editJourneyDetails()");
JourneyPage.editJourneyRoute = () => console.log("Outer editJourneyRoute()");

export default JourneyPage;
