interface LocationDropDownPickerProps {
    placeholder: string,
    items: {label: string, value: number, icon: () => JSX.Element}[],
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeItem: (item: {label: string, value: number}) => void,
    isVisible: boolean,
    onOpen: () => void,
}
export default LocationDropDownPickerProps;