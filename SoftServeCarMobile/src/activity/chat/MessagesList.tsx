import React, { useEffect, useState, useContext } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../auth/AuthProvider';
import 'reflect-metadata';
import { container } from 'tsyringe';
import ChatService from '../../../api-service/chat-service/ChatService';

const SimpleMessage = (props) => {
	const chatService = container.resolve(ChatService);
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		chatService.getChat(user?.id).then((res) => {
			const chats = res.data;
			console.log(chats);
			setData(chats);
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return (
			<View>
				<ActivityIndicator size="large" color="#5500dc" />
			</View>
		);
	}

	const renderSearchBar = () => {
		return (
			<SearchBar
				placeholder="Search"
				// onChangeText={() => console.log('searching')}
				lightTheme
				round
			/>
		);
	};

	return (
		<View style={{ marginTop: 24 }}>
			<FlatList
				data={data}
				keyExtractor={({ id }, index) => id.toString()}
				ListHeaderComponent={renderSearchBar}
				renderItem={({ item }) => (
					<View style={styles.main}>
						<TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
							<View style={styles.button}>
								<View style={{ flexDirection: 'row' }}>
									<Image
										style={styles.image}
										source={{
											uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
										}}
									/>
									<View>
										<Text style={styles.fonts}>{item.chatName}</Text>
										<Text style={{ fontSize: 11, paddingTop: 10, fontFamily: 'sans-serif' }}>
											{item.chatName}{' '}
										</Text>
									</View>
								</View>
								<TouchableOpacity
									style={{ paddingTop: 12 }}
									onPress={() => props.navigation.navigate('Chat')}>
									<View>
										<Ionicons name="chatbubbles" size={20} />
									</View>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

export default SimpleMessage;

export const styles = StyleSheet.create({
	main: {
		display: 'flex',
		flexDirection: 'column',
		borderBottomWidth: 1,
		borderBottomColor: '#C1C1C5',
		height: 68,
		alignContent: 'center',
		width: 344,
		alignSelf: 'center',
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	fonts: {
		fontFamily: 'OpenSans-Italic',
		fontWeight: 'bold',
		fontSize: 13,
	},
	image: {
		width: 56,
		height: 56,
		borderRadius: 50,
		marginRight: 7,
		bottom: 5,
	},
	lottie: {
		width: 100,
		height: 100,
	},
});
