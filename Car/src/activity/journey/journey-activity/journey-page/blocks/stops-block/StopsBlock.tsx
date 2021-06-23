import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import Stop from "../../../../../../../models/stop/Stop";
import StopType from "../../../../../../../models/stop/StopType";
import DM from "../../../../../../components/styles/DM";
import { NEXT_INDEX_CORRECTION } from "../../../../../../constants/GeneralConstants";
import JourneyPageStyle from "../../JourneyPageStyle";

interface StopsBlockProps {
    stops: Stop[],
    // eslint-disable-next-line unused-imports/no-unused-vars
    onStopPress: (stop: Stop) => void,
    highlightedStops: number[]
}

const StopsBlock = ({ stops, onStopPress, highlightedStops }: StopsBlockProps) => {
    const isHighlightedStop = (index: number) => highlightedStops?.includes(index);

    const getDotAndTextColor = (index: number) =>
        isHighlightedStop(index) ? "#0086cf" : "#AAA9AE";

    const getLineColor = (index: number) =>
        isHighlightedStop(index) &&
        highlightedStops?.includes(index + NEXT_INDEX_CORRECTION) ?
            "#0086cf" : "#AAA9AE";

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
                                { backgroundColor: DM(getLineColor(index)) }
                            ]} />
                        )}
                    </View>
                    <Text style={{
                        color: DM(getDotAndTextColor(index)),
                        textDecorationLine: isHighlightedStop(index) ? "underline" : "none"
                    }}>
                        {item?.address?.name}
                    </Text>
                </TouchableOpacity>
            ) : (
                <>
                    <View style={JourneyPageStyle.stopListItem}>
                        <View style={JourneyPageStyle.stopListItemRow}>
                            <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                            <View style={[JourneyPageStyle.stopCustomLineIcon,
                                { backgroundColor: DM("#AAA9AE") }]}
                            />
                        </View>
                        <Text style={{ color: DM("black") }}>
                            Location A
                        </Text>
                    </View>
                    <View style={JourneyPageStyle.stopListItem}>
                        <View style={JourneyPageStyle.stopListItemRow}>
                            <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                        </View>
                        <Text style={{ color: DM("black") }}>
                            Location B
                        </Text>
                    </View>
                </>
            )}
        </View>
    );
};

export default StopsBlock;