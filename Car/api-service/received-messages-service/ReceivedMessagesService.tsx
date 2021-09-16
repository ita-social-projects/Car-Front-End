import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import ReceivedMessages from "../../models/received-messages/ReceivedMessages";

const route = APIRoutes.getReceivedMessagesUrl();

const ReceivedMessagesService = {
    getUnreadMessagesByChat: async (chatId: number | undefined) =>
        APIService.get<ReceivedMessages[]>(`${route}/getunreadmessages/${chatId}`),

    markAsRead: async (chatId: number | undefined) =>
        APIService.put<ReceivedMessages[]>(`${route}/markasread/${chatId}`),

    getUnreadMessages: async () =>
        APIService.get<ReceivedMessages[]>(`${route}/getunreadmessages`),
};

export default ReceivedMessagesService;