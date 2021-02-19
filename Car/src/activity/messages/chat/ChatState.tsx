interface ChatState {
    message: string;
    messages: string[];
    hubConnection: signalR.HubConnection;
    receivedUserId: string;
}

export default ChatState;
