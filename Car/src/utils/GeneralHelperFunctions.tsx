import {
    FIRST_ELEMENT_INDEX, THREE_DOTS_LENGTH
} from "../constants/GeneralConstants";

export const trimTheStringIfTooLong = (str: string, maxLength: number) => {
    return str.length <= maxLength ?
        str :
        str.substr(FIRST_ELEMENT_INDEX, maxLength - THREE_DOTS_LENGTH) + "...";
};