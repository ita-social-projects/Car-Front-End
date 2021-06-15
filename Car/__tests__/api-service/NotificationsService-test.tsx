import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import NotificationsService from "../../api-service/notifications-service/NotificationsService";
import CreateNotificationModel from "../../models/notification/CreateNotificationModel";
import Notification from "../../models/notification/Notification";
import NotificationType from "../../models/notification/NotificationType";

describe("Location Service test", () => {
    let notificationData: Notification[] = [{
        id: 1,
        createAt: new Date(),
        isRead: false,
        notificationData: "ABC",
        notificationType: 1,
        receiverId: 1,
        journeyId: 1,
        user: null,
    }];

    let notificationToAdd: CreateNotificationModel = {
        senderId: 1,
        recieverId: 1,
        journeyId: 1,
        type: NotificationType.AcceptedInvitation,
        jsonData: ""
    };

    test("should return notification", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Notification>>(function (resolve) {
                    resolve({
                        data: notificationData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        NotificationsService.getNotification(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(notificationData[0]));
        });
    });

    test("should return notifications", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Notification[]>>(function (resolve) {
                    resolve({
                        data: notificationData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        NotificationsService.getNotifications(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(notificationData));
        });
    });

    test("should return unread notifications count", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<number>>(function (resolve) {
                    resolve({
                        data: 4,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        NotificationsService.getUnreadNotificationsNumber(1).then((res) => {
            expect(res.status).toBe(200);
            expect(res.data).toBe(4);
        });
    });

    test("should add notification", async () => {
        jest.spyOn(APIService, "post").mockImplementation(
            () =>
                new Promise<AxiosResponse<Notification>>(function (resolve) {
                    resolve({
                        data: notificationData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        NotificationsService.addNotification(notificationToAdd).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(notificationData[0]));
        });
    });

    test("should update notification", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<Notification>>(function (resolve) {
                    resolve({
                        data: notificationData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        NotificationsService.updateNotification(notificationData[0]).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(notificationData[0]));
        });
    });

    test("should mark notification as read", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<Notification>>(function (resolve) {
                    resolve({
                        data: notificationData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        NotificationsService.markAsRead(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(notificationData[0]));
        });
    });
});
