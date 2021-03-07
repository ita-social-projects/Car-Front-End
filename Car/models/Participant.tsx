import User from "./user/User";

export type Participant = null | {
    user: User;
    hasLuggage: boolean;
    journeyId: number;
    message?: string;
};

export default Participant;
