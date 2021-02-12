export type Participant = null | {
    userId: number;
    hasLuggage: boolean;
    journeyId: number;
    message?: string;
};
