import React, { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import BadSearchResultStyle from "./BadSearchResultStyle";
import * as navigation from "../../../../../../components/navigation/Navigation";
import { useTheme } from "../../../../../../components/theme/ThemeProvider";
import AsyncStorage from "@react-native-community/async-storage";
import Filter from "../../../../../../../models/journey/Filter";
import Request from "../../../../../../../models/request/RequestModel";
import AuthContext from "../../../../../../components/auth/AuthContext";
import RequestService from "../../../../../../../api-service/request-service/RequestService";
import Indicator from "../../../../../../components/activity-indicator/Indicator";
import ConfirmModal from "../../../../../../components/confirm-modal/ConfirmModal";
import ShadowedBottomPopup from "../../../../../../components/shadowed-bottom-popup/ShadowedBottomPopup";
import { MIN_POPUP_HEIGHT } from "../../../../../../constants/StylesConstants";
import { REQUEST_RIDE_POPUP_HEIGHT } from "../../../../../../constants/JourneyConstants";
import JourneyPageStyle from "../../../journey-page/JourneyPageStyle";
import MenuButton from "../../../../../../components/menu-button/MenuButton";

const BadSearchResult = () => {
    const { colors } = useTheme();

    const { user } = useContext(AuthContext);
    const [successModalViewVisible, setSuccessModalViewVisible] = useState<boolean>(false);
    const [errorModalViewVisible, setErrorModalViewVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isNewRequestModalVisible, setNewRequestModalVisible] = useState(false);
    const onCreateRideRequest = async () => {
        AsyncStorage.getItem("searchFilter").then((result) => {
            let filter: Filter = JSON.parse(result || "{}");

            let request: Request = {
                from: {
                    latitude: filter.from.coordinates.latitude,
                    longitude: filter.from.coordinates.longitude
                },
                to: {
                    latitude: filter.to.coordinates.latitude,
                    longitude: filter.to.coordinates.longitude
                },
                fee: filter.fee,
                passengersCount: filter.quantity,
                userId: Number(user?.id),
                departureTime: filter.departureTime
            };

            setIsLoading(true);

            RequestService.addRequest(request)
                .then(() => {
                    setSuccessModalViewVisible(true);
                })
                .catch(() => {
                    setErrorModalViewVisible(true);
                });
        });
    };

    const errorDisableHandler = () => {
        setErrorModalViewVisible(false);
        setIsLoading(false);
        navigation.navigate("Journey");
    };
    const successDisableHandler = () => {
        setSuccessModalViewVisible(false);
        setIsLoading(false);
        navigation.navigate("Journey");
    };

    return (
        <>
            <View style={[BadSearchResultStyle.container, { backgroundColor: colors.white }]}>
                <View style={BadSearchResultStyle.textContainer}>
                    <Text style={[BadSearchResultStyle.text, { color: colors.primary }]}>
                    NO RESULTS MATCHING YOUR {"\n"} SEARCH FILTERS
                    </Text>
                </View>
                <View style={BadSearchResultStyle.imageContainer}>
                    <Image
                        style={BadSearchResultStyle.image}
                        source={require("../../../../../../../assets/images/journey/bad-seacrh-result.png")}
                    />
                </View>
            </View>
            {isLoading && (
                <View style={{ height: "100%" }}>
                    <Indicator
                        size="large"
                        color={colors.hover}
                        text="Creating request..."
                    />
                </View>
            )}
            <ConfirmModal
                visible={isNewRequestModalVisible}
                title="ARE YOU SURE?"
                subtitle="You're about to create a ride request with new filters."
                confirmText="Yes, create"
                cancelText="No, go back"
                onConfirm={() => {
                    setNewRequestModalVisible(false);
                    AsyncStorage.removeItem("searchFilter").then(() => {
                        navigation.goBack();
                        navigation.replace("Search Journey");
                    });
                }}
                disableModal={() => setNewRequestModalVisible(false)}
            />
            <ConfirmModal
                visible={errorModalViewVisible}
                title={"Error"}
                subtitle={"Unexpected error occured :("}
                confirmText={"OK"}
                hideCancelButton={true}
                onConfirm={() => {
                    errorDisableHandler();
                }}
                disableModal={() => {
                    errorDisableHandler();
                }}
            />
            <ConfirmModal
                visible={successModalViewVisible}
                title={"Ride Request"}
                subtitle={"Your Ride Request is created!"}
                confirmText={"OK"}
                hideCancelButton={true}
                onConfirm={() => {
                    successDisableHandler();
                }}
                disableModal={() => {
                    successDisableHandler();
                }}
            />
            <ShadowedBottomPopup
                snapPoints={[MIN_POPUP_HEIGHT, REQUEST_RIDE_POPUP_HEIGHT]}
                enabledInnerScrolling={false}
                initialSnap={0}
                renderHeader={
                    <View style={[JourneyPageStyle.headerTitleStyle,
                        { backgroundColor: colors.white }
                    ]}>
                        <Text style={[JourneyPageStyle.headerTextStyle, { color: colors.primary }]}>
                            REQUEST A RIDE
                        </Text>
                    </View>
                }
                renderContent={
                    <View style={[JourneyPageStyle.panel, { backgroundColor: colors.white }]}>
                        <MenuButton
                            text="With the previous filters"
                            isIcon={true}
                            onPress={() => {
                                if (ShadowedBottomPopup)
                                    ShadowedBottomPopup.pressHandle();
                                onCreateRideRequest();
                            }}
                        />
                        <MenuButton
                            text="With new filters"
                            isIcon={true}
                            onPress={() => {
                                if (ShadowedBottomPopup)
                                    ShadowedBottomPopup.pressHandle();
                                setNewRequestModalVisible(true);
                            }}
                        />
                    </View>
                }
            />
        </>
    );
};

export default BadSearchResult;
