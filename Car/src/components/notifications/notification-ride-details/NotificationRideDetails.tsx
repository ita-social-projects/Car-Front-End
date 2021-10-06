import moment from "moment";
import React from "react";
import { Text, View } from "react-native";
import style from "./NotificationRideDetailsStyle";
import NotificationRideDetailsProps from "./NotificationRideDetailsProps";
import { capitalize } from "../../../utils/GeneralHelperFunctions";
import { useTheme } from "../../theme/ThemeProvider";
import { DEFAULT_PASSANGERS_COUNT } from "../../../constants/JourneyConstants";

const NotificationRideDetails = (props: NotificationRideDetailsProps) => {
    const { DM } = useTheme();
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
                    {capitalize(moment(new Date(props.journey?.departureTime!)).calendar())}
                </Text>
            </View>}

            {IsPropertyShown(props.IsFeeVisible) && <View style={style.detailsContainer}>
                <Text style={{ ...style.label, color: DM("black") }}>Fee: </Text>
                <Text style={{ ...style.value, color: DM("black") }}>{props.journey?.isFree ? "free" : "paid"}</Text>
            </View>}

            {props.withSeats && IsPropertyShown(props.IsAvailableSeatsVisible) && props.journey?.participants &&
                <View style={style.detailsContainer}>
                    <Text style={{ ...style.label, color: DM("black") }}>Available seats: </Text>
                    <Text style={{ ...style.value, color: DM("black") }}>
                        {props.journey.countOfSeats - props.journey.participants.length}</Text>
                </View>
            }

            {IsPropertyShown(props.IsBaggageVisible) && <View style={style.detailsContainer}>
                <Text style={{ ...style.value, color: DM("black") }}>
                    {props.journeyUser.withBaggage? "With luggage" : "Without luggage"}</Text>
            </View>}

            { props.withPassangers &&
                 <View style={style.detailsContainer}>
                     <Text style={{ ...style.label, color: DM("black") }}>Passangers: </Text>
                     <Text style={{ ...style.value, color: DM("black") }}>
                         {props.journeyUser.passangersCount ?? DEFAULT_PASSANGERS_COUNT}</Text>
                 </View>
            }
        </View>
    );
};

export default NotificationRideDetails;
