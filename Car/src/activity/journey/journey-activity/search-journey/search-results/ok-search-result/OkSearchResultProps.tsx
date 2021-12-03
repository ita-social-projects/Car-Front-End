import ApplicantJourney from "../../../../../../../models/journey/ApplicantJourney";

interface OkSearchResultProps
{
    route: {
        params: {
            journeys: ApplicantJourney[],
            displayFee: boolean,
            passangersCount: number
        }
    }
}

export default OkSearchResultProps;