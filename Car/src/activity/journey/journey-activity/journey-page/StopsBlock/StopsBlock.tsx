import JourneyPageStyle from "../JourneyPageStyle";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StopType from "../../../../../../models/stop/StopType";
import DM from "../../../../../components/styles/DM";
import React from "react";
import Stop from "../../../../../../models/stop/Stop";

interface StopsBlockProps {
    stops: Stop[],
    // eslint-disable-next-line unused-imports/no-unused-vars
    onStopPress: (stop: Stop) => void
}

const StopsBlock = ({ stops, onStopPress }: StopsBlockProps) => {
    return (
        <View style={JourneyPageStyle.stopsBlock}>
            {stops.length ? stops.map((item, index) =>
                <TouchableOpacity
                    key={index}
                    style={JourneyPageStyle.stopListItem}
                    onPress={() => onStopPress(item)}
                >
                    <View style={JourneyPageStyle.stopListItemRow}>
                        <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                        {item?.type !== StopType.Finish && (
                            <View style={[JourneyPageStyle.stopCustomLineIcon,
                                { backgroundColor: DM("#AAA9AE") }
                            ]} />
                        )}
                    </View>
                    <Text style={{ color: DM("black") }}>
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