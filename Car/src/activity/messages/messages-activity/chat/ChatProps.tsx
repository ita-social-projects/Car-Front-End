interface ChatProps {
    navigation: {
        //
        setOptions: (obj: object) => void
    },
    route: {
        params: {
            chatId: number,
            header: string,
            messageId: number,
        }
    }
}

export default ChatProps;
