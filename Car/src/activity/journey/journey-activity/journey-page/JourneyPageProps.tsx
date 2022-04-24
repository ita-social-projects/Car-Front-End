import Journey from "../../../../../models/journey/Journey";

interface JourneyPageProps {
    route: {
        params: {
            journey: Journey,
            isDriver: boolean,
            isPassenger: boolean,
            passangersCount?: number,
            isPast: boolean,
            isCanceled: boolean
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
