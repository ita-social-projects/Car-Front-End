interface ConfirmModalProps {
    visible: boolean,
    dontCloseAfterConfirm?: boolean,
    title: string,
    subtitle?: string,
    confirmText: string,
    cancelText: string,
    onConfirm: () => void
}

export default ConfirmModalProps;
