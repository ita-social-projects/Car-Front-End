import APIService from "../APIService";
import Notification from "../../models/Notification";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getNotificationsUrl();

const NotificationsService = {
    getNotification: async (id: number) => {
        return APIService.get<Notification>(route + id);
    },

    getNotifications: async (userId: number) => {
        return APIService.get<Array<Notification>>(
            route + "/notifications/" + userId
        );
    },

    getUnreadNotificationsNumber: async (userId: number) => {
        return APIService.get(route + "unreadNumber/" + userId);
    },

    updateNotification: async (notification: Notification) => {
        return APIService.put<Notification>(route, notification);
    },

    markAsRead: async (notificationId: number) => {
        return APIService.put(route + notificationId);
    }
};

export default NotificationsService;
