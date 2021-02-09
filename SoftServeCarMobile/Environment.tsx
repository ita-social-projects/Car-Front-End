export const environment = 
    url: 'https://car-project.azurewebsites.net/'
};

export const routes = {
    apiUrl: environment.url + 'api/',
    chatUrl: environment.url + 'Chat/',
    valueUrl: environment.url + 'Value/',
    fakeUserUrl: environment.url + 'FakeUser/',
    notificationUrl: environment.url + 'Notification'
};
