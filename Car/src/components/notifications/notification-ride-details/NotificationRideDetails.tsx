import moment from "moment";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import JourneyService from "../../../../api-service/journey-service/JourneyService";
import Journey from "../../../../models/journey/Journey";
import style from "./NotificationRideDetailsStyle";
import NotificationRideDetailsProps from "./NotificationRideDetailsProps";
import JourneyUserDto from "../../../../models/journey-user/JourneyUserDto";
import DM from "../../styles/DM";
import { DEFAULT_PASSANGERS_COUNT } from "../../../constants/JourneyConstants";

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
                {IsPropertyShown(props.IsDetailsTitleVisible) && <Text
                    style={{ ...style.header, color: DM("black") }}>Ride details</Text>}
            </View>

            {IsPropertyShown(props.IsDepartureTimeVisible) && <View style={style.detailsContainer}>
                <Text style={{ ...style.label, color: DM("black") }}>Departure time: </Text>
                <Text style={{ ...style.value, color: DM("black") }}>
                    {moment(new Date(journey?.departureTime!)).calendar()}
                </Text>
            </View>}

            {IsPropertyShown(props.IsFeeVisible) && <View style={style.detailsContainer}>
                <Text style={{ ...style.label, color: DM("black") }}>Fee: </Text>
                <Text style={{ ...style.value, color: DM("black") }}>{journey?.isFree ? "free" : "paid"}</Text>
            </View>}

            {props.withSeats && IsPropertyShown(props.IsAvailableSeatsVisible) && journey?.participants &&
                <View style={style.detailsContainer}>
                    <Text style={{ ...style.label, color: DM("black") }}>Available seats: </Text>
                    <Text style={{ ...style.value, color: DM("black") }}>
                        {journey?.countOfSeats - journey?.participants.length}</Text>
                </View>
            }

            {IsPropertyShown(props.IsBaggageVisible) && <View style={style.detailsContainer}>
                <Text style={{ ...style.value, color: DM("black") }}>
                    {journeyUser?.withBaggage? "With luggage" : "Without luggage"}</Text>
            </View>}

            { props.withPassangers &&
                 <View style={style.detailsContainer}>
                     <Text style={{ ...style.label, color: DM("black") }}>Passangers: </Text>
                     <Text style={{ ...style.value, color: DM("black") }}>
                         {props.passangersCount ?? DEFAULT_PASSANGERS_COUNT}</Text>
                 </View>
            }
        </View>
    );
};

export default NotificationRideDetails;
