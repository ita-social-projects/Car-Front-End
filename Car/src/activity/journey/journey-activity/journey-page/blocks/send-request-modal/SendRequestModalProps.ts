interface SendRequestModalProps {
    visible: boolean,
    disableNodal: () => void,
    comments: string,
    //
    onCommentsChange: (text: string) => void,
    withLuggage: boolean,
    //
    onWithLuggageChange: (value: boolean) => void,
    passangersCount: number,
    //
    onPassangersCountChange: (value: number) => void,
    onConfirmPress: () => void,
}

export default SendRequestModalProps;