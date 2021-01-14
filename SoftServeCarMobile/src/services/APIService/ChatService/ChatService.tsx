import APIService from '../APIService';
import "reflect-metadata";
import { injectable } from 'tsyringe';
import Chat from '../../../models/User';


@injectable()
class ChatService {
    constructor(private apiService: APIService){ }

    routePrefix: string = 'userchats/';

    getChat(userId: number) {
        return this.apiService.get<Chat>(this.routePrefix + userId);
    }

}

export default ChatService;