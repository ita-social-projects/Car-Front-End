interface ConfirmModalProps {
    visible: boolean,
    closeAfterConfirm?: boolean,
    title: string,
    subtitle?: string,
    confirmText: string,
    cancelText: string,
    onConfirm: () => void
}

export default ConfirmModalProps;
