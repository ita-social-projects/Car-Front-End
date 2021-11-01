interface NavigationAddListener {
    navigation: {
        addListener: (event: string, callback: () => void) => () => void
    }
}

export default NavigationAddListener;
