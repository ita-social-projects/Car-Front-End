import { Message } from "./Message";

export type Chat = null | {
    id: number;
    name: string;
    messages: Message[];
};
