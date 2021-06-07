import SaveLocationButtonProps from "./SaveLocationButtonProps";
import AddLocationStyle from "../../activity/my-profile/my-profile-activity/address-book/address-book-activity/add-locations/AddLocationStyle";
import { Text, TouchableOpacity } from "react-native";
import DM from "../styles/DM";
import React from "react";

const SaveLocationButton = (props: SaveLocationButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                AddLocationStyle.saveButton,
                {
                    backgroundColor: props.wayPointConfirmation
                        ? "black"
                        : "darkgrey",
                },
            ]}
            disabled={!props.wayPointConfirmation}
            onPress={props.onPress}
        >
            <Text
                style={[
                    AddLocationStyle.saveButtonSaveText,
                    { color: DM(DM("white")) },
                ]}
            >
                Save
            </Text>
        </TouchableOpacity>
    );
};

export default SaveLocationButton;
