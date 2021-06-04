import JourneyPageStyle from "../JourneyPageStyle";
import { Image, Text, View } from "react-native";
import ImageService from "../../../../../../api-service/image-service/ImageService";
import Ionicons from "react-native-vector-icons/Ionicons";
import DM from "../../../../../components/styles/DM";
import React from "react";
import CarViewModel from "../../../../../../models/car/CarViewModel";
import { CAR_IMAGE_BORDER_RADIUS, TAXI_IMAGE_BORDER_RADIUS } from "../../../../../constants/StylesConstants";

const CarBlock = ({ car, isOnOwnCar }: {car: CarViewModel, isOnOwnCar: boolean}) => {
    return (
        <View style={JourneyPageStyle.carContainer}>
            <View style={JourneyPageStyle.carAvatarContainer}>
                {car?.imageId || !isOnOwnCar ? (
                    <Image
                        source={car?.imageId ?
                            { uri: ImageService.getImageById(car.imageId) } :
                            require("../../../../../../assets/images/journey/taxi2.png")
                        }
                        style={[JourneyPageStyle.carAvatar,
                            { borderRadius: car?.imageId ? CAR_IMAGE_BORDER_RADIUS : TAXI_IMAGE_BORDER_RADIUS,
                                resizeMode: car?.imageId ? "cover" : "contain" }]}
                    />
                ) : (
                    <Ionicons
                        name={"car"}
                        size={20}
                        color="#414045"
                    />
                )}
            </View>
            <View style={JourneyPageStyle.carInfoContainer}>
                {
                    isOnOwnCar ? (
                        <>
                            <Text style={[JourneyPageStyle.carName, { color: DM("#000000") }]}>
                                {car?.model?.brand?.name} {car?.model?.name}
                            </Text>
                            <Text style={[JourneyPageStyle.carPlateNumber, { color: DM("#414045") }]}>
                                {car?.plateNumber}
                            </Text>
                        </>
                    ) : (
                        <Text style={JourneyPageStyle.taxiText}>Taxi</Text>
                    )
                }
            </View>
        </View>
    );
};

export default CarBlock;