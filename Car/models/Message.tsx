type Message = null | {
    id: number,
    chatId: number,
    text: string,
    createdAt: Date,
    senderId: number,
    senderName: string,
    senderSurname: string,
    imageId: string,
};

export default Message;
