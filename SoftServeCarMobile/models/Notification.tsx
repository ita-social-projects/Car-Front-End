export type Notification = null | {
    id: number,    
    userId: number,
    userName: string,
    position: string,
    description: string,
    isRead: boolean,
    createAt: string,
    receiverId: number,
    journeyId: number,
    userColor: string,
    notificationType: NotificationType

}
export enum NotificationType
    {
        PassengerApply = 1,
        ApplicationApproval = 2,
        JourneyCancellation = 3,
        JourneyDetailsUpdate =4,
        JourneyInvitation = 5,
        AcceptedInvitation = 6,
        RejectedInvitation = 7,
        PassengerWithdrawal = 8,
        HRMarketingMessage = 9,
        HRMarketingSurvey = 10,
    }
