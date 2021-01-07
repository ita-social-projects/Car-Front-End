import { NativeModules } from 'react-native';
import { RNToasty } from 'react-native-toasty'

const { } = NativeModules;
export default function SomeComponent(message: string, type: string) {
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