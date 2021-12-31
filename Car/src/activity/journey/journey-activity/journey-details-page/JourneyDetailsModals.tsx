import ConfirmModalProps from "../../../../components/confirm-modal/ConfirmModalProps";
import { commonField } from "../../../../constants/ModalConstants";

export const freeRideModal: ConfirmModalProps = {
    ...commonField,
    title: "Free ride!",
    subtitle: "Participants will be informed that your ride is totally free!",
};

export const paidRideModal: ConfirmModalProps = {
    ...commonField,
    title: "Paid ride!",
    subtitle: "Participants will be informed that they'll need to partially pay for a fuel.",
};

export const publishErrorModal: ConfirmModalProps = {
    ...commonField,
    title: "Error",
    subtitle: "Ride publishing is failed",
};

export const departureTimeSorryModal: ConfirmModalProps = {
    ...commonField,
    title: "SORRY",
    subtitle: "You have already made a trip within \nthis time!",
    confirmText: "Try again",
};

export const invitationsErrorModal: ConfirmModalProps = {
    ...commonField,
    title: "Error",
    subtitle: "You can`t invite more passengers, than you have available seats",
};

export const updateErrorModal: ConfirmModalProps = {
    ...commonField,
    title: "Error",
    subtitle: "Ride update is failed",
};

export const invalidJourneyTimeModal: ConfirmModalProps = {
    ...commonField,
    title: "Time error",
    subtitle: "Sorry but you can't create a ride. You have a journey soon!",
};