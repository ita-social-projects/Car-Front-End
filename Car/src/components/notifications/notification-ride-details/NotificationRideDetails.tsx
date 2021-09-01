import moment from "moment";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../models/journey/Journey";
import style from "./NotificationRideDetailsStyle";
import NotificationRideDetailsProps from "./NotificationRideDetailsProps";
import JourneyUserDto from "../../../../models/journey-user/JourneyUserDto";

const NotificationRideDetails = (props: NotificationRideDetailsProps) => {
    const [journey, setJourney] = useState<Journey>();
    const [journeyUser, setJourneyUser] = useState<JourneyUserDto>();

    useEffect(() => {
        JourneyService.getJourneyWithJourneyUser(props.journeyId, props.userId, true).then(res => {
            setJourney(res.data.item1);
            if(props.journeyUser == null)
            {
                setJourneyUser(res.data.item2);
            }
            else
            {
                setJourneyUser(props.journeyUser);
            }
        });
    }, []);

    const IsPropertyShown = (value: any) => value !== false;

    return (
        <View style={style.container}>
            <View>
                {IsPropertyShown(props.IsDetailsTitleVisible) && <Text style={style.header}>Ride details</Text>}
            </View>

            {IsPropertyShown(props.IsDepartureTimeVisible) && <View style={style.detailsContainer}>
                <Text style={style.label}>Departure time: </Text>
                <Text style={style.value}>{moment(new Date(journey?.departureTime!)).calendar()}
                </Text>
            </View>}

            {IsPropertyShown(props.IsFeeVisible) && <View style={style.detailsContainer}>
                <Text style={style.label}>Fee: </Text>
                <Text style={style.value}>{journey?.isFree ? "free" : "paid"}</Text>
            </View>}

            {props.withSeats && IsPropertyShown(props.IsAvailableSeatsVisible) && journey?.participants &&
                <View style={style.detailsContainer}>
                    <Text style={style.label}>Available seats: </Text>
                    <Text style={style.value}>{journey?.countOfSeats - journey?.participants.length}</Text>
                </View>
            }

            {IsPropertyShown(props.IsBaggageVisible) && <View style={style.detailsContainer}>
                <Text style={style.value}>{journeyUser?.withBaggage? "With luggage" : "Without luggage"}</Text>
            </View>}
        </View>
    );
};

export default NotificationRideDetails;
