type User = null | {
    id: number;
    name: string;
    surname: string;
    position: string;
    location: string;
    email: string;
    token: string;
    hireDate: Date;
    imageId: string | null;
    journeyCount: number;
};

export default User;
