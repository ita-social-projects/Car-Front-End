import CarDropDownPickerItem from "./CarDropDownItem";

interface CarDropDownPickerProps {
    addCustomItem?: boolean,
    placeHolder?: string,
    items?: CarDropDownPickerItem[] | null,
    zIndex?: number,
    required?: boolean,
    disabled?: boolean,
    defaultItem?: CarDropDownPickerItem | null,
    // eslint-disable-next-line unused-imports/no-unused-vars
    selectHandle?: (item: CarDropDownPickerItem) => void,
    onOpen?: () => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    controller?: (instance: any) => void,
    style?: object
}

export default CarDropDownPickerProps;
