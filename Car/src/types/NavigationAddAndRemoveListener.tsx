interface NavigationAddAndRemoveListener {
    navigation: {
        addListener: (event: string, callback: () => void) => () => void
        removeListener: (event: string, callback: () => void) => () => void
    }
}

export default NavigationAddAndRemoveListener;
