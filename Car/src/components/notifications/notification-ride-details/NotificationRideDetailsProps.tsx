interface NotificationRideDetailsProps {
    IsBaggageVisible?: boolean;
    IsAvailableSeatsVisible?: boolean;
    IsFeeVisible?: boolean;
    IsDepartureTimeVisible?: boolean;
    IsDetailsTitleVisible?: boolean;
    journeyId: number,
    withSeats?: boolean
    withBaggage?: boolean
}

export default NotificationRideDetailsProps;
