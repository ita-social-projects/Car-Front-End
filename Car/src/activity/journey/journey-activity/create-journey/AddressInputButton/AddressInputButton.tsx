import TouchableMapBar from "../../../../../components/touchable-map-bar/TouchableMapBar";
import React from "react";
import { ZERO_MARGIN } from "../../../../../constants/Constants";

interface AddressInputButtonProps {
    directionType: string,
    text: string,
    iconName: string,
    onPress?: () => void,
    onIconPress?: () => void,
    disabled?: boolean,
    marginHorizontal?: number
}

const AddressInputButton = (props: AddressInputButtonProps) => {
    return (
        <TouchableMapBar
            onPress={props.onPress}
            directionType={props.directionType}
            iconName={props.iconName}
            defaultInputValue={props.text}
            marginBottom="5"
            marginTop="0"
            flex="6"
            marginHorizontal={props.marginHorizontal ?? ZERO_MARGIN}
            onIconPress={props.onIconPress}
            disabled={props.disabled}
        />
    );
};

export default AddressInputButton;