import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import TouchableJourneyStyle from './TouchableJourneyStyle';
import * as RootNavigation from '../../../../../../components/navigation/RootNavigation';

export default function TouchableJourney() {
    return (
        <View>
            <TouchableOpacity
                onPress={() => { RootNavigation.navigate("Journey Page", {}); }}>
                <View style={TouchableJourneyStyle.component}>
                    <View style={TouchableJourneyStyle.header}>
                        <Image style={TouchableJourneyStyle.image}
                            source={require("../../../../../../../assets/images/default-user-photo.jpg")} />
                        <View style={TouchableJourneyStyle.driverBlock}>
                            <Text style={TouchableJourneyStyle.driverName}>
                                Maria Kruselnytska's journey
                            </Text>
                            <Text style={TouchableJourneyStyle.driverPosition}>
                                Experience Designer
                            </Text>
                        </View>
                        <View style={TouchableJourneyStyle.rightBlock}>
                            <Text style={TouchableJourneyStyle.time}>now</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Location A</Text>
                        <Text>Stop A.1</Text>
                        <Text>Stop A.2</Text>
                        <Text>Location B (Your Stop)</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
