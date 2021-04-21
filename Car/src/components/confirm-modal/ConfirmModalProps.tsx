interface ConfirmModalProps {
    visible: boolean,
    title: string,
    subtitle?: string,
    confirmText: string,
    cancelText: string,
    onConfirm: () => void
    disableModal: () => void
}

export default ConfirmModalProps;
