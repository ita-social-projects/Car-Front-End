import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import Stop from "../../../../models/stop/Stop";
import StopType from "../../../../models/stop/StopType";
import { FIRST_ELEMENT_INDEX, LAST_INDEX_CORRECTION } from "../../../constants/GeneralConstants";
import Circle from "../../styles/Circle";
import DM from "../../styles/DM";
import style from "../notification-ride-stops/NotificationRideStopsStyle";
import NotificationRideStopsProps from "./NotificationRideStopsProps";

const NotificationRideStops = (props: NotificationRideStopsProps) => {
    const [stops, setStops] = useState<Stop[]>();
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>();
    const [colors, setColors] = useState({ first: "#00A3CF", second: "#5552A0" });

    useEffect(() => {
        JourneyService.getJourney(props.journeyId, true).then(res => {
            setStops(filterStops(res.data?.stops!));
            setJourneyPoints(res.data?.journeyPoints);

            if (res.data?.stops![FIRST_ELEMENT_INDEX]?.isCancelled) {
                setColors({ first: "#f20a0a", second: "#a60707" });
            }
        });
    }, []);

    const getStops = (arr: Stop[]) =>
        arr.filter(stop =>
            stop?.type === StopType.Start
            ||
            stop?.type === StopType.Finish
            ||
            stop?.userId === props.stopsOwner?.id
        );

    const getUniqueStops = (array: Stop[]) =>
        array.filter((value, index, arr) => {
            return (
                arr.map(mapObj => mapObj?.address?.latitude)
                    .indexOf(value?.address?.latitude) === index
                &&
                arr.map(mapObj => mapObj?.address?.longitude)
                    .indexOf(value?.address?.longitude) === index
            );
        });

    const filterStops = (myStops: Stop[]) => {
        let arr = getStops(myStops);

        arr = getUniqueStops(arr);
        arr.sort(function (a ,b) {
            return a?.type! - b?.type! || a?.index! - b?.index!;});

        return arr;
    };

    const IsPropertyShown = (value: any) => value !== false;

    return (
        <>
            <View style={style.container}>
                {IsPropertyShown(props.IsStopsTitleVisible) && <Text style={style.header}>{props.title}</Text>}

                <View style={style.stopsBlock}>
                    {stops?.length ? stops.map((item, index) =>
                        <TouchableOpacity
                            key={item?.id}
                            style={style.stopListItem}
                            onPress={() => props.onStopPress(item, stops, journeyPoints!, props.notification)}
                        >
                            <View style={style.stopListItemRow}>
                                {index !== FIRST_ELEMENT_INDEX && (
                                    item?.userId === props.stopsOwner?.id ?
                                        <View style={[style.stopCustomLineIcon,
                                            { backgroundColor: DM("#AAA9AE") }
                                        ]}>
                                            <LinearGradient
                                                style={[style.activeCustomLineIcon,
                                                    { backgroundColor: DM("#FFFFFF") }
                                                ]}
                                                colors={[colors.first, colors.second]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                            />
                                        </View>
                                        :
                                        <View style={[style.stopCustomLineIcon,
                                            { backgroundColor: DM("#AAA9AE") }
                                        ]} />
                                )}

                                {item?.userId === props.stopsOwner?.id ?
                                    <Circle
                                        color="#FFFFFF"
                                        radius="1.3rem"
                                    >
                                        <LinearGradient
                                            style={[
                                                index === FIRST_ELEMENT_INDEX ||
                                                    index === stops.length - LAST_INDEX_CORRECTION ?
                                                    style.circleGrad
                                                    :
                                                    style.intermidiateCircleGrad,
                                                { backgroundColor: DM("#FFFFFF") }
                                            ]}
                                            colors={[colors.first, colors.second]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                        />
                                    </Circle>
                                    :
                                    <Circle
                                        color="#FFFFFF"
                                        radius="1.3rem"
                                    >
                                        <Circle color={DM("#C1C1C5")} radius="1rem" />
                                    </Circle>
                                }
                            </View>

                            {item?.userId === props.stopsOwner?.id ?
                                <Text
                                    style={[style.stopName]}
                                    numberOfLines={1}
                                    ellipsizeMode={"tail"}
                                >
                                    <>
                                        <Text style={[style.activeStopName, { color: DM(colors.first) }]}>
                                            {`${props.stopsOwner?.name}'s Stop `}‏
                                        </Text>
                                        <Text style={[style.activeStopAddress, { color: DM(colors.first) }]}>
                                            {`(${item?.address?.name!})`}‏
                                        </Text>
                                    </>

                                </Text>
                                :
                                <Text
                                    style={[style.stopName, { color: DM("black") }]}
                                    ellipsizeMode={"tail"}
                                    numberOfLines={1}
                                >
                                    {`${item?.address?.name!}`}
                                </Text>
                            }
                        </TouchableOpacity>
                    ) : (
                        <>
                            <View style={style.stopListItem}>
                                <View style={style.stopListItemRow}>
                                    <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                                    <View style={[style.stopCustomLineIcon,
                                        { backgroundColor: DM("#AAA9AE") }]}
                                    />
                                </View>
                                <Text style={{ color: DM("black") }}>
                                    Location A
                                </Text>
                            </View>
                            <View style={style.stopListItem}>
                                <View style={style.stopListItemRow}>
                                    <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                                </View>
                                <Text style={{ color: DM("black") }}>
                                    Location B
                                </Text>
                            </View>
                        </>
                    )}
                </View>
            </View>
        </>
    );
};

export default NotificationRideStops;
