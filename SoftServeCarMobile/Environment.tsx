export const environment = {
     url: 'https://car-project.azurewebsites.net/'
    // url: 'http://10.0.2.2:5000/'
    //url: 'http://192.168.0.103:5000/'
};

export const routes = {
    apiUrl: environment.url + 'api/',
    chatUrl: environment.url + 'Chat/',
    valueUrl: environment.url + 'Value/',
    fakeUserUrl: environment.url + 'FakeUser/',
    notificationUrl: environment.url + 'Notification'
};
