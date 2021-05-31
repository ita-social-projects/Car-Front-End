import ConfirmModalProps from "../../../../components/confirm-modal/ConfirmModalProps";

const commonField = {
    visible: true,
    confirmText: "OK",
    hideCancelButton: true,
    disableModal: () => console.log("Disable modal"),
    onConfirm: () => console.log("On confirm")
};

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