import { StyleSheet } from "react-native";

const ChatStyle = StyleSheet.create({

    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
      },
     
    message: {
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 8,
        textAlign: 'center',
        padding: 8,
    },

    input: {
        padding: 10,
        width: '80%',
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 4,
    },

    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: 5,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between'
    },

    chatMessage: {
        backgroundColor: 'powderblue'
    },    
});

export default ChatStyle;