const mockedModule = jest.mock("react-native-reanimated", () => {
    return {
        Value: jest.fn(() => 0),
        event: jest.fn(),
        add: jest.fn(() => 0),
        eq: jest.fn(() => true),
        set: jest.fn(() => 0),
        cond: jest.fn(),
        interpolate: jest.fn(() => {}),
        Extrapolate: { CLAMP: jest.fn() },
    };
});

export default mockedModule;