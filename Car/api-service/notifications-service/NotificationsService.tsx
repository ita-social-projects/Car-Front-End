import APIService from "../APIService";
import Notification from "../../models/Notification";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getNotificationsUrl();

const NotificationsService = {
    getNotification: async (id: number) => {
        return await APIService.get<Notification>(route + id);
    },

    getNotifications: async (userId: number) => {
        return await APIService.get<Array<Notification>>(
            route + "/notifications/" + userId
        );
    },

    getUnreadNotificationsNumber: async (userId: number) => {
        return await APIService.get(route + "unreadNumber/" + userId);
    },

    updateNotification: async (notification: Notification) => {
        return await APIService.put<Notification>(route, notification);
    },

    markAsRead: async (notificationId: number) => {
        return await APIService.put(route + notificationId);
    }
};

export default NotificationsService;
