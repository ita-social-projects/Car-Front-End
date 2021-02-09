import "reflect-metadata";
import { injectable } from "tsyringe";
import { Chat } from "../../models/Chat";
import APIService from "../APIService";

@injectable()
class ChatService {
    constructor(private apiService: APIService) {}

    routePrefix: string = "user-chats/";

    getChat(id: number | undefined) {
        return this.apiService.get<Chat>(this.routePrefix + id);
    }
}

export default ChatService;
