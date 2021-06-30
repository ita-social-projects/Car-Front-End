interface ChatProps {
    navigation: {
        // eslint-disable-next-line unused-imports/no-unused-vars
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
