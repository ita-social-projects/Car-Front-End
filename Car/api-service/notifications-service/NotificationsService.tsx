import APIService from "../APIService";
import Notification from "../../models/notification/Notification";
import APIRoutes from "../APIRoutes";
import CreateNotificationModel from "../../models/notification/CreateNotificationModel";

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

    addNotification: async (notification: CreateNotificationModel) =>
        APIService.post(route, notification),

    deleteNotification: async (id: number) =>
        APIService.delete(route + id),
};

export default NotificationsService;
