import ConfirmModalProps from "../confirm-modal/ConfirmModalProps";
import { commonField } from "../../constants/ModalConstants";

export const rideCancelingErrorModal: ConfirmModalProps = {
    ...commonField,
    title: "Ride canceling",
    subtitle: "Ride canceling is failed",
};

export const requestSuccessfullySentModal: ConfirmModalProps = {
    ...commonField,
    title: "Request sending",
    subtitle: "Your request was successfully sent to the driver",
};

export const requestSendingFailedModal: ConfirmModalProps = {
    ...commonField,
    title: "Error",
    subtitle: "Request sending is failed",
};