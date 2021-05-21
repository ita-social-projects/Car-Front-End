import { AxiosResponse } from "axios";
import APIService from "../../api-service/APIService";
import ChatService from "../../api-service/chat-service/ChatService";
import Chat from "../../models/Chat";

describe("Chat Service test", () => {
    let chatsData: Chat[] = [{
        id: 1,
        name: "Maksym",
        journey: {
            id: 1,
            routeDistance: 1,
            departureTime: new Date(),
            countOfSeats: 1,
            comments: "string",
            isFree: false,
            isOnOwnCar: false,
            schedule: null,
            organizer: {
                id: 3,
                name: "string",
                surname: "string",
                position: "string",
                location: "string",
                hireDate: new Date(),
                email: "string",
                imageId: "string",
                token: "string",
                journeyCount: 7
            },
            journeyPoints: [],
            car: {
                id: 1,
                color: 0,
                plateNumber: "string",
                imageId: null,
                ownerId: 0,
                model: null
            },
            participants: [
                {
                    id: 1,
                    name: "string",
                    surname: "string",
                    email: "string",
                    imageId: "string",
                    token: "string",
                    journeyCount: 0,
                    hireDate: new Date(),
                    location: "string",
                    position: "string",
                }
            ],
            stops: []
        },
        messages: [{
            id: 2,
            text: "string",
            sender: {
                id: 1,
                name: "string",
                surname: "string",
                position: "string",
                location: "string",
                email: "string",
                token: "string",
                hireDate: new Date(),
                imageId: "string",
                journeyCount: 1,
            },
            createdAt: new Date(),
        },
        {
            id: 3,
            text: "string",
            sender: {
                id: 5,
                name: "string",
                surname: "string",
                position: "string",
                location: "string",
                email: "string",
                token: "string",
                hireDate: new Date(),
                imageId: "string",
                journeyCount: 3,
            },
            createdAt: new Date(),
        },

        ]
    }];

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

        ChatService.getChat(1).then((res) => {
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

        ChatService.getCeratinChat(1, 0).then((res) => {
            expect(res.status).toBe(200);
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(chatsData[0]));
        });
    });
});
