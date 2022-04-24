import Journey from "../../../../../../../models/journey/Journey";

interface OkSearchResultProps
{
    route: {
        params: {
            journeys: Journey[],
            displayFee: boolean,
            passangersCount: number,
            isPast: boolean,
            isCanceled: boolean
        }
    }
}

export default OkSearchResultProps;
