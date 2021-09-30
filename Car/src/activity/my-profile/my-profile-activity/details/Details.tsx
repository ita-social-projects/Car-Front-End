import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import UserService from "../../../../../api-service/user-service/UserService";
import Indicator from "../../../../components/activity-indicator/Indicator";
import AuthContext from "../../../../components/auth/AuthContext";
import { useTheme } from "../../../../components/theme/ThemeProvider";
import DetailsStyle from "./DetailsStyle";

const Details = () => {
    const { DM } = useTheme();
    const [user, setUser] = useState(useContext(AuthContext).user);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        UserService.getUser(Number(user?.id))
            .then((res) => setUser(res.data))
            .then(() => setLoading(false));
    });

    return (
        <View style={[DetailsStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
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
                            <Text style={[DetailsStyle.detailNameText, { color: DM("#000000") }]}>
                                Position
                            </Text>
                        </View>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={[DetailsStyle.detailValueGrayText, { color: DM("#414045") }]}>
                                {user?.position}
                            </Text>
                        </View>
                    </View>
                    <View style={DetailsStyle.detailsContainer}>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={[DetailsStyle.detailNameText, { color: DM("#000000") }]}>
                                Location
                            </Text>
                        </View>
                        <View style={DetailsStyle.detailContainer}>
                            <Text style={[DetailsStyle.detailValueBlueText, { color: DM("#02A2CF") }]}>
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
