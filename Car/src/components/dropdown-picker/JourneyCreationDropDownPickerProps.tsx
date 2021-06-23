interface JourneyCreationDropDownPickerProps {
    placeholder: string,
    items: {label: string, value: number}[],
    searchable: boolean,
    zIndex?: number,
    paddingLeft: number,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeItem: (item: {label: string, value: number}, index: number) => void,
    isVisible: boolean,
    onOpen: () => void,
    valueId: number | null
}

export default JourneyCreationDropDownPickerProps;