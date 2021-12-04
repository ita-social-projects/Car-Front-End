type Chat = null | {
    id: number,
    name: string,
    messageText: string,
    messageId: number,
    journeyOrganizer: {
        name: string,
        surname: string,
        imageID: string,
    },
    receivedMessages:[{
        unreadMessagesCount: number,
    }],
    journeys: [{
        departureTime: Date
    }]
};

export default Chat;
