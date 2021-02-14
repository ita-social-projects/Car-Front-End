import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../../auth/AuthProvider";
import DetailsStyle from "./DetailsStyle";

const Details = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={DetailsStyle.container}>
            <View style={DetailsStyle.detailsContainer}>
                <View style={DetailsStyle.detailContainer}>
                    <Text style={DetailsStyle.detailNameText}>Position</Text>
                </View>
                <View style={DetailsStyle.detailContainer}>
                    <Text style={DetailsStyle.detailValueGrayText}>
                        {user?.position}
                    </Text>
                </View>
            </View>

            <View style={DetailsStyle.detailsContainer}>
                <View style={DetailsStyle.detailContainer}>
                    <Text style={DetailsStyle.detailNameText}>Location</Text>
                </View>
                <View style={DetailsStyle.detailContainer}>
                    <Text style={DetailsStyle.detailValueBlueText}>
                        {user?.location}
                    </Text>
                </View>
            </View>

            <View style={DetailsStyle.detailsContainer}>
                <View style={DetailsStyle.detailContainer}>
                    <Text style={DetailsStyle.detailNameText}>Workspace</Text>
                </View>
                <View style={DetailsStyle.detailContainer}>
                    <Text style={DetailsStyle.detailValueBlueText}>
                        {user?.location}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Details;
