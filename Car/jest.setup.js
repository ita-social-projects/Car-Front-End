import mockRNCNetInfo from "@react-native-community/netinfo/jest/netinfo-mock.js";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("./src/components/telemetry/AppInsights", () => {
    return {
        // eslint-disable-next-line
        trackException: jest.fn((error)=>{}),
    };
});
jest.mock("@react-native-community/netinfo", () => mockRNCNetInfo);
configure({ adapter: new Adapter() });