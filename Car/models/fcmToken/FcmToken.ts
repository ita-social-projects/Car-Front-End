import { ZERO } from "../../src/constants/GeneralConstants";

export class FcmToken {
    id: number;
    token?: string;
    userId: number;

    constructor (fcmToken: Partial<FcmToken>) {
        this.id = fcmToken.id || ZERO;
        this.token = fcmToken.token;
        this.userId = fcmToken.userId || ZERO;
    }
}
