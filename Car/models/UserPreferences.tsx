export type UserPreferences = null | {
    id: number;
    userId: number;
    doAllowSmoking: boolean;
    doAllowEating: boolean;
    comments: string;
};
