import APIService from "../APIService";
import Notification from "../../models/notification/Notification";
import APIRoutes from "../APIRoutes";

const route = APIRoutes.getNotificationsUrl();

const NotificationsService = {
    getNotification: async (id: number) =>
        APIService.get<Notification>(route + id),

    getNotifications: async (userId: number) =>
        APIService.get<Array<Notification>>(route + "notifications/" + userId),

    getUnreadNotificationsNumber: async (userId: number | undefined) =>
        APIService.get(route + "unreadNumber/" + userId),

    updateNotification: async (notification: Notification) =>
        APIService.put<Notification>(route, notification),

    markAsRead: async (notificationId: number) =>
        APIService.put(route + notificationId),

    addNotification: async (notification: any) =>
        APIService.post(route, notification),
};

export default NotificationsService;
