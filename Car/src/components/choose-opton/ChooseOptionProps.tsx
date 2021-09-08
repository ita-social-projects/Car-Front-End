import { ReactNode } from "react";

interface ChooseOptionProps {
    text: string,
    value: boolean,
    // eslint-disable-next-line unused-imports/no-unused-vars
    onValueChanged: (value: boolean) => void,
    picture?: ReactNode,
}

export default ChooseOptionProps;
