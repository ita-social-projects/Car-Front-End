import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LinearTextGradient } from "react-native-text-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import Stop from "../../../../models/stop/Stop";
import StopType from "../../../../models/stop/StopType";
import { GRADIENT_END, GRADIENT_START } from "../../../constants/StylesConstants";
import AuthContext from "../../auth/AuthContext";
import Circle from "../../styles/Circle";
import DM from "../../styles/DM";
import style from "../notification-ride-stops/NotificationRideStopsStyle";
import NotificationRideStopsProps from "./NotificationRideStopsProps";

const NotificationRideStops = (props: NotificationRideStopsProps) => {
    const [stops, setStops] = useState<Stop[]>();
    const { user } = useContext(AuthContext);
    const one = 1;
    const minusOne = -1;
    const zero = 0;

    const filterStops = (stops: Stop[]) => {
        const array = stops.filter(stop =>
            stop?.type == StopType.Start
            ||
            stop?.type == StopType.Finish
            ||
            stop?.userId == user?.id
        ).sort((a) => (a?.userId === user?.id) ? minusOne : zero);

        return array.filter((value, index, arr) => {
            return (
                arr.map(mapObj => mapObj?.address?.latitude)
                    .indexOf(value?.address?.latitude) === index
                &&
                arr.map(mapObj => mapObj?.address?.longitude)
                    .indexOf(value?.address?.longitude) === index
            );
        }).sort((a, b) => (a?.index! > b?.index!) ? one : minusOne);
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

                                {index !== zero && (
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
                                                index === zero || index === stops.length - one ?
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
                                <LinearTextGradient
                                    style={[style.stopName, { color: DM("#909095") }]}
                                    locations={[GRADIENT_START, GRADIENT_END]}
                                    colors={["#00A3CF", "#5552A0"]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    numberOfLines={1}
                                    ellipsizeMode={"tail"}
                                >
                                    {index !== zero ?
                                        <>
                                            <Text style={[style.activeStopName, { color: DM("#909095") }]}>
                                                {`${user!.name}'s Stop `}‏
                                            </Text>

                                            <Text style={[style.activeStopAddress, { color: DM("#909095") }]}>
                                                {`(${item?.address?.name!})`}‏
                                            </Text>
                                        </>
                                        :
                                        <Text style={[style.activeStopAddress, { color: DM("#909095") }]}>
                                            {`${item?.address?.name!}`}‏
                                        </Text>
                                    }

                                </LinearTextGradient>
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