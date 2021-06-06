import moment from "moment";
import React from "react";
import { Text, View } from "react-native";
import NotificationRideDetailsProps from "./NotificationRideDetailsProps";
import style from "./NotificationRideDetailsStyle";

const NotificationRideDetails = (props: NotificationRideDetailsProps) => {
    return (
        <View style={style.container}>
            <Text style={style.header}>Ride details</Text>

            <View style={style.detailsContainer}>
                <Text style={style.label}>Departure time: </Text>
                <Text style={style.value}>{moment(new Date(props.departureTime!)).calendar()}
                </Text>
            </View>

            <View style={style.detailsContainer}>
                <Text style={style.label}>Fee: </Text>
                <Text style={style.value}>{props.isFree ? "free" : "paid"}</Text>
            </View>

            {props.availableSeats &&
                <View style={style.detailsContainer}>
                    <Text style={style.label}>Available seats: </Text>
                    <Text style={style.value}>{props.availableSeats}</Text>
                </View>
            }

            <View style={style.detailsContainer}>
                <Text style={style.value}>{props.withBaggage ? "With baggage" : "Without baggage"}</Text>
            </View>
        </View>
    );
};

export default NotificationRideDetails;