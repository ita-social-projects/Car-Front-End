import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import UserService from "../../../../../api-service/user-service/UserService";
import Indicator from "../../../../components/activity-indicator/Indicator";
import AuthContext from "../../../../components/auth/AuthContext";
import DetailsStyle from "./DetailsStyle";

const Details = () => {
    const [user, setUser] = useState(useContext(AuthContext).user);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        UserService.getUser(Number(user?.id))
            .then((res) => setUser(res.data))
            .then(() => setLoading(false))
            .catch((e) => Alert.alert("Error", e.message));
    });

    return (
        <View style={DetailsStyle.container}>
            {isLoading ? (
                <Indicator
                    size="large"
                    color="#414045"
                    text="Loading information..."
                />
            ) : (
                <>
                    <View style={DetailsStyle.detailsContainer}>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={DetailsStyle.detailNameText}>
                                Position
                            </Text>
                        </View>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={DetailsStyle.detailValueGrayText}>
                                {user?.position}
                            </Text>
                        </View>
                    </View>
                    <View style={DetailsStyle.detailsContainer}>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={DetailsStyle.detailNameText}>
                                Location
                            </Text>
                        </View>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={DetailsStyle.detailValueBlueText}>
                                {user?.location}
                            </Text>
                        </View>
                    </View>
                    <View style={DetailsStyle.detailsContainer}>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={DetailsStyle.detailNameText}>
                                Workspace
                            </Text>
                        </View>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={DetailsStyle.detailValueBlueText}>
                                {user?.location}
                            </Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

export default Details;
