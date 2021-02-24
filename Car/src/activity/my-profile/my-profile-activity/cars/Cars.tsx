import React, { useContext, useEffect, useState } from "react";
import {
    Image,
    Text,
    View,
    RefreshControl,
    ScrollView,
    Alert
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CarService from "../../../../../api-service/car-service/CarService";
import CarViewModel from "../../../../../models/car/CarViewModel";
import AuthContext from "../../../../components/auth/AuthContext";
import TouchableNavigationCard from "../../../../activity/my-profile/my-profile-activity/touchable-navigation-card/TouchableNavigationCard";
import Indicator from "../../../../components/activity-indicator/Indicator";
import CarsStyle from "./CarsStyle";

const Cars = (props: any) => {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState<Array<CarViewModel>>([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout: number) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => {
            loadCars();
            setRefreshing(false);
        });
    }, []);

    function loadCars() {
        CarService.getAll(Number(user?.id))
            .then((res) => {
                setCars(res.data);
                setLoading(false);
            })
            .catch((e) => Alert.alert("Error", e.message));
    }

    useEffect(() => {
        return props.navigation.addListener("focus", loadCars);
    }, [props.navigation]);

    let addCarElement = (
        <View>
            <TouchableNavigationCard
                navigation={props.navigation}
                navigationName="AddCars"
                cardName="Add a car"
                picture={
                    <Ionicons
                        name={"add-circle-outline"}
                        size={20}
                        color={"#414045"}
                    />
                }
                angle="0"
            >
                <Text style={{ fontWeight: "bold", color: "#02A2CF" }}>
                    Add a car
                </Text>
            </TouchableNavigationCard>
            {cars?.length ? (
                <></>
            ) : (
                <Text style={CarsStyle.message}>
                    Currently you don’t have any car in the list. You have to
                    add a car if you want to create Journeys with personal one.
                </Text>
            )}
        </View>
    );

    return (
        <ScrollView
            style={CarsStyle.container}
            contentContainerStyle={isLoading && CarsStyle.loading}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View
                style={[CarsStyle.carContainer, isLoading && CarsStyle.loading]}
            >
                {isLoading ? (
                    <Indicator
                        size="large"
                        color="#414045"
                        text="Loading information..."
                    />
                ) : cars.length ? (
                    <>
                        {cars.map((item) => {
                            return (
                                <View key={item!.id}>
                                    <TouchableNavigationCard
                                        carId={item!.id}
                                        navigationName="EditCars"
                                        cardName="Edit a car"
                                        picture={
                                            item!.imageId ? (
                                                <Image
                                                    source={{
                                                        uri:
                                                            "data:image/png;base64," +
                                                            item!.imageId
                                                    }}
                                                    style={[
                                                        CarsStyle.carAvatar
                                                    ]}
                                                />
                                            ) : (
                                                <Ionicons
                                                    name={"car"}
                                                    size={20}
                                                    color="#414045"
                                                />
                                            )
                                        }
                                    >
                                        <Text style={CarsStyle.brand}>
                                            {item!.model?.brand?.name}
                                        </Text>
                                        <Text style={CarsStyle.model}>
                                            {item!.model?.name}
                                        </Text>
                                    </TouchableNavigationCard>
                                </View>
                            );
                        })}
                        {addCarElement}
                    </>
                ) : (
                    addCarElement
                )}
            </View>
        </ScrollView>
    );
};

export default Cars;
