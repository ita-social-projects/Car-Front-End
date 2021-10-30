import { ReactNode } from "react";

interface ChooseOptionProps {
    text: string,
    value: boolean,
    //
    onValueChanged: (value: boolean) => void,
    picture?: ReactNode,
}

export default ChooseOptionProps;
