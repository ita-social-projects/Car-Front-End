import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableNavigationCardStyle } from './TouchableNavigationCardStyle';

const TouchableNavigationCard = (props: any) => {
	return (
		<View>
			<TouchableOpacity
				style={TouchableNavigationCardStyle.cardContainer}
				onPress={() => props.navigation.navigate(props.navigationName)}>
				<View style={TouchableNavigationCardStyle.cardInformationContainer}>
					<Ionicons
						style={[
							TouchableNavigationCardStyle.cardIcon,
							{ transform: [{ rotate: `${props.angle}deg` }] },
						]}
						name={props.iconName}
						size={20}
						color="black"
					/>
					<Text style={TouchableNavigationCardStyle.cardName}>{props.cardName}</Text>
				</View>
				<View>
					<Ionicons name="chevron-forward-outline" size={20} color="#414045" />
				</View>
			</TouchableOpacity>
		</View>
	);
};
export default TouchableNavigationCard;
