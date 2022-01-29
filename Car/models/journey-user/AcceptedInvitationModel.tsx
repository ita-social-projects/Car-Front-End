import Stop from "../stop/Stop";
import JourneyUserDto from "./JourneyUserDto";

interface AcceptedInvitationModel {
    journeyUser: JourneyUserDto,
    ApplicantStops: Stop []
}

export default AcceptedInvitationModel;
