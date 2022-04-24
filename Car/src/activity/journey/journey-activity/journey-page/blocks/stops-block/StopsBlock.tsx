import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useEffect } from "react";
import Stop from "../../../../../../../models/stop/Stop";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import {
    ADDRESS_MAX_LENGTH,
    BIGGER_STOP_SIZE,
    LAST_INDEX_CORRECTION,
    LONGER_LINE,
    NEXT_INDEX_CORRECTION,
    SHORTER_LINE,
    ZERO
} from "../../../../../../constants/GeneralConstants";
import JourneyPageStyle from "../../JourneyPageStyle";
import StopType from "../../../../../../../models/stop/StopType";
import { UserStop } from "../../../../../../../models/user/UserStop";
import User from "../../../../../../../models/user/User";
import { setLocationName } from "../../../../../../utils/JourneyHelperFunctions";

interface StopsBlockProps {
    stops: Stop[],
    onStopPress: (stop: Stop) => void,
    highlightedStops?: number[]
}

const StopsBlock = ({ stops, onStopPress, highlightedStops }: StopsBlockProps) => {
    const { colors } = useTheme();
    const maxHighlight = 1;
    const minHighlight = 0.1;

    useEffect(() => {
        setLocationName(stops);
    }, []);

    const isHighlightedStop = (index: number) => highlightedStops?.includes(index);

    const getDotAndTextColor = (index: number) =>
        isHighlightedStop(index) ? colors.accentBlue : colors.secondaryLight;

    const getLineColor = (index: number) =>
        isHighlightedStop(index) &&
        isHighlightedStop(index + NEXT_INDEX_CORRECTION) ?
            colors.accentBlue : colors.secondaryLight;

    const getUserNamesForStop = (stop: Stop): string[] => {
        return stop!.userStops!.filter((us: UserStop) => us.stopType === StopType.Start)
            .map((us: UserStop) =>
                stop!.users!.find((user: User) => user!.id === us.userId)!.name);
    };

    const StopHasStartUsers = (stop: Stop) => stop!.userStops?.some((us: UserStop) => us!.stopType === StopType.Start);

    return (
        <View style={JourneyPageStyle.stopsBlock}>
            {stops.length ? stops.sort((stop1: Stop, stop2: Stop) => stop1!.index - stop2!.index).map((item, index) =>
                <TouchableOpacity
                    key={index}
                    style={JourneyPageStyle.stopListItem}
                    onPress={() => onStopPress(item)}
                    activeOpacity = {
                        (item!.index === ZERO || item!.index === stops.length - LAST_INDEX_CORRECTION)
                            ? maxHighlight: minHighlight
                    }
                >
                    <View style={JourneyPageStyle.stopListItemRow}>
                        <View style={JourneyPageStyle.stopBlock}>
                            <Ionicons
                                name={"ellipse"}
                                size={ BIGGER_STOP_SIZE }
                                color={getDotAndTextColor(index)}
                            />
                            <Text
                                style={[
                                    JourneyPageStyle.addressInfo,
                                    { color: getDotAndTextColor(index) }
                                ]}
                            >
                                { item!.address?.name ?? "There is no address name provided" }
                            </Text>
                        </View>
                        <View style={JourneyPageStyle.lineBlock}>
                            {index < stops.length - NEXT_INDEX_CORRECTION && (
                                <View style={[JourneyPageStyle.stopCustomLineIcon,
                                    {
                                        backgroundColor: getLineColor(index),
                                        height: (
                                            StopHasStartUsers(item) && item!.address?.name.length! > ADDRESS_MAX_LENGTH
                                        ) ? LONGER_LINE : SHORTER_LINE
                                    },
                                ]} />
                            )}
                            {
                                StopHasStartUsers(item) ? (
                                    <Text
                                        style={[
                                            JourneyPageStyle.usersList,
                                            { color: getDotAndTextColor(index) }
                                        ]}
                                        numberOfLines = {1}
                                    >
                                        { `(${getUserNamesForStop(item).join(", ")})` }
                                    </Text>
                                ) : <Text />
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            ) : (
                <>
                    <View style={JourneyPageStyle.stopListItem}>
                        <View style={JourneyPageStyle.stopListItemRow}>
                            <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                            <View style={[JourneyPageStyle.stopCustomLineIcon,
                                { backgroundColor: colors.secondaryLight }]}
                            />
                        </View>
                        <Text style={{ color: colors.primary }}>
                            Location A
                        </Text>
                    </View>
                    <View style={JourneyPageStyle.stopListItem}>
                        <View style={JourneyPageStyle.stopListItemRow}>
                            <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                        </View>
                        <Text style={{ color: colors.primary }}>
                            Location B
                        </Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default StopsBlock;
