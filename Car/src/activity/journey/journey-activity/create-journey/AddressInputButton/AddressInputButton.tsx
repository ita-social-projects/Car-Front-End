import TouchableMapBar from "../../../../../components/touchable-map-bar/TouchableMapBar";
import React from "react";
import { ZERO_MARGIN } from "../../../../../constants/StylesConstants";
import AddressInputButtonProps from "./AddressInputButtonProps";

const AddressInputButton = (props: AddressInputButtonProps) => {
    return (
        <TouchableMapBar
            onPress={props.onPress}
            directionType={props.directionType}
            iconName={props.iconName}
            defaultInputValue={props.text}
            marginBottom={props.marginBottom?.toString() ?? "5"}
            marginTop="0"
            flex="6"
            marginHorizontal={props.marginHorizontal ?? ZERO_MARGIN}
            onIconPress={props.onIconPress}
            disabled={props.disabled}
        />
    );
};

export default AddressInputButton;