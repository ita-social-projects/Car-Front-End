import ApplicantJourney from "../../../../../../../models/journey/ApplicantJourney";

interface OkSearchResultProps
{
    route: {
        params: {
            journeys: ApplicantJourney[],
            displayFee: boolean,
            passangersCount: number,
            isPast: boolean,
            isCanceled: boolean
        }
    }
}

export default OkSearchResultProps;