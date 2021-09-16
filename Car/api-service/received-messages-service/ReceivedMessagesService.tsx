import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import ReceivedMessages from "../../models/received-messages/ReceivedMessages";

const route = APIRoutes.getReceivedMessagesUrl();

const ReceivedMessagesService = {
    markAsRead: async (chatId: number | undefined) =>
        APIService.put<ReceivedMessages[]>(`${route}/markasread/${chatId}`),

    getAllUnreadMessagesNumber: async () =>
        APIService.get(route + "unreadNumber")
};

export default ReceivedMessagesService;