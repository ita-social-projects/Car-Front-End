import JourneyUserDto from "../../../../models/journey-user/JourneyUserDto";

interface NotificationRideDetailsProps {
    IsBaggageVisible?: boolean;
    IsAvailableSeatsVisible?: boolean;
    IsFeeVisible?: boolean;
    IsDepartureTimeVisible?: boolean;
    IsDetailsTitleVisible?: boolean;
    journeyId: number,
    userId: number,
    withSeats?: boolean,
    journeyUser?: JourneyUserDto
}

export default NotificationRideDetailsProps;
