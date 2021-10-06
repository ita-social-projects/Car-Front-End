import JourneyUserDto from "../../../../models/journey-user/JourneyUserDto";
import Journey from "../../../../models/journey/Journey";

interface NotificationRideDetailsProps {
    journey: Journey,
    journeyUser: JourneyUserDto,
    IsBaggageVisible?: boolean;
    IsAvailableSeatsVisible?: boolean;
    IsFeeVisible?: boolean;
    IsDepartureTimeVisible?: boolean;
    IsDetailsTitleVisible?: boolean;
    journeyId: number,
    userId: number,
    withSeats?: boolean,
    passangersCount?: number,
    withPassangers?: boolean
}

export default NotificationRideDetailsProps;
