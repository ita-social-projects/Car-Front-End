type Chat = null | {
    id: number,
    name: string,
    messageText: string,
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
