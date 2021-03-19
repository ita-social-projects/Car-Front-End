import { AxiosResponse } from "axios";
import APIService from "../../api-service/APIService";
import ChatService from "../../api-service/chat-service/ChatService";
import Chat from "../../models/Chat";

describe("ChatService", () => {
    let chatsData = {
        id: 1,
        name: "Maksym",
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
    };
    let userData = {
        id: 1,
        name: "Peter",
        surname: "Pen",
        position: "Student",
        byteOfImage: "./dd124lam-112_0!1dxxkd",
        location: "Lviv",
        hireDate: new Date("2020-10-11"),
        email: "peter@gmail.com",
        token: ""
    };

    test("it should return chats", () => {
        jest.spyOn(APIService, "get").mockImplementation(
            () =>
                new Promise<AxiosResponse<Chat>>(function (resolve) {
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

        let response: Chat;

        ChatService.getChat(userData.id).then((res) => {
            response = res.data;
            expect(res.status).toEqual(200);
            expect(response).toEqual(userData);
        });
    });
});
