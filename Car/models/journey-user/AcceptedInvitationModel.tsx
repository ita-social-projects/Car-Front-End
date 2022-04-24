import JourneyUserDto from "./JourneyUserDto";
import { StopModel } from "../stop/StopModel";

interface AcceptedInvitationModel {
    journeyUser: JourneyUserDto,
    applicantStops: StopModel[]
}

export default AcceptedInvitationModel;
