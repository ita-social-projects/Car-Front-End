interface LoginProps {
    navigation: {
        addListener: (event: string, callback: () => void) => () => void,
    }
    route: {
        params?: {
            resetIndicator: boolean
        }
    }
}

export default LoginProps;
