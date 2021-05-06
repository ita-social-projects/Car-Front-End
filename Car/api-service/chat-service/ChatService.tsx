import Chat from "../../models/Chat";
import Message from "../../models/Message";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getChatUrl();

const ChatService = {
    getChat: async (id: number | undefined) => APIService.get<Chat[]>(route + id),

    getCeratinChat: async (id: number | undefined, idLastMessage: number | undefined) =>
        APIService.get<Message[]>(route + "chat/" + id + "/" + idLastMessage),
};

export default ChatService;
