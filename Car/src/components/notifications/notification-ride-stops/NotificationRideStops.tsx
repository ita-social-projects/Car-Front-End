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
import { useTheme } from "../../theme/ThemeProvider";
import style from "../notification-ride-stops/NotificationRideStopsStyle";
import NotificationRideStopsProps from "./NotificationRideStopsProps";

const NotificationRideStops = (props: NotificationRideStopsProps) => {
    const { colors } = useTheme();
    const [stops, setStops] = useState<Stop[]>();
    const [journeyPoints, setJourneyPoints] = useState<JourneyPoint[]>();
    const [stopsColors, setStopsColors] =
        useState({ first: colors.navyBlueGradientFrom, second: colors.navyBlueGradientFrom });

    useEffect(() => {
        JourneyService.getJourney(props.journeyId, true).then(res => {
            setStops(filterStops(res.data?.stops!));
            setJourneyPoints(res.data?.journeyPoints);

            if (res.data?.stops![FIRST_ELEMENT_INDEX]?.isCancelled) {
                setStopsColors({ first: "#f20a0a", second: "#a60707" });
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
                {IsPropertyShown(props.IsStopsTitleVisible) && <Text style={{ ...style.header, color: colors.primary }}>
                    {props.title}</Text>}

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
                                            { backgroundColor: colors.secondaryLight }
                                        ]}>
                                            <LinearGradient
                                                style={[style.activeCustomLineIcon,
                                                    { backgroundColor: colors.white }
                                                ]}
                                                colors={[stopsColors.first, stopsColors.second]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                            />
                                        </View>
                                        :
                                        <View style={[style.stopCustomLineIcon,
                                            { backgroundColor: colors.secondaryLight }
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
                                                { backgroundColor: colors.white }
                                            ]}
                                            colors={[stopsColors.first, stopsColors.second]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                        />
                                    </Circle>
                                    :
                                    <Circle
                                        color="#FFFFFF"
                                        radius="1.3rem"
                                    >
                                        <Circle color={colors.secondaryLight} radius="1rem" />
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
                                        <Text style={[style.activeStopName, { color: stopsColors.first }]}>
                                            {`${props.stopsOwner?.name}'s Stop `}‏
                                        </Text>
                                        <Text style={[style.activeStopAddress, { color: stopsColors.first }]}>
                                            {`(${item?.address?.name!})`}‏
                                        </Text>
                                    </>

                                </Text>
                                :
                                <Text
                                    style={[style.stopName, { color: colors.primary }]}
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
                                        { backgroundColor: colors.secondaryLight }]}
                                    />
                                </View>
                                <Text style={{ color: colors.primary }}>
                                    Location A
                                </Text>
                            </View>
                            <View style={style.stopListItem}>
                                <View style={style.stopListItemRow}>
                                    <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                                </View>
                                <Text style={{ color: colors.primary }}>
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
