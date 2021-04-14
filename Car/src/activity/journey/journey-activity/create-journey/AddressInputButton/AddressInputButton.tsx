import TouchableMapBar from "../../../../../components/touchable-map-bar/TouchableMapBar";
import React from "react";

interface AddressInputButtonProps {
    directionType: string,
    text: string,
    onPress: () => void
}

const AddressInputButton = (props: AddressInputButtonProps) => {
    return (
        <TouchableMapBar
            onPress={props.onPress}
            directionType={props.directionType}
            iconName="location"
            defaultInputValue={props.text}
            marginBottom="5"
            marginTop="0"
            flex="6"
            marginHorizontal={0}
        />
    );
};

export default AddressInputButton;