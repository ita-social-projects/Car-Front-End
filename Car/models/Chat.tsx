import Message from "./Message";

type Chat = null | {
    id: number;
    name: string;
    messages: Message[];
};

export default Chat;
