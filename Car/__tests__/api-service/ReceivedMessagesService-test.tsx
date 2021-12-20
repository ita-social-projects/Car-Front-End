import { AxiosResponse } from "axios";
import APIService from "../../api-service/APIService";
import ReceivedMessagesService from "../../api-service/received-messages-service/ReceivedMessagesService";
import Chat from "../../models/Chat/Chat";

describe("Received Messages Service test", () => {
    let chatsData: Chat[] = [{
        id: 1,
        name: "string",
        messageText: "string",
        messageId: 1,
        journeys: [{
            departureTime: new Date()
        }],
        receivedMessages:[{
            unreadMessagesCount:1
        }],
        journeyOrganizer: {
            name: "string",
            surname: "string",
            imageID: "string",
        },
    }];

    test("should return all unread message as read", async () => {
        jest.spyOn(APIService, "put").mockImplementation(
            () =>
                new Promise<AxiosResponse<Chat>>(function (resolve) {
                    resolve({
                        data: chatsData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );

        ReceivedMessagesService.markAsRead(1).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(chatsData[0]));
        });
    });

    test("should return all unread messages number in chat", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Chat>>(function (resolve) {
                    resolve({
                        data: chatsData[0],
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );

        ReceivedMessagesService.getAllUnreadMessagesNumber().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(chatsData[0]));
        });
    });
});