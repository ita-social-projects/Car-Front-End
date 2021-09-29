interface SendRequestModalProps {
    visible: boolean,
    disableNodal: () => void,
    comments: string,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onCommentsChange: (text: string) => void,
    withLuggage: boolean,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onWithLuggageChange: (value: boolean) => void,
    passangersCount: number,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onPassangersCountChange: (value: number) => void,
    onConfirmPress: () => void,
}

export default SendRequestModalProps;