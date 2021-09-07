import InvitationType from "./InvitationType";

type Invitation = null | {
    id: number;
    type: InvitationType;
    invitedUserId: number;
    journeyId: number;
};

export default Invitation;
