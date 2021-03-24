interface NewNotificationProps {
    read?: boolean,
    user?: {
        name: string,
        surname: string,
        position: string,
        imageId?: string
    },
    notificationTitle?: string,
    date?: Date
}

export default NewNotificationProps;
