interface CarTextInputProps {
    rules?: any,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeText?: (text: string) => void,
    placeHolder?: string,
    defaultValue?: string,
    error?: Error,
    errorText?: string
    onEndEditing?: () => void
}

export default CarTextInputProps;
