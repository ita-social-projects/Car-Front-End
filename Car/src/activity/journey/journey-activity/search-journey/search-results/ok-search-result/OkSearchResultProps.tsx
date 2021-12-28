import ApplicantJourney from "../../../../../../../models/journey/ApplicantJourney";

interface OkSearchResultProps
{
    route: {
        params: {
            journeys: ApplicantJourney[],
            displayFee: boolean,
            passangersCount: number,
            isPast: boolean
        }
    }
}

export default OkSearchResultProps;