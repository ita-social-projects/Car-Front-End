import {User} from "./User";

export type Participant = null | {
    user: User;
    hasLuggage: boolean;
    journeyId: number;
    message?: string;
};
