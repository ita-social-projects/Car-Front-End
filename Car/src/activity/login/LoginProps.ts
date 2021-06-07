interface LoginProps {
    navigation: {
        // eslint-disable-next-line unused-imports/no-unused-vars
        addListener: (event: string, callback: () => void) => () => void,
    }
    route: {
        params?: {
            resetIndicator: boolean
        }
    }
}

export default LoginProps;
