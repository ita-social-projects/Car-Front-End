import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import Stop from "../../../../../../../models/stop/Stop";
import StopType from "../../../../../../../models/stop/StopType";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import { NEXT_INDEX_CORRECTION } from "../../../../../../constants/GeneralConstants";
import JourneyPageStyle from "../../JourneyPageStyle";

interface StopsBlockProps {
    stops: Stop[],
    onStopPress: (stop: Stop) => void,
    highlightedStops: number[]
}

const StopsBlock = ({ stops, onStopPress, highlightedStops }: StopsBlockProps) => {
    const { colors } = useTheme();
    const isHighlightedStop = (index: number) => highlightedStops?.includes(index);

    const getDotAndTextColor = (index: number) =>
        isHighlightedStop(index) ? colors.accentBlue : colors.secondaryLight;

    const getLineColor = (index: number) =>
        isHighlightedStop(index) &&
        highlightedStops?.includes(index + NEXT_INDEX_CORRECTION) ?
            colors.accentBlue : colors.secondaryLight;

    return (
        <View style={JourneyPageStyle.stopsBlock}>
            {stops.length ? stops.map((item, index) =>
                <TouchableOpacity
                    key={index}
                    style={JourneyPageStyle.stopListItem}
                    onPress={() => onStopPress(item)}
                >
                    <View style={JourneyPageStyle.stopListItemRow}>
                        <Ionicons
                            name={"ellipse"}
                            size={15}
                            color={getDotAndTextColor(index)}
                        />
                        {item?.type !== StopType.Finish && (
                            <View style={[JourneyPageStyle.stopCustomLineIcon,
                                { backgroundColor: getLineColor(index) }
                            ]} />
                        )}
                    </View>
                    <Text style={[{
                        color: getDotAndTextColor(index),
                        textDecorationLine: isHighlightedStop(index) ? "underline" : "none"
                    }]} numberOfLines = {1}>
                        {item?.alias ==null? item?.address?.name:
                            item?.alias + " (" + item?.address?.name + ")"}
                    </Text>
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