import moment from "moment";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../models/journey/Journey";
import NotificationRideDetailsProps from "./NotificationRideDetailsProps";
import style from "./NotificationRideDetailsStyle";

const NotificationRideDetails = (props: NotificationRideDetailsProps) => {
    const [journey, setJourney] = useState<Journey>();

    useEffect(() => {
        JourneyService.getJourney(props.journeyId).then(res => {
            setJourney(res.data);
        });

        console.log("Details");
    }, []);

    return (
        <View style={style.container}>
            <Text style={style.header}>Ride details</Text>

            <View style={style.detailsContainer}>
                <Text style={style.label}>Departure time: </Text>
                <Text style={style.value}>{moment(new Date(journey?.departureTime!)).calendar()}
                </Text>
            </View>

            <View style={style.detailsContainer}>
                <Text style={style.label}>Fee: </Text>
                <Text style={style.value}>{journey?.isFree ? "free" : "paid"}</Text>
            </View>

            {props.withSeats && journey?.participants &&
                <View style={style.detailsContainer}>
                    <Text style={style.label}>Available seats: </Text>
                    <Text style={style.value}>{journey?.countOfSeats - journey?.participants.length}</Text>
                </View>
            }

            <View style={style.detailsContainer}>
                <Text style={style.value}>{props.withBaggage ? "With a baggage" : "Without a baggage"}</Text>
            </View>
        </View>
    );
};

export default NotificationRideDetails;