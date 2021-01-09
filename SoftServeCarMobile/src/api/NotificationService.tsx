import { RNToasty } from 'react-native-toasty'

export default function notificate(message: string, type: string) {
    switch (type) {
        case 'warning': {
            RNToasty.Warn({
                title: message,
                position: "top",
                duration: 1
            }); break;
        }
        case 'error': {
            RNToasty.Error({
                title: message,
                position: "top",
                duration: 1
            }); break;
        }
    }
}