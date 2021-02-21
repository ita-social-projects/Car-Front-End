import React, { useContext, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    View,
    RefreshControl,
    ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import "reflect-metadata";
import { container } from "tsyringe";
import CarService from "../../../../../api-service/car-service/CarService";
import CarViewModel from "../../../../../models/car/CarViewModel";
import AuthContext from "../../../../activity/auth/AuthContext";
import TouchableNavigationCard from "../../../../activity/my-profile/my-profile-activity/touchable-navigation-card/TouchableNavigationCard";
import CarsStyle from "./CarsStyle";

export default function Cars(props: any) {
    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState<Array<CarViewModel>>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const carService = container.resolve(CarService);

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
        carService
            .getAll(Number(user?.id))
            .then((res) => {
                setCars(res.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
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
            contentContainerStyle={loading && CarsStyle.loading}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View
                style={[CarsStyle.carContainer, loading && CarsStyle.loading]}
            >
                {loading ? (
                    <ActivityIndicator size={40} color="black" />
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
}
