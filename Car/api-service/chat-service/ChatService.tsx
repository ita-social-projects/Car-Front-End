import Chat from "../../models/Chat";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getChatUrl();

const ChatService = {
    getChat: async (id: number | undefined) => {
        return APIService.get<Chat>(route + id);
    }
};

export default ChatService;
