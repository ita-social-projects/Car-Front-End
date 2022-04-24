type User = null | {
    id: number;
    name: string;
    surname: string;
    position: string;
    location: string;
    email: string;
    hireDate: Date;
    imageId: string | null;
    journeyCount: number;
    phoneNumber?: string | null;
    isNumberVisible?: boolean;
    isPolicyAccepted: boolean;
};

export default User;
