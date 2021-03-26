interface LoginProps {
    navigation: {
        // eslint-disable-next-line unused-imports/no-unused-vars
        addListener: (event: string, callback: () => void) => () => void
        // eslint-disable-next-line unused-imports/no-unused-vars
        removeListener: (event: string, callback: () => void) => () => void
    }
}

export default LoginProps;
