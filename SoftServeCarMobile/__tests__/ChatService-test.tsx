import { AxiosResponse } from 'axios';
import APIService from '../api-service/APIService';
import ChatService from '../api-service/chat-service/ChatService';
import { Chat } from '../models/Chat';

describe('ChatService', () => {
    let chatsData = {
        id: 1,
        Name: 'Maksym'
    }
    let userData = {
        id: 1,
        name: 'Peter',
        surname: 'Pen',
        position: 'Student',
        byteOfImage: './dd124lam-112_0!1dxxkd',
        location: 'Lviv',
        hireDate: new Date('2020-10-11'),
        email: 'peter@gmail.com',
        token: '',
    }

    let apiService: APIService = new APIService();
    let chatService: ChatService = new ChatService(apiService);

    test('it should return chats', () => {
        jest.spyOn(apiService, 'get').mockImplementation(() => new Promise<AxiosResponse<Chat>>
            (function (resolve) {
                resolve(
                    {
                        data: chatsData,
                        statusText: 'Ok',
                        status: 200,
                        config: {},
                        headers: {
                            'Context-Type': 'application/json',
                        }
                    });
            }));

            let response: Chat;
            chatService.getChat(userData.id)
            .then(res => {
                response = res.data;
                expect(res.status).toEqual(200);
                expect(response).toEqual(userData);
    })
})})