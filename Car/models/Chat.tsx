import Journey from "./Journey";
import Message from "./Message";

type Chat = null | {
    id: number;
    name: string;
    journey: Journey;
    messages: Message[];
};

export default Chat;
