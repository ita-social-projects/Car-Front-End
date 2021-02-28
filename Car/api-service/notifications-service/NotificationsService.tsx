import APIService from "../APIService";
import Notification from "../../models/Notification";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getNotificationsUrl();

const NotificationsService = {
    getNotification: async (id: number) =>
        APIService.get<Notification>(route + id),

    getNotifications: async (userId: number) =>
        APIService.get<Array<Notification>>(route + "notifications/" + userId),

    getUnreadNotificationsNumber: async (userId: number) =>
        APIService.get(route + "unreadNumber/" + userId),

    updateNotification: async (notification: Notification) =>
        APIService.put<Notification>(route, notification),

    markAsRead: async (notificationId: number) =>
        APIService.put(route + notificationId)
};

export default NotificationsService;
