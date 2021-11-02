interface CarTextInputProps {
    rules?: any,
    onChangeText?: (text: string) => void,
    placeHolder?: string,
    defaultValue?: string,
    error?: Error,
    errorText?: string
    onBlur?: () => void
}

export default CarTextInputProps;
