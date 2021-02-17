import { User } from "./User";

export type Message = null | {
    id: number;
    text: string;
    sender: User;
    createdAt: Date;
};