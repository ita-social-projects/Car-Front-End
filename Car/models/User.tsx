type User = null | {
    id: number;
    name: string;
    surname: string;
    position: string;
    location: string;
    email: string;
    token: string;
    hireDate: Date;
    avatarUrl: string;
    journeyCount: number;
};

export default User;
