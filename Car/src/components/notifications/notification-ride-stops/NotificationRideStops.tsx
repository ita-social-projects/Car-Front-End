import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { LinearTextGradient } from "react-native-text-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import Stop from "../../../../models/stop/Stop";
import StopType from "../../../../models/stop/StopType";
import { GRADIENT_END, GRADIENT_START } from "../../../constants/StylesConstants";
import Font from "../../../data/fonts/Font";
import AuthContext from "../../auth/AuthContext";
import Circle from "../../styles/Circle";
import DM from "../../styles/DM";
import style from "../notification-ride-stops/NotificationRideStopsStyle";
import NotificationRideStopsProps from "./NotificationRideStopsProps";

const NotificationRideStops = (props: NotificationRideStopsProps) => {
    const [stops, setStops] = useState<Stop[]>();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        JourneyService.getJourney(props.journeyId).then(res => {
            setStops(res.data?.stops);
        });
    }, []);

    const circle = (stop: Stop) => {
        return (
            user?.id == stop?.userId ?
                <Circle
                    color="#FFFFFF"
                    radius="1.1rem"
                >
                    <LinearGradient
                        style={[style.circleGrad, { backgroundColor: DM("#FFFFFF") }]}
                        colors={["#00A3CF", "#5552A0"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    />
                </Circle>
                :
                <Circle
                    color={DM("#FFFFFF")}
                    radius="1.3rem"
                >
                    <Circle color={DM("#C1C1C5")} radius="1rem" />
                </Circle>
        );
    };

    const text = (stop: Stop) => {
        return (
            user?.id == stop?.userId ?
                <LinearTextGradient
                    style={[style.stopName, { color: DM("#909095") }]}
                    locations={[GRADIENT_START, GRADIENT_END]}
                    colors={["#00A3CF", "#5552A0"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={[style.activeStopName, { color: DM("#909095") }]}>
                        {`${user!.name}'s stop ${stop?.address?.name}`}‏
                    </Text>

                    <Text
                        style={{ fontFamily: Font.OpenSans.Regular }}
                    >
                    </Text>
                </LinearTextGradient>
                :
                <Text style={{ color: DM("black") }}>
                    {stop?.address?.name}
                </Text>
        );
    };

    return (
        <>
            <View style={style.container}>
                <Text style={style.header}>{props.title}</Text>

                <View style={style.stopsBlock}>
                    {stops?.length ? stops.map((item) =>
                        <View key={item?.id} style={style.stopListItem}>
                            <View style={style.stopListItemRow}>
                                {circle(item)}
                                {item?.type !== StopType.Finish && (
                                    <View style={[style.stopCustomLineIcon,
                                        { backgroundColor: DM("#AAA9AE") }
                                    ]} />
                                )}
                            </View>
                            {text(item)}
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