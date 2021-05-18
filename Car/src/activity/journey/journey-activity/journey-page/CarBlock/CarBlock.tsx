import JourneyPageStyle from "../JourneyPageStyle";
import { Image, Text, View } from "react-native";
import ImageService from "../../../../../../api-service/image-service/ImageService";
import Ionicons from "react-native-vector-icons/Ionicons";
import DM from "../../../../../components/styles/DM";
import React from "react";
import CarViewModel from "../../../../../../models/car/CarViewModel";

const CarBlock = ({ car }: {car: CarViewModel}) => {
    return (
        <View style={JourneyPageStyle.carContainer}>
            <View style={JourneyPageStyle.carAvatarContainer}>
                {car?.imageId ? (
                    <Image
                        source={{
                            uri: ImageService.getImageById(car?.imageId)
                        }}
                        style={JourneyPageStyle.carAvatar}
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
                <Text style={[JourneyPageStyle.carName, { color: DM("#000000") }]}>
                    {car?.model?.brand?.name} {car?.model?.name}
                </Text>
                <Text style={[JourneyPageStyle.carPlateNumber, { color: DM("#414045") }]}>
                    {car?.plateNumber}
                </Text>
            </View>
        </View>
    );
};

export default CarBlock;