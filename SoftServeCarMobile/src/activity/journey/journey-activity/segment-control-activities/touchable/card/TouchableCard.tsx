import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TouchableCardStyle from './TouchableCardStyle';

const TouchableCard = (props: any) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TouchableOpacity style={TouchableCardStyle.cardContainer}
                onPress={() => { }}>
                <View style={TouchableCardStyle.cardInformationContainer}>
                    <Ionicons style={TouchableCardStyle.cardIcon} name={props?.iconName} size={22} color={'#414045'} />
                    <View style={TouchableCardStyle.cardTextContainer}>
                        <Text style={TouchableCardStyle.cardName}>{props.cardName}</Text>
                        <Text style={[TouchableCardStyle.cardAddress, { color: props?.addressFontColor }]}>{props.address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default TouchableCard;