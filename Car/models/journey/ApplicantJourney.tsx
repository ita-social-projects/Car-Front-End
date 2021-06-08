import Stop from "../stop/Stop";
import Journey from "./Journey";

interface ApplicantJourney{
    journey: Journey,
    applicantStops: Stop[],
}

export default ApplicantJourney;
