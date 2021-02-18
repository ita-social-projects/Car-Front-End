import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import { container } from "tsyringe";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import { Stop } from "../../../../../../models/Stop";
import { StopType } from "../../../../../../models/StopType";
import { User } from "../../../../../../models/User";
import BottomPopup from "../../../../../components/bottom-popup/BottomPopup";
import JourneyPageStyle from "./JourneyPageStyle";
import { Journey } from "../../../../../../models/Journey";
import { useNavigation } from "@react-navigation/native";
import { LinearTextGradient } from "react-native-text-gradient";
import { Divider } from "react-native-elements";
import Moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import Indicator from "../../../../../components/activity-indicator/Indicator";

const JourneyPage = ({ props }: any) => {
    const journeyService = container.resolve(JourneyService);
    const [currentJourney, setJourney] = useState({} as Journey);
    const navigation = useNavigation();
    const { journeyId } = props.route.params;
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        journeyService
            .getJourney(journeyId)
            .then((res) => setJourney(res.data))
            .catch((e) => console.log(e));
        setLoading(false);
    }, []);

    const Separator = () => {
        return <Divider style={JourneyPageStyle.separator} />;
    };

    const Organizer = () => {
        return (
            <View style={JourneyPageStyle.userBlock}>
                <View style={JourneyPageStyle.userImageBlock}>
                    <Image
                        style={JourneyPageStyle.userImage}
                        source={require("../../../../../../assets/images/default-user-photo.jpg")}
                    />
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
            </View>
        );
    };

    const Applicant = (item: User) => {
        return (
            <>
                <TouchableOpacity
                    style={JourneyPageStyle.userBlock}
                    onPress={() =>
                        navigation.navigate("Applicant Page", {
                            userId: item?.id
                        })
                    }
                >
                    <View style={JourneyPageStyle.userImageBlock}>
                        <Image
                            style={JourneyPageStyle.userImage}
                            source={require("../../../../../../assets/images/default-user-photo.jpg")}
                        />
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
    };

    const StopListItem = (item: Stop) => {
        return (
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
    };

    const StopsBlock = () => {
        return (
            <View style={JourneyPageStyle.stopsBlock}>
                <FlatList
                    data={currentJourney?.stops}
                    renderItem={({ item }) => StopListItem(item)}
                    keyExtractor={(item) => item!.id.toString()}
                />
            </View>
        );
    };

    const ApplicantsBlock = () => {
        return (
            <View style={JourneyPageStyle.applicantsBlock}>
                <Text style={JourneyPageStyle.applicantsHeader}>
                    SOFTSERVIANS {currentJourney?.participants?.length}/
                    {currentJourney?.countOfSeats}
                </Text>
                <FlatList
                    data={currentJourney?.participants}
                    renderItem={({ item }) => Applicant(item)}
                    keyExtractor={(item) => item!.id.toString()}
                />
            </View>
        );
    };

    const ButtonsBlock = () => {
        return (
            <View style={JourneyPageStyle.buttonsBlock}>
                <TouchableOpacity style={JourneyPageStyle.messageAllButton}>
                    <Text style={JourneyPageStyle.messageAllButtonText}>
                        MESSAGE ALL
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={JourneyPageStyle.startJourneyButton}>
                    <Text style={JourneyPageStyle.startJourneyButtonText}>
                        START THE JOURNEY
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const journeyInfoContent = () => {
        return (
            <View style={JourneyPageStyle.mainContainer}>
                {isLoading ? (
                    <Indicator
                        size="large"
                        color="#414045"
                        text="Loading information..."
                    />
                ) : (
                    <View style={JourneyPageStyle.contentView}>
                        <Organizer />
                        <StopsBlock />
                        <Separator />
                        <ApplicantsBlock />
                        <ButtonsBlock />
                    </View>
                )}
            </View>
        );
    };

    return (
        <>
            <BottomPopup
                style={JourneyPageStyle.bottomPopup}
                snapPoints={[
                    "80%",
                    "45%",
                    "40%",
                    "35%",
                    "30%",
                    "25%",
                    "20%",
                    "15%"
                ]}
                renderContent={journeyInfoContent}
                initialSnap={0}
                renderHeader={() => {}}
                enabledInnerScrolling={false}
            />
        </>
    );
};

export default JourneyPage;
