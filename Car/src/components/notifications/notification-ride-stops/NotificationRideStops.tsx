import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import Stop from "../../../../models/stop/Stop";
import StopType from "../../../../models/stop/StopType";
import { FIRST_ELEMENT_INDEX, LAST_INDEX_CORRECTION, LESS_THAN_ZERO, MORE_THAN_ZERO, ZERO } from "../../../constants/GeneralConstants";
import AuthContext from "../../auth/AuthContext";
import Circle from "../../styles/Circle";
import DM from "../../styles/DM";
import style from "../notification-ride-stops/NotificationRideStopsStyle";
import NotificationRideStopsProps from "./NotificationRideStopsProps";

const NotificationRideStops = (props: NotificationRideStopsProps) => {
    const [stops, setStops] = useState<Stop[]>();
    const { user } = useContext(AuthContext);

    const sortStopsByUserId = (array: Stop[]) => {
        return array.sort((a) => (a?.userId === user?.id) ? LESS_THAN_ZERO : ZERO);
    };

    const getUniqueStops = (array: Stop[]) => {
        return array.filter((value, index, arr) => {
            return (
                arr.map(mapObj => mapObj?.address?.latitude)
                    .indexOf(value?.address?.latitude) === index
                &&
                arr.map(mapObj => mapObj?.address?.longitude)
                    .indexOf(value?.address?.longitude) === index
            );
        });
    };

    const sortStopsByIndex = (array: Stop[]) => {
        return array.sort((a, b) => (a?.index! > b?.index!) ? MORE_THAN_ZERO : LESS_THAN_ZERO);
    };

    const filterStops = (stops: Stop[]) => {
        let array = stops.filter(stop =>
            stop?.type == StopType.Start
            ||
            stop?.type == StopType.Finish
            ||
            stop?.userId == user?.id
        );

        array = sortStopsByUserId(array);
        array = getUniqueStops(array);
        array = sortStopsByIndex(array);

        return array;
    };

    useEffect(() => {
        JourneyService.getJourney(props.journeyId).then(res => {
            setStops(filterStops(res.data?.stops!));
        });
    }, []);

    return (
        <>
            <View style={style.container}>
                <Text style={style.header}>{props.title}</Text>

                <View style={style.stopsBlock}>
                    {stops?.length ? stops.map((item, index) =>
                        <View key={item?.id} style={style.stopListItem}>
                            <View style={style.stopListItemRow}>

                                {index !== FIRST_ELEMENT_INDEX && (
                                    item?.userId === user?.id ?
                                        <View style={[style.stopCustomLineIcon,
                                            { backgroundColor: DM("#AAA9AE") }
                                        ]}>
                                            <LinearGradient
                                                style={[style.activeCustomLineIcon,
                                                    { backgroundColor: DM("#FFFFFF") }
                                                ]}
                                                colors={["#00A3CF", "#5552A0"]}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                            />
                                        </View>
                                        :
                                        <View style={[style.stopCustomLineIcon,
                                            { backgroundColor: DM("#AAA9AE") }
                                        ]}/>
                                )}

                                {user?.id == item?.userId ?
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
                                            colors={["#00A3CF", "#5552A0"]}
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

                            {user?.id == item?.userId ?
                                <Text
                                    style={[style.stopName, { color: DM("#00A3CF") }]}
                                    numberOfLines={1}
                                    ellipsizeMode={"tail"}
                                >
                                    {index !== FIRST_ELEMENT_INDEX ?
                                        <>
                                            <Text style={[style.activeStopName, { color: DM("#00A3CF") }]}>
                                                {`${user!.name}'s Stop `}‏
                                            </Text>

                                            <Text style={[style.activeStopAddress, { color: DM("#00A3CF") }]}>
                                                {`(${item?.address?.name!})`}‏
                                            </Text>
                                        </>
                                        :
                                        <Text style={[style.activeStopAddress, { color: DM("#00A3CF") }]}>
                                            {`${item?.address?.name!}`}‏
                                        </Text>
                                    }

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
                        </View>
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