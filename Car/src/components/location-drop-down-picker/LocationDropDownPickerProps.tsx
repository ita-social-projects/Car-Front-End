import LocationDropDownItem from "./LocationDropDownItem";

interface LocationDropDownPickerProps {
    placeholder: string,
    items: LocationDropDownItem[],
    // eslint-disable-next-line unused-imports/no-unused-vars
    onChangeItem: (item: {label: string, value: number}) => void,
    isVisible: boolean,
    onOpen: () => void,
}
export default LocationDropDownPickerProps;