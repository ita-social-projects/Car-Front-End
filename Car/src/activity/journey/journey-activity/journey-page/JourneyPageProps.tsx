import Stop from "../../../../../models/stop/Stop";

interface JourneyPageProps {
    route: {
        params: {
            journeyId: number,
            isDriver: boolean,
            isPassenger: boolean,
            applicantStops?: Stop[],
            passangersCount?: number,
            isPast: boolean
        }
    },
    navigation?: {
        setOptions: (option: object) => void,
        addListener: (eventName: string, callback: () => void) => () => void
    },
    moreOptionsPopupIsOpen: boolean,
    closeMoreOptionsPopup: () => void
}

export default JourneyPageProps;
