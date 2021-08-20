import { AxiosResponse } from "axios";
import APIService from "../../api-service/APIService";
import ChatService from "../../api-service/chat-service/ChatService";
import Chat from "../../models/Chat/Chat";
import ChatFilter from "../../models/Chat/ChatFilter";
import CreateChat from "../../models/Chat/CreateChat";

describe("Chat Service test", () => {
    let chatsData: Chat[] = [{
        id: 1,
        name: "string",
        messageText: "string",
        messageId: 1,
        journey: {
            departureTime: new Date()
        },
        journeyOrganizer: {
            name: "string",
            surname: "string",
            imageID: "string",
        },
    }];

    let filter: ChatFilter = {
        searchText: "string",
        chats: chatsData,
    };

    let newChat: CreateChat = {
        id: 1,
        name: "string"
    };

    test("should return chats", async () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Chat[]>>(function (resolve) {
                    resolve({
                        data: chatsData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );

        ChatService.getChat().then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toEqual(JSON.stringify(chatsData));
        });
    });

    test("should return chat", async () => {
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

        ChatService.getCertainChat(1, 0).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(chatsData[0]));
        });
    });

    test("should return chat", async () => {
        jest.spyOn(APIService, "post").mockImplementation(
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

        ChatService.getFilteredChats(filter).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(chatsData[0]));
        });
    });

    test("should add chat", async () => {
        jest.spyOn(APIService, "post").mockImplementation(
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

        ChatService.addChat(newChat).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(chatsData[0]));
        });
    });
});
