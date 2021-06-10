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

// LocationService.getById(props.locationId).then((response) => {
//     const location = response.data;
//
//     console.log(location?.address?.latitude + "   " + location?.address?.longitude);
//     console.log("\n");
//     console.log(location);
//
// }).catch((e: any) => console.log(e));

// LocationService.update({
//     id: props.locationId,
//     name: "updated",
//     address: {
//         name: "updatedaddr",
//         latitude: 41.11111,
//         longitude: 45.4442,
//     },
//     typeId: 4
// })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));