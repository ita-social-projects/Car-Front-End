interface PhoneNumberInputProps {
    number: string,
    onChangeText: (text: string) => void,
    onClearPress: () => void,
    onBlur?: () => void,
    onFocus?: () => void,
    isVisible: boolean,
}

export default PhoneNumberInputProps;