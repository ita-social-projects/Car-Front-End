import SignalRHubConnection from "../../api-service/SignalRHubConnection";
import { SignalRHubConnection as MockedHub } from "../../__mocks__/@microsoft/signalr/MockedHub";

test("should be correct", async () =>
    expect(SignalRHubConnection).toEqual(new MockedHub()));
