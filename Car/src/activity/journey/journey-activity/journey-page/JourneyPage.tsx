import React, { useContext, useEffect, useRef, useState } from "react";
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import JourneyPageStyle from "./JourneyPageStyle";
import Journey from "../../../../../models/journey/Journey";
import CarViewModel from "../../../../../models/car/CarViewModel";
import AsyncStorage from "@react-native-community/async-storage";
import {
    DEFAULT_PASSANGERS_COUNT,
    MAX_JOURNEY_PAGE_POPUP_HEIGHT,
    MEDIUM_JOURNEY_PAGE_POPUP_HEIGHT,
    MIN_JOURNEY_PAGE_POPUP_HEIGHT,
} from "../../../../constants/JourneyConstants";
import { MAX_POPUP_POSITION, MIN_POPUP_POSITION } from "../../../../constants/StylesConstants";
import JourneyPageProps from "./JourneyPageProps";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../search-journey-map/SearchJourneyMapStyle";
import ButtonBlock from "./blocks/button-block/ButtonBlock";
import ConfirmModal from "../../../../components/confirm-modal/ConfirmModal";
import * as navigation from "../../../../components/navigation/Navigation";
import { Portal } from "react-native-portalize";
import JourneyDetailsPageProps from "../journey-details-page/JourneyDetailsPageProps";
import {
    getHighlightedStops,
    getIntermediateJourneyStops, getJourneyFinishStop, getJourneyStartStop,
    getStopCoordinates,
    mapStopToMarker,
    mapStopToWayPoint
} from "../../../../utils/JourneyHelperFunctions";
import {
    SECOND_ELEMENT_INDEX,
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
import { useTheme } from "../../../../components/theme/ThemeProvider";
import { darkMapStyle } from "../../../../constants/DarkMapStyleConstant";
import CarBlock from "./blocks/car-block/CarBlock";
import DriverBlock from "./blocks/driver-block/DriverBlock";
import ParticipantsBlock from "./blocks/participants-block/ParticipantsBlock";
import StopsBlock from "./blocks/stops-block/StopsBlock";
import WeekDay from "../../../../components/schedule-bottom-popup/WeekDay";
import CommentBlock from "../../../../components/commentBlock/CommentBlock";
import JourneyCreationDropDownPicker from "../../../../components/dropdown-picker/JourneyCreationDropDownPicker";
import ChooseOption from "../../../../components/choose-opton/ChooseOption";
import HeaderLeaveButton from "../../../../components/create-journey-more-options-popup/header-leave-button/HeaderLeaveButton";

interface JourneyPageComponent {
    showCancelRidePopup: () => void,
    editJourneyDetails: () => void,
    editJourneyRoute: () => void,
    ({ props }: { props: JourneyPageProps }): JSX.Element
}

const JourneyPage: JourneyPageComponent = ({ props }: { props: JourneyPageProps }) => {
    const { colors, isThemeDark } = useTheme();
    const { user } = useContext(AuthContext);
    const currentJourney: Journey = props.route.params.journey;
    const { isDriver } = props.route.params;
    const { isPassenger } = props.route.params;
    const { isPast } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const car : CarViewModel | undefined = props.route.params.journey?.car;
    const [isRequested, setRequested] = useState(false);
    const [cancelRideModalIsVisible, setCancelRideModalIsVisible] = useState(false);
    const [cancelRideSuccessModalIsVisible, setCancelRideSuccessModalIsVisible] = useState(false);
    const [requestSuccessfullySentModalIsVisible, setRequestSuccessfullySentModalIsVisible] = useState(false);
    const [comments, setComments] = useState("");

    const [modal, setModal] = useState<ConfirmModalProps>({ ...rideCancelingErrorModal, visible: false });
    const disableModal = () => setModal(prevState => ({ ...prevState, visible: false }));

    const mapRef = useRef<MapView | null>(null);

    const [withLuggage, setWithLuggage] = useState(false);
    const [passangersCount, setPassangersCount] =
        useState(props.route.params.passangersCount ?? DEFAULT_PASSANGERS_COUNT);
    const [isConfirmationFormVisible, setIsConfirmationFormVisible] = useState(false);
    const userQuantity: { id: number, name: string }[] = [
        { id: 1, name: "1" }, { id: 2, name: "2" }, { id: 3, name: "3" }, { id: 4, name: "4" }];
    const [isVisibleQuantityDropDown, setIsVisibleQuantityDropDown] = useState(false);
    const [selectedQuantity, setSelectedQuantity] =
        useState({ id: passangersCount, name: passangersCount.toString() });

    const onFocusHandler = () => {
        mapRef.current?.fitToCoordinates(currentJourney?.journeyPoints,
            { edgePadding: { top: 20, right: 20, left: 20, bottom: 800 } });

        endLoading();
    };

    const endLoading = () => {
        setLoading(false);
        moreOptionsRef?.current?.snapTo(MAX_POPUP_POSITION);
    };

    useEffect(() => {
        if (isPast)
            props.navigation?.setOptions({
                headerRight: () => <View />
            });
    });

    useEffect(() => {
        if (isPassenger)
            props.navigation?.setOptions({
                headerRight: () => <HeaderLeaveButton route={{
                    params: {
                        journey: currentJourney,
                        isDriver,
                        isPassenger,
                        passangersCount: props.route.params.passangersCount
                    }
                }} />
            });
    });

    useEffect(() => {
        !isDriver && props.navigation?.setOptions({ headerRight: () => <View /> });
        !isDriver && !isPassenger && props.navigation?.setOptions({ headerTitle: "Request to Driver" });

        (async () => AsyncStorage.getItem("journeyId" + currentJourney?.id))().then((isReq) => {
            if (isReq == "1") {
                setRequested(true);
                (async () => (isDriver || isPassenger) && AsyncStorage.removeItem("journeyId" + currentJourney?.id))();
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
                    from: mapStopToWayPoint(getJourneyStartStop(currentJourney!)),
                    to: mapStopToWayPoint(getJourneyFinishStop(currentJourney!)),
                    stops: getIntermediateJourneyStops(currentJourney)!.map(mapStopToWayPoint),
                    duration: currentJourney.duration,
                    routeDistance: currentJourney.routeDistance,
                    routePoints: currentJourney.journeyPoints,
                    weekDay: currentJourney?.schedule?.days ?? WeekDay.None,
                }
            }
        };

        navigation.navigate("Journey Details", { ...properties.route.params, headerTitle: "Edit the Ride" });
    };

    JourneyPage.editJourneyRoute = () =>
        navigation.navigate("Create Journey", { journey: currentJourney });

    const sendRequest = async () => {
        const jsonData = JSON.stringify({
            comments: comments,
            withLuggage,
            stopsRepresentation: currentJourney!.stops,
            passangersCount: passangersCount
        });

        NotificationsService.addNotification({
            senderId: user!.id,
            receiverId: currentJourney!.organizer!.id,
            type: NotificationType.PassengerApply,
            jsonData: jsonData,
            journeyId: currentJourney!.id
        }).then((res) => {
            if (res.status == HTTP_STATUS_OK) {
                setRequested(true);
                (async () => {
                    await AsyncStorage.setItem("journeyId" + currentJourney!.id, "1");
                })().then(() => {
                    setRequestSuccessfullySentModalIsVisible(true);
                    setIsConfirmationFormVisible(false);
                });
            }
        }).catch(() => setModal(requestSendingFailedModal));
    };

    const moreOptionsRef = useRef<any>(null);

    const onStopPressHandler = (stop: Stop) => {
        moreOptionsRef.current?.snapTo(SECOND_ELEMENT_INDEX);

        mapRef.current?.animateCamera({
            ...initialCamera,
            center: { latitude: stop!.address!.latitude, longitude: stop!.address!.longitude }
        }, { duration: 1000 });
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <View style={[JourneyPageStyle.pageContainer, { backgroundColor: colors.greenGradientFrom }]}>
                    <MapView
                        ref={ref => {
                            mapRef.current = ref;
                        }}
                        style={{ flex: 1 }}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation={true}
                        customMapStyle={isThemeDark ? darkMapStyle : mapStyle}
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
                                    title={getJourneyStartStop(currentJourney)?.address?.name}
                                    coordinate={getStopCoordinates(getJourneyStartStop(currentJourney))}
                                    image={require("../../../../../assets/images/maps-markers/From.png")}
                                />

                                <Marker
                                    title={getJourneyFinishStop(currentJourney)?.address?.name}
                                    coordinate={getStopCoordinates(getJourneyFinishStop(currentJourney))}
                                    image={require("../../../../../assets/images/maps-markers/To.png")}
                                />

                                {getIntermediateJourneyStops(currentJourney)!
                                    .map(mapStopToMarker)}
                            </>)}
                    </MapView>
                </View>
            </TouchableWithoutFeedback>

            {!props.moreOptionsPopupIsOpen &&
                <Portal>
                    <BottomPopup
                        refForChild={(ref: any) => (moreOptionsRef.current = ref)}
                        style={{ backgroundColor: colors.white }}
                        snapPoints={[
                            MAX_JOURNEY_PAGE_POPUP_HEIGHT,
                            isLoading ? MIN_JOURNEY_PAGE_POPUP_HEIGHT : MEDIUM_JOURNEY_PAGE_POPUP_HEIGHT,
                        ]}
                        initialSnap={MIN_POPUP_POSITION}
                        enabledGestureInteraction={true}
                        enabledInnerScrolling={true}
                        renderHeader={<DriverBlock journey={currentJourney} />}
                        renderContent={
                            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                                <View style={{ backgroundColor: colors.white, width: "100%", height: "100%" }}>
                                    {!isConfirmationFormVisible ? (
                                        <>
                                            <View style={JourneyPageStyle.detailsBlock}>
                                                <ScrollView
                                                    nestedScrollEnabled={true}
                                                    style={[JourneyPageStyle.View,{ backgroundColor:colors.white }]}>
                                                    <StopsBlock
                                                        stops={currentJourney?.stops ?? []}
                                                        onStopPress={onStopPressHandler}
                                                        highlightedStops={getHighlightedStops(
                                                            currentJourney!.stops, user!.id
                                                        )}
                                                    />
                                                    <CarBlock
                                                        car={car!} isOnOwnCar={Boolean(currentJourney?.isOnOwnCar)} />
                                                    <ParticipantsBlock journey={currentJourney} />
                                                </ScrollView>
                                            </View>

                                            <ButtonBlock
                                                isDriver={isDriver}
                                                isPassenger={isPassenger}
                                                isRequested={isRequested}
                                                journey={currentJourney}
                                                onSendRequestPress={() => {
                                                    setIsConfirmationFormVisible(true);
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <View style={JourneyPageStyle.confirmationFormContainer}>
                                            <CommentBlock
                                                placeholder="Any comments?"
                                                initialComment={comments}
                                                commentHeader="Comments"
                                                setComments={(initialComment: string) =>
                                                    setComments(initialComment)}
                                                containerStyle={JourneyPageStyle.commentsBlockContainer}
                                            />

                                            <View style={JourneyPageStyle.dropDownContainer}>
                                                <View style={JourneyPageStyle.dropDown}>
                                                    <JourneyCreationDropDownPicker
                                                        items={userQuantity.map((quantity) => ({
                                                            label: quantity.name,
                                                            value: quantity.id
                                                        }))}
                                                        paddingLeft={100}
                                                        searchable={false}
                                                        placeholder="Passengers:"
                                                        isVisible={isVisibleQuantityDropDown}
                                                        onOpen={() => setIsVisibleQuantityDropDown(true)}
                                                        onChangeItem={(item) => {
                                                            setSelectedQuantity({ id: item.value, name: item.label });
                                                            setPassangersCount(item.value);
                                                            setIsVisibleQuantityDropDown(false);
                                                        }}
                                                        valueId={selectedQuantity.id}
                                                    />
                                                </View>
                                            </View>
                                            <View style={JourneyPageStyle.chooseOptionContainer}>
                                                <ChooseOption
                                                    text={"Have you got any luggage with you?"}
                                                    value={withLuggage}
                                                    onValueChanged={setWithLuggage}
                                                />
                                            </View>

                                            <View style={{ alignItems: "flex-end" }}>
                                                <TouchableOpacity
                                                    style={[
                                                        JourneyPageStyle.confirmButton,
                                                        {
                                                            backgroundColor: colors.hover,
                                                            borderColor: colors.hover,
                                                            marginTop: 16
                                                        },
                                                        isRequested &&
                                                        {
                                                            backgroundColor: colors.secondaryDark,
                                                            borderColor: colors.secondaryDark
                                                        }]}
                                                    onPress={sendRequest}
                                                    disabled={isRequested}
                                                >
                                                    <Text style={[JourneyPageStyle.confirmButtonText,
                                                        { color: colors.white }]}>
                                                        Send Request
                                                    </Text>
                                                </TouchableOpacity>

                                            </View>
                                            <View>
                                                {isRequested &&
                                            <Text style={{ color: colors.secondaryDark,
                                                textAlign: "right",marginTop: 8
                                            }}>
                                            * You already applied for this journey
                                            </Text>
                                                }
                                            </View>
                                        </View>
                                    )}

                                </View>
                            </TouchableWithoutFeedback>
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
                    JourneyService.cancel(props.route.params.journey!.id)
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
        </>
    );
};

JourneyPage.showCancelRidePopup = () => console.log("Outer cancelRide()");
JourneyPage.editJourneyDetails = () => console.log("Outer editJourneyDetails()");
JourneyPage.editJourneyRoute = () => console.log("Outer editJourneyRoute()");

export default JourneyPage;
