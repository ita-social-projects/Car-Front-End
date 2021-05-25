interface JourneyPageProps {
    route: {
        params: {
            journeyId: number,
            isDriver: boolean,
            isPassenger: boolean
        }
    },
    navigation?: {
        // eslint-disable-next-line unused-imports/no-unused-vars
        setOptions: (option: object) => void
    },
    moreOptionsPopupIsOpen: boolean
}

export default JourneyPageProps;
