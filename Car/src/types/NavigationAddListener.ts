interface NavigationAddListener {
    navigation: {
        // eslint-disable-next-line unused-imports/no-unused-vars
        addListener: (event: string, callback: () => void) => () => void
    }
}

export default NavigationAddListener;
