import CarDropDownPickerItem from "./CarDropDownItem";

interface CarDropDownPickerProps {
    addCustomItem?: boolean,
    placeHolder?: string,
    items?: CarDropDownPickerItem[] | null,
    zIndex?: number,
    required?: boolean,
    disabled?: boolean,
    defaultItem?: CarDropDownPickerItem | null,
    selectHandle?: (item: CarDropDownPickerItem) => void,
    onOpen?: () => void,
    controller?: (instance: any) => void,
    style?: object
}

export default CarDropDownPickerProps;
