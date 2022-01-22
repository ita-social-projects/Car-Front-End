export class RideInvitation {
    email?: string = "";
    isCorrect?: boolean = false;

    constructor (model: Partial<RideInvitation>) {
        this.email = model.email;
        this.isCorrect = model.isCorrect;
    }
}
