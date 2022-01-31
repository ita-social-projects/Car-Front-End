import LocationDropDownItem from "./LocationDropDownItem";

interface LocationDropDownPickerProps {
    placeholder: string,
    items: (isThemeDark: boolean) => LocationDropDownItem[],
    defaultValue?: number | null,
    onChangeItem: (item: {label: string, value: number}) => void,
    isVisible: boolean,
    onOpen: () => void,
}
export default LocationDropDownPickerProps;