import {
    MINUTES_IN_HOUR
} from "../constants/GeneralConstants";
import moment from "moment";
import "moment-timezone";
import RNLocalize from "react-native-localize";
import { Platform, StyleSheet } from 'react-native';

// if you have problems with tests, mock getTimeZone function
export const getDateWithCorrectUtc = (date : Date) => { //used for Ios, Ios doesn't support automatic utc time
    if (Platform.OS === "ios") {
        return new Date(date
            .setHours(date.getHours()
                + moment.tz(RNLocalize.getTimeZone()).utcOffset() / MINUTES_IN_HOUR));
    }
    else {
        return new Date(date
            .setHours(date.getHours()));
    }
};