import { Image, Text, View } from "react-native";
import React from "react";
import ImageService from "../../../../../../../api-service/image-service/ImageService";
import CarColor from "../../../../../../../models/car/CarColor";
import CarViewModel from "../../../../../../../models/car/CarViewModel";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import { CAR_IMAGE_BORDER_RADIUS, TAXI_IMAGE_BORDER_RADIUS } from "../../../../../../constants/StylesConstants";
import JourneyPageStyle from "../../JourneyPageStyle";

const CarBlock = ({ car, isOnOwnCar }: {car: CarViewModel, isOnOwnCar: boolean}) => {
    const { colors } = useTheme();
    const isThemeDark = useTheme().isThemeDark;
    const image = car?.imageId ?
        { uri: ImageService.getImageById(car.imageId) } :
        isThemeDark ?
            require("../../../../../../../assets/images/icons/grayTaxi.png"):
            require("../../../../../../../assets/images/icons/darkTaxi.png");

    return (
        <View style={JourneyPageStyle.carContainer}>
            <View style={JourneyPageStyle.carAvatarContainer}>
                {car?.imageId || !isOnOwnCar ? (
                    <Image
                        source={image}
                        style={[JourneyPageStyle.carAvatar,
                            { borderRadius: car?.imageId ? CAR_IMAGE_BORDER_RADIUS : TAXI_IMAGE_BORDER_RADIUS,
                                resizeMode: car?.imageId ? "cover" : "contain" }]}
                    />
                ) : (

                    <Image
                        style={[JourneyPageStyle.carAvatar, { width: 30, height: 30 },
                            { borderRadius:TAXI_IMAGE_BORDER_RADIUS,
                                resizeMode: "contain" }]}
                        source = {
                            isThemeDark ?
                                require("../../../../../../../assets/images/icons/grayCar.png")
                                :require("../../../../../../../assets/images/icons/darkCar.png")
                        }
                    />
                )}
            </View>
            <View style={JourneyPageStyle.carInfoContainer}>
                {
                    isOnOwnCar ? (
                        <>
                            <Text style={[JourneyPageStyle.carName, { color: colors.primary }]}>
                                {car?.brand} {car?.model}, {CarColor[car?.color!]}
                            </Text>
                            <Text style={[JourneyPageStyle.carPlateNumber, { color: colors.hover }]}>
                                {car?.plateNumber}
                            </Text>
                        </>
                    ) : (
                        <Text style={[JourneyPageStyle.taxiText, { color: colors.primary }]}>Taxi</Text>
                    )
                }
            </View>
        </View>
    );
};

export default CarBlock;