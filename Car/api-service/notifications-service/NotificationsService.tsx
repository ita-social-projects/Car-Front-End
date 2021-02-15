import APIService from "../APIService";
import { Notification } from "../../models/Notification";
import { injectable } from "tsyringe";

@injectable()
class NotificationsService {
    constructor(private apiService: APIService) {}
    routePrefix: string = "Notification";

    getNotification(id: number) {
        return this.apiService.get<Notification>(this.routePrefix + "/" + id);
    }

    getNotifications(userId: number) {
        return this.apiService.get<Array<Notification>>(
            this.routePrefix + "/notifications/" + userId
        );
    }

    getUnreadNotificationsNumber(userId: number) {
        return this.apiService.get(
            this.routePrefix + "/unreadNumber/" + userId
        );
    }

    updateNotification(notification: Notification) {
        return this.apiService.put<Notification>(
            this.routePrefix,
            notification
        );
    }

    markAsRead(notificationId: number) {
        return this.apiService.post(this.routePrefix + `\\${notificationId}`);
    }
}
export default NotificationsService;
