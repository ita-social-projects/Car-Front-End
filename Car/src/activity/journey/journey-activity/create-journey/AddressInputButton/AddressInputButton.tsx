import TouchableMapBar from "../../../../../components/touchable-map-bar/TouchableMapBar";
import React from "react";

interface AddressInputButtonProps {
    directionType: string,
    text: string,
    iconName: string,
    onPress: () => void,
    onIconPress?: () => void
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
            marginHorizontal={0}
            onIconPress={props.onIconPress}
        />
    );
};

export default AddressInputButton;