import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import JourneyService from "../../../../../api-service/journey-service/JourneyService";
import Stop from "../../../../../models/stop/Stop";
import User from "../../../../../models/user/User";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import JourneyPageStyle from "./JourneyPageStyle";
import Journey from "../../../../../models/Journey";
import { LinearTextGradient } from "react-native-text-gradient";
import { Divider } from "react-native-elements";
import Moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import AvatarLogo from "../../../../components/avatar-logo/AvatarLogo";
import Indicator from "../../../../components/activity-indicator/Indicator";
import StopType from "../../../../../models/stop/StopType";
import { ScrollView } from "react-native-gesture-handler";
import * as navigation from "../../../../components/navigation/Navigation";
import CarService from "../../../../../api-service/car-service/CarService";
import CarViewModel from "../../../../../models/car/CarViewModel";
import { getStatusBarHeight } from "react-native-status-bar-height";

const JourneyPage = ({ props }: any) => {
    const [currentJourney, setJourney] = useState<Journey>(null);
    const { journeyId } = props.route.params;
    const { isDriver } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [car, setCar] = useState<CarViewModel>(null);

    useEffect(() => {
        !isDriver && props.navigation.setOptions({ headerRight: () => <View /> });
        JourneyService.getJourney(journeyId).then((res) => {
            setJourney(res.data);
            CarService.getById(res.data?.car?.id!).then((carRes) => setCar(carRes.data));
            setLoading(false);
        });
    }, [1]);

    const Separator = () => <Divider style={JourneyPageStyle.separator} />;

    const Organizer = () => (
        <>
            <TouchableOpacity
                style={JourneyPageStyle.userBlock}
                onPress={() =>
                    navigation.navigate("Applicant Page", {
                        userId: currentJourney?.organizer?.id
                    })
                }
            >
                <View style={JourneyPageStyle.userImageBlock}>
                    <AvatarLogo user={currentJourney?.organizer} size={38.5} />
                </View>
                <View style={JourneyPageStyle.userInfoBlock}>
                    <Text style={JourneyPageStyle.userNameText}>
                        {currentJourney?.organizer?.name}{" "}
                        {currentJourney?.organizer?.surname}'s journey
                    </Text>
                    <View style={JourneyPageStyle.userSecondaryInfoBlock}>
                        <Text style={JourneyPageStyle.userRoleText}>
                            {currentJourney?.organizer?.position}
                        </Text>
                        <Text style={JourneyPageStyle.dateText}>
                            {Moment(currentJourney?.departureTime).calendar()}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={JourneyPageStyle.driverBlockWhiteSpace} />
        </>
    );

    const Car = () => (
        <View style={JourneyPageStyle.carContainer}>
            <View style={JourneyPageStyle.carAvatarContainer}>
                {car?.imageId ? (
                    <Image
                        source={{
                            uri: car?.imageId
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
                <Text style={JourneyPageStyle.carName}>
                    {car?.model?.brand?.name} {car?.model?.name}
                </Text>
                <Text style={JourneyPageStyle.carPlateNumber}>
                    {car?.plateNumber}
                </Text>
            </View>
        </View>
    );

    const Applicant = (item: User) => (
        <>
            <TouchableOpacity
                style={JourneyPageStyle.applicant}
                onPress={() =>
                    navigation.navigate("Applicant Page", {
                        userId: item?.id
                    })
                }
            >
                <View style={JourneyPageStyle.userImageBlock}>
                    <AvatarLogo user={item} size={38.5} />
                </View>
                <View style={JourneyPageStyle.userInfoBlock}>
                    <LinearTextGradient
                        locations={[0, 1]}
                        colors={["#00A3CF", "#5552A0"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={JourneyPageStyle.applicantNameText}>
                            {item?.name} {item?.surname}
                        </Text>
                    </LinearTextGradient>
                    <View style={JourneyPageStyle.userSecondaryInfoBlock}>
                        <Text style={JourneyPageStyle.userRoleText}>
                            {item?.position}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Separator />
        </>
    );

    const StopListItem = (item: Stop) => (
        <View style={JourneyPageStyle.stopListItem}>
            <View style={JourneyPageStyle.stopListItemRow}>
                <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
                {item?.type !== StopType.Finish && (
                    <View style={JourneyPageStyle.stopCustomLineIcon} />
                )}
            </View>
            <Text>
                {item?.address?.city} {item?.address?.street} street
            </Text>
        </View>
    );

    const StopsBlock = () => (
        <View style={JourneyPageStyle.stopsBlock}>
            {currentJourney?.stops.map((item) => StopListItem(item))}
        </View>
    );

    const ApplicantsBlock = () => (
        <>
            <Text style={JourneyPageStyle.applicantsHeader}>
                    SOFTSERVIANS {currentJourney?.participants?.length}/
                {currentJourney?.countOfSeats}
            </Text>
            {currentJourney?.participants.map((item, index) => (
                <View key={index}>
                    {Applicant(item)}
                </View>
            ))}
        </>
    );

    const ButtonsBlock = () => (
        <View style={JourneyPageStyle.buttonsBlock}>
            <TouchableOpacity
                style={JourneyPageStyle.messageAllButton}
                onPress={() =>
                    navigation.navigate("Chat", {
                        chatId: currentJourney?.id,
                        header:
                                currentJourney?.organizer?.name +
                                " " +
                                currentJourney?.organizer?.surname +
                                "'s journey"
                    })
                }
            >
                <Text style={JourneyPageStyle.messageAllButtonText}>
                        MESSAGE ALL
                </Text>
            </TouchableOpacity>
            {isDriver && (<TouchableOpacity style={JourneyPageStyle.startJourneyButton}>
                <Text style={JourneyPageStyle.startJourneyButtonText}>
                        START THE JOURNEY
                </Text>
            </TouchableOpacity>)}
        </View>
    );

    const journeyContent = () => (
        <View style={JourneyPageStyle.mainContainer}>
            {isLoading ? (
                <View style={JourneyPageStyle.loadingContainer}>
                    <Indicator
                        size="large"
                        color="#414045"
                        text="Loading information..."
                    />
                </View>
            ) : (
                <View style={JourneyPageStyle.contentView}>
                    <Organizer />
                    <Separator />

                    <ScrollView
                        onStartShouldSetResponder={() => true}
                        style={JourneyPageStyle.scrollBlock}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >

                        <Car />
                        <ApplicantsBlock />
                        <StopsBlock />

                    </ScrollView>
                    <Separator />
                    <ButtonsBlock />
                </View>
            )}
        </View>
    );

    return (
        <View style={JourneyPageStyle.pageContainer}>
            <Text style={JourneyPageStyle.pageText}>
                    Map implementation is in progress
            </Text>
            <BottomPopup
                style={JourneyPageStyle.bottomPopup}
                snapPoints={[
                    699 + getStatusBarHeight() - 28,
                    290 + getStatusBarHeight() - 28,
                ]}
                renderContent={journeyContent}
                initialSnap={0}
                renderHeader={() => <></>}
                enabledInnerScrolling={false}
            />
        </View>
    );
};

export default JourneyPage;
