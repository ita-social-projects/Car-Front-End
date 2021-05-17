interface ConfirmModalProps {
    visible: boolean,
    title: string,
    subtitle?: string,
    confirmText: string,
    hideCancelButton?: boolean
    cancelText?: string,
    confirmColor?: string,
    onConfirm: () => void
    disableModal: () => void
}

export default ConfirmModalProps;
