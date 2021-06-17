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
    journey: {
        departureTime: Date
    }
};

export default Chat;
