import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import TouchableNavigationCard from '../../activity/MyProfile/TouchableNavigationCard';
import "reflect-metadata";
import { container } from 'tsyringe';
import { AuthContext } from '../auth/AuthProvider';
import carsStyle from './CarsStyle'
import CarService from '../../services/APIService/CarService/CarService';
import { ScrollView } from 'react-native-gesture-handler';
import CarInfoDTO from '../../models/CarInfoDTO';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Cars(props: any) {

    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState<Array<CarInfoDTO>>([]);
    const [loading, setLoading] = useState(true);

    const carService = container.resolve(CarService);

    let addCarElement = (
        <>
            <TouchableNavigationCard navigation={props.navigation}
                navigationName="AddCars"
                cardName="Add a car"
                picture={<Ionicons name={'add-circle-outline'} size={20} color={'#414045'} />}
                angle="0">
                <Text style={{ fontWeight: 'bold', color: '#02A2CF' }}>
                    Add a car
                </Text>
            </TouchableNavigationCard>
            { cars.length ? <></> :
                <Text style={carsStyle.message}>
                    Currently you don’t have any car in the list.
                    You have to add a car if you want to create Journeys with personal one.
                </Text>
            }
        </>
    );

    useEffect(() => {
        carService.getAll(Number(user?.id))
            .then(res => { setCars(res.data); setLoading(false); })
            .catch(e => console.log(e));
    }, []);

    return (
        <ScrollView contentContainerStyle={[carsStyle.container, loading && carsStyle.loading]}>
            <View style={carsStyle.carContainer}>
                {loading ? <ActivityIndicator size={40} color="black" /> :
                    cars.length ?
                        <>
                            {cars.map(item => {
                                return (
                                    <View key={item.id}>
                                        <TouchableNavigationCard navigation={props.navigation}
                                            navigationName="EditCars"
                                            cardName="Add a car"
                                            picture={item.byteOfImage ?
                                                <Image source={{ uri: 'data:image/png;base64,' + item.byteOfImage }}
                                                    style={[carsStyle.carAvatar]} /> :
                                                <Ionicons name={'car'} size={20} color="#414045" />}>
                                            <Text style={carsStyle.brand}>
                                                {item.brandName}
                                            </Text>
                                            <Text style={carsStyle.model}>
                                                {item.modelName}
                                            </Text>
                                        </TouchableNavigationCard>
                                    </View>
                                )
                            })}
                            {addCarElement}
                        </> : { addCarElement }}
            </View>
        </ScrollView>
    )
}