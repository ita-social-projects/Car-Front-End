import Chat from "../../models/Chat/Chat";
import ChatFilter from "../../models/Chat/ChatFilter";
import Message from "../../models/Message";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getChatUrl();

const ChatService = {
    getChat: async () => APIService.get<Chat[]>(route),

    getCertainChat: async (id: number | undefined, idLastMessage: number | undefined) =>
        APIService.get<Message[]>(route + "chat/" + id + "/" + idLastMessage),

    getFilteredChats: async (filter: ChatFilter) =>
        APIService.post<Chat[]>(route + "filter/", filter),

    getAllUnreadMessagesNumber: async () =>
        APIService.get(route + "unreadNumber")
};

export default ChatService;
