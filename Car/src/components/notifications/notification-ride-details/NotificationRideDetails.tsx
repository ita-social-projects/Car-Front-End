import React from "react";
import { Image, Text, View } from "react-native";
import style from "./NotificationRideDetailsStyle";
import NotificationRideDetailsProps from "./NotificationRideDetailsProps";
import { useTheme } from "../../theme/ThemeProvider";
import { DEFAULT_PASSANGERS_COUNT } from "../../../constants/JourneyConstants";

const NotificationRideDetails = (props: NotificationRideDetailsProps) => {
    const { colors } = useTheme();
    const IsPropertyShown = (value: any) => value !== false;
    const dateTime : Date = new Date(props.journey?.departureTime!);

    const formatDate = () =>
    {
        const indexDayInDateTime = 1;
        const indexMonthInDateTime = 0;
        const indexDayOfWeekInDateTime = 0;
        const indexStartTime = 0;
        const indexEndTime = 5;
        const day = dateTime.toLocaleDateString().split("/")[indexDayInDateTime] + "/";
        const month = dateTime.toLocaleDateString().split("/")[indexMonthInDateTime] + ";";
        const dayOfWeek = dateTime.toDateString().split(" ")[indexDayOfWeekInDateTime] +";";
        const time = dateTime.toLocaleTimeString().substring(indexStartTime,indexEndTime);

        return day + month + dayOfWeek + time;
    };

    return (
        <View>
            <View style={style.container}>
                {IsPropertyShown(props.IsDepartureTimeVisible) &&
                <View style={style.detailsContainer}>
                    <Image
                        style = {{ ...style.icon }}
                        source={require("../../../../assets/images/notifications/icons/departure.png")}
                    />
                    <Text style={{ ...style.value, color: colors.primary }}>
                        {formatDate()}
                    </Text>
                </View>}

                <View style={style.detailsContainer}>
                    <Image
                        style = {{ ...style.icon }}
                        source={require("../../../../assets/images/notifications/icons/fee.png")}
                    />
                    <Text style={{ ...style.value, color: colors.primary }}>{props.journey?.isFree ?
                        "Free" : "Paid"}
                    </Text>
                </View>

                <View style={style.detailsContainer}>
                    <Image
                        style = {{ ...style.icon }}
                        source={require("../../../../assets/images/notifications/icons/passangers.png")}
                    />
                    <Text style={{ ...style.value, color: colors.primary }}>
                        {props?.passangersCount + " Passanger" ??
                        DEFAULT_PASSANGERS_COUNT + " Passanger"}
                    </Text>
                </View>
            </View>

            {props.journeyUser?.withBaggage &&
            <View style={style.luggageContainer}>
                <Text style={{ ...style.value, color: colors.primary }}>
                    I'm travelling with luggage.
                </Text>
                <View
                    style={[
                        style.separator,
                        { backgroundColor: colors.secondaryLight }
                    ]}
                ></View>
            </View>}
        </View>
    );
};

export default NotificationRideDetails;
