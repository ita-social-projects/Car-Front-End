import { StyleSheet } from 'react-native';

export const DetailsStyle = StyleSheet.create({
	logoutButton: {
		borderRadius: 2,
		margin: 160,
	},

	mainContainer: {
		marginTop: 30,
	},

	detailsContainer: {
		flexDirection: "row",
		alignItems: "center",
	},

	captionView: {
		flex: 1,
		marginLeft: 10,
		padding: 10,
		fontSize: 18,
		fontWeight: 'bold',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},

	valueView: {
		flex: 2,
		marginLeft: 10,
		padding: 10,
		fontSize: 18,
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},

	valueColorView: {
		flex: 2,
		marginLeft: 10,
		padding: 10,
		fontSize: 18,
		fontWeight: 'bold',
		color: '#02A2CF',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
});
