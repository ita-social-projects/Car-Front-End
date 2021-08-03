/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-magic-numbers */

enum NotificationType {
    PassengerApply = 1,
    ApplicationApproval = 2,
    JourneyCancellation = 3,
    JourneyDetailsUpdate = 4,
    JourneyInvitation = 5,
    AcceptedInvitation = 6,
    RejectedInvitation = 7,
    PassengerWithdrawal = 8,
    HRMarketingMessage = 9,
    HRMarketingSurvey = 10,
    RequestedJourneyCreated = 11,
    ApplicationRejection = 12
}

export default NotificationType;
