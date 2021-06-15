import JourneyPageStyle from "../JourneyPageStyle";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StopType from "../../../../../../models/stop/StopType";
import DM from "../../../../../components/styles/DM";
import React from "react";
import Stop from "../../../../../../models/stop/Stop";

const StopsBlock = ({ stops }: {stops: Stop[]}) => {
    return (
        <View style={JourneyPageStyle.stopsBlock}>
            {stops.length ? stops.map((item, index) =>
                <View key={index} style={JourneyPageStyle.stopListItem}>
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
                </View>
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