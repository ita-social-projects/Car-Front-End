interface JourneyCreationDropDownPickerProps {
    placeholder: string,
    items: {label: string, value: number}[],
    searchable: boolean,
    zIndex?: number,
    paddingLeft: number,
    //
    onChangeItem: (item: {label: string, value: number}, index: number) => void,
    isVisible: boolean,
    onOpen: () => void,
    valueId: number | null
}

export default JourneyCreationDropDownPickerProps;