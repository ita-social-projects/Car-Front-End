import { Text, View } from "react-native";
import React from "react";
import EditLocationProps from "./EditLocationProps";

const EditLocation = (props: EditLocationProps) => {
    console.log(props.locationId);

    return(
        <View>
            <Text style={{ textAlign:"center" }}>
                Editing location is in progress
            </Text>
        </View>
    );
};

export default EditLocation;