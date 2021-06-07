import Stop from "../../../../../models/stop/Stop";

interface JourneyPageProps {
    route: {
        params: {
            journeyId: number,
            isDriver: boolean,
            isPassenger: boolean,
            applicantStops: Stop[],
        }
    },
    navigation?: {
        // eslint-disable-next-line unused-imports/no-unused-vars
        setOptions: (option: object) => void,
        // eslint-disable-next-line unused-imports/no-unused-vars
        addListener: (eventName: string, callback: () => void) => () => void
    },
    moreOptionsPopupIsOpen: boolean
}

export default JourneyPageProps;
