import React, { useEffect, useRef, useState } from "react";
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
    FIRST_ELEMENT_INDEX,
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
import CarBlock from "./CarBlock/CarBlock";
import StopsBlock from "./StopsBlock/StopsBlock";
import ParticipantsBlock from "./ParticipantsBlock/ParticipantsBlock";
import ButtonBlock from "./ButtonsBlock/ButtonsBlock";
import DriverBlock from "./DriverBlock/DriverBlock";

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
                    <View style={{ backgroundColor: DM("#FFFFFF"), width: "100%", height: "100%" }}>

                        <View style={{ height: 300 }}>
                            {/*<View style={{ height: 300 }}>*/}
                            <ScrollView
                                nestedScrollEnabled={true}
                                style={[JourneyPageStyle.contentView, { backgroundColor: DM("#FFFFFF") }]}
                            >
                                <CarBlock car={car}/>

                                <StopsBlock stops={currentJourney?.stops ?? []}/>

                                <ParticipantsBlock journey={currentJourney} />
                            </ScrollView>
                            {/*</View>*/}
                        </View>

                        <ButtonBlock
                            isDriver={isDriver}
                            isPassenger={isPassenger}
                            isRequested={isRequested}
                            journey={currentJourney}
                        />

                    </View>
                }
                renderHeader={<DriverBlock journey={currentJourney}/>}
            />
        </>
    );
};

export default JourneyPage;
