import CarDropDownPickerItem from "./CarDropDownItem";

interface CarDropDownPickerProps {
    placeHolder?: string,
    items?: CarDropDownPickerItem[] | null,
    zIndex?: number,
    required?: boolean,
    disabled?: boolean,
    defaultValue?: string | null,
    // eslint-disable-next-line unused-imports/no-unused-vars
    selectHandle?: (item: CarDropDownPickerItem) => void,
    onOpen?: () => void,
    // eslint-disable-next-line unused-imports/no-unused-vars
    controller?: (instance: any) => void,
    style?: object
}

export default CarDropDownPickerProps;
