import Stop from "../stop/Stop";
import JourneyUserDto from "./JourneyUserDto";

interface JourneyApplyModel {
    journeyUser: JourneyUserDto,
    ApplicantStops: Stop []
}

export default JourneyApplyModel;