interface LocationDropDownPickerProps {
    placeholder: string,
    items: {label: string, value: number, icon: () => JSX.Element}[],
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeItem: (item: {label: string, value: number}, index: number) => void,
    isVisible: boolean,
    onOpen: () => void,
    valueId: number,
}
export default LocationDropDownPickerProps;