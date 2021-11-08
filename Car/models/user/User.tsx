type User = null | {
    id: number;
    name: string;
    surname: string;
    position: string;
    location: string;
    email: string;
    fcmtoken: string | null;
    hireDate: Date;
    imageId: string | null;
    journeyCount: number;
    phoneNumber: number | null;
};

export default User;
