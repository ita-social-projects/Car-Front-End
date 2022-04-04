import {
    FIRST_ELEMENT_INDEX, SECOND_ELEMENT_INDEX, THREE_DOTS_LENGTH
} from "../constants/GeneralConstants";

export const trimTheStringIfTooLong = (str: string, maxLength: number) => {
    return str.length <= maxLength ?
        str :
        str.substring(FIRST_ELEMENT_INDEX, maxLength - THREE_DOTS_LENGTH + FIRST_ELEMENT_INDEX) + "...";
};

export const capitalize = (str: string): string => {
    return str.charAt(FIRST_ELEMENT_INDEX).toUpperCase() + str.slice(SECOND_ELEMENT_INDEX);
};