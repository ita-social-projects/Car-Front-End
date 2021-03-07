import User from "./user/User";

type Message = null | {
    id: number;
    text: string;
    sender: User;
    createdAt: Date;
};

export default Message;
